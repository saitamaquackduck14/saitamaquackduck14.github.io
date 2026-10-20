import { portfolioQuestions } from "./portfolio"

export function QuestionPortfolio() {
  return (
    <section aria-labelledby="question-portfolio-title" className="mt-14 border-t border-zinc-800 pt-10">
      <h2 id="question-portfolio-title" className="text-3xl font-bold text-zinc-100">Questions portfolio</h2>
      <ol className="mt-8 space-y-10">
        {portfolioQuestions.map((item, index) => (
          <li key={item.id}>
            <article aria-labelledby={`${item.id}-title`}>
              <h3 id={`${item.id}-title`} className="text-xl font-semibold leading-relaxed text-zinc-100">{index + 1}. {item.question}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{item.guidance}</p>
              <p className="mt-2 text-xs tracking-wide text-zinc-500">Maximum {item.maxWords} words</p>
              {item.answer ? (
                <div className="mt-5 space-y-4 leading-relaxed text-zinc-300">
                  {item.answer.trim().split(/\n\s*\n/).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                </div>
              ) : (
                <p className="mt-5 text-sm text-zinc-500">Not answered yet.</p>
              )}
              {item.sources.length > 0 && (
                <ul aria-label="Sources" className="mt-4 space-y-2 text-sm text-zinc-400">
                  {item.sources.map(source => <li key={source.href}><a href={source.href} className="underline underline-offset-4 hover:text-zinc-100">{source.label}</a></li>)}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
