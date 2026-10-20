import resumeManifest from "../../../resume/resume.generated.json?raw"
import { QuestionPortfolio } from "./QuestionPortfolio"
import { ResumeText } from "./ResumeText"

type ResumeLink = { href: string; label: string; left: number; top: number; width: number; height: number }
const resume = JSON.parse(resumeManifest) as { pdfSha256: string; pages: { file: string; sha256: string; links: ResumeLink[] }[]; text: string }
const links = [...new Map(resume.pages.flatMap(page => page.links).map(link => [link.href, link])).values()]
const pdfUrl = `/resume/resume.pdf?v=${resume.pdfSha256.slice(0, 12)}`
const sourceUrl = "https://github.com/saitamaquackduck14/saitamaquackduck14.github.io/blob/master/resume/resume.tex"

const linkClassName = "rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"

export function AboutMePage() {
  return (
    <div className="min-h-full bg-zinc-950 px-4 pt-12 pb-72 sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-zinc-100 sm:text-5xl">About Me</h1>
        <div className="mt-6 mb-8 flex flex-wrap gap-3">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>Open resume PDF ↗</a>
          <a href={pdfUrl} download="Kaushley-Mehra-Resume.pdf" className={linkClassName}>Download PDF</a>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>TeX source on GitHub ↗</a>
        </div>

        <div className="space-y-6" aria-label="Resume preview">
          {resume.pages.map((page, index) => (
            <div key={page.file} className="relative">
              <img src={`/resume/${page.file}?v=${page.sha256.slice(0, 12)}`} alt={`Kaushley Mehra's resume, page ${index + 1}. A text version is available below.`} className="block h-auto w-full rounded border border-zinc-700 bg-white" />
              {page.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href} aria-label={link.label} className="absolute rounded-sm hover:outline hover:outline-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950" style={{ left: `${link.left}%`, top: `${link.top}%`, width: `${link.width}%`, height: `${link.height}%` }} />
              ))}
            </div>
          ))}
        </div>

        <nav aria-label="Resume links" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
          {links.map(link => <a key={link.href} href={link.href} className="break-all underline underline-offset-4 hover:text-zinc-100">{link.label}</a>)}
        </nav>

        <details className="mt-8 rounded border border-zinc-700 p-5">
          <summary className="cursor-pointer text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100">Read resume as text</summary>
          <ResumeText text={resume.text} links={links} />
        </details>

        <QuestionPortfolio />
      </div>
    </div>
  )
}
