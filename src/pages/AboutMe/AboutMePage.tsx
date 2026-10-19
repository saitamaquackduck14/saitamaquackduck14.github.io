import resumeSource from "../../../resume/resume.tex?raw"
import resumeSourceUrl from "../../../resume/resume.tex?url"
import resumeManifest from "../../../resume/resume.generated.json?raw"

const resume = JSON.parse(resumeManifest) as { pages: { file: string }[]; text: string }

const linkClassName = "rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"

export function AboutMePage() {
  return (
    <div className="min-h-full bg-zinc-950 px-4 pt-12 pb-72 sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-zinc-100 sm:text-5xl">About Me</h1>
        <div className="mt-6 mb-8 flex flex-wrap gap-3">
          <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className={linkClassName}>Open resume PDF ↗</a>
          <a href="/resume/resume.pdf" download="Kaushley-Mehra-Resume.pdf" className={linkClassName}>Download PDF</a>
          <a href={resumeSourceUrl} download="resume.tex" className={linkClassName}>Download TeX source</a>
        </div>

        <div className="space-y-6" aria-label="Resume preview">
          {resume.pages.map((page, index) => (
            <img key={page.file} src={`/resume/${page.file}`} alt={`Kaushley Mehra's resume, page ${index + 1}. A text version is available below.`} className="block h-auto w-full rounded border border-zinc-700 bg-white" />
          ))}
        </div>

        <details className="mt-8 rounded border border-zinc-700 p-5">
          <summary className="cursor-pointer text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100">Read resume as text</summary>
          <pre className="mt-5 overflow-auto whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-300">{resume.text}</pre>
        </details>

        <details className="mt-8 rounded border border-zinc-700 p-5">
          <summary className="cursor-pointer text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100">View TeX source</summary>
          <pre className="mt-5 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words text-xs leading-relaxed text-zinc-400"><code>{resumeSource}</code></pre>
        </details>
      </div>
    </div>
  )
}
