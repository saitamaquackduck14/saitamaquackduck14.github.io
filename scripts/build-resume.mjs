import { createHash } from "node:crypto"
import { execFileSync } from "node:child_process"
import { mkdtemp, readFile, writeFile, mkdir, rm, readdir } from "node:fs/promises"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { extractResumeLinks } from "./resume-links.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = join(root, "resume/resume.tex")
const output = join(root, "public/resume")
const manifestPath = join(root, "resume/resume.generated.json")
const hash = bytes => createHash("sha256").update(bytes).digest("hex")
const sourceSha256 = hash(await readFile(source))
let current = false
try {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"))
  current = manifest.schemaVersion === 2 && Array.isArray(manifest.pages) && manifest.pages.length > 0 && manifest.sourceSha256 === sourceSha256 &&
    manifest.pdfSha256 === hash(await readFile(join(output, "resume.pdf")))
  for (const page of manifest.pages) {
    if (hash(await readFile(join(output, page.file))) !== page.sha256) current = false
  }
} catch {
  current = false
  // Missing or outdated output must be rebuilt from the source.
}

if (current) {
  console.log("Resume PDF and previews match the TeX source; no TeX installation needed.")
} else {
  const temporary = await mkdtemp(join(tmpdir(), "site-resume-"))
  try {
    // The optional local tree supports this cloud machine's TeX installation.
    const localTex = join(root, "../.resume-texmf/usr/share/texlive/texmf-dist/tex/generic/ulem//")
    const env = { ...process.env, TEXINPUTS: `${dirname(source)}//:${localTex}:${process.env.TEXINPUTS ?? ""}:` }
    for (let pass = 0; pass < 2; pass++) {
      execFileSync("pdflatex", ["-no-shell-escape", "-interaction=nonstopmode", "-halt-on-error", source], {
        cwd: temporary, env, stdio: "pipe", timeout: 60000,
      })
    }
    const pdfPath = join(temporary, "resume.pdf")
    const pdf = await readFile(pdfPath)
    const text = execFileSync("pdftotext", ["-layout", pdfPath, "-"], { encoding: "utf8", timeout: 30000 })
    const linkPages = extractResumeLinks(execFileSync("pdftohtml", ["-xml", "-i", "-hidden", "-nomerge", "-stdout", pdfPath], { encoding: "utf8", timeout: 30000 }))
    execFileSync("pdftoppm", ["-scale-to", "2000", "-png", pdfPath, join(temporary, "page")], { timeout: 30000 })
    const pageFiles = (await readdir(temporary)).filter(name => /^page-\d+\.png$/.test(name)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    if (pageFiles.length === 0) throw new Error("No resume preview pages were generated.")
    await mkdir(output, { recursive: true })
    const pages = []
    for (const file of pageFiles) {
      const bytes = await readFile(join(temporary, file))
      await writeFile(join(output, file), bytes)
      pages.push({ file, sha256: hash(bytes), links: linkPages.get(pages.length + 1) ?? [] })
    }
    await writeFile(join(output, "resume.pdf"), pdf)
    await writeFile(manifestPath, `${JSON.stringify({ schemaVersion: 2, sourceSha256, pdfSha256: hash(pdf), pages, text }, null, 2)}\n`)
    for (const file of await readdir(output)) {
      if (/^page-\d+\.png$/.test(file) && !pageFiles.includes(file)) await rm(join(output, file))
    }
    console.log("Built resume PDF, text, and preview pages from resume/resume.tex.")
  } catch (error) {
    console.error("Resume compilation failed. Install pdfLaTeX and Poppler with the packages listed in resume/README.md, then run npm run resume:build.")
    if (error.stdout) console.error(error.stdout.toString().slice(-3000))
    throw error
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
}
