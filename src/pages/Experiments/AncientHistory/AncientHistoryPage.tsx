import { useState } from "react"
import { Link } from "react-router-dom"
import { historyMilestones } from "./data"

const controlClassName = "rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"

export function AncientHistoryPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = historyMilestones[selectedIndex]

  return (
    <div className="min-h-full bg-zinc-950 px-4 py-12 sm:px-8 sm:py-16">
      <div className="max-w-5xl mx-auto">
        <Link to="/experiments" className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100">
          ← Experiments
        </Link>

        <header className="mt-8 mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100">Ancient History</h1>
          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            Six milestones to explore cities, writing, and political power. Pick a
            moment, look at the evidence, and question what it can tell us.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500">
            A selective introduction, not a complete world history. These dates mark
            milestones, not the beginnings or endings of whole civilizations.
            “c.” means approximately. BCE means before the Common Era.
          </p>
        </header>

        <img
          src="/assets/ancient-history.JPG"
          alt=""
          className="mb-10 h-48 sm:h-64 w-full rounded-2xl border border-zinc-700 object-cover"
        />

        <nav aria-label="History milestones" className="mb-10">
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {historyMilestones.map((milestone, index) => (
              <li key={milestone.id}>
                <button
                  type="button"
                  aria-pressed={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-full w-full rounded border p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100 ${
                    selectedIndex === index
                      ? "border-zinc-100 text-zinc-100"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  <span className="block text-xs tracking-widest mb-2">{milestone.date}</span>
                  <span>{milestone.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <article key={selected.id} aria-labelledby="milestone-title" className="border-t border-zinc-800 pt-8">
          <p role="status" className="text-xs tracking-widest text-zinc-500">
            {selectedIndex + 1} / {historyMilestones.length} · {selected.date}
            <span className="sr-only"> · {selected.title}</span>
          </p>
          <h2 id="milestone-title" className="mt-3 text-3xl font-bold text-zinc-100">{selected.title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{selected.region}</p>
          <p className="mt-6 max-w-3xl leading-relaxed text-zinc-100">{selected.overview}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <section aria-labelledby="evidence-title">
              <h3 id="evidence-title" className="text-lg font-semibold text-zinc-100">Look at the evidence</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{selected.evidence}</p>
            </section>
            <section aria-labelledby="caution-title">
              <h3 id="caution-title" className="text-lg font-semibold text-zinc-100">Keep in mind</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{selected.caution}</p>
            </section>
          </div>

          <details className="mt-8 rounded border border-zinc-700 p-5">
            <summary className="cursor-pointer text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100">
              {selected.question}
            </summary>
            <p className="mt-4 leading-relaxed text-zinc-400">{selected.answer}</p>
          </details>

          <p className="mt-6 text-sm text-zinc-400">
            Further reading: <a href={selected.source.href} className="underline underline-offset-4 hover:text-zinc-100">{selected.source.label}</a>
            <span className="text-zinc-500"> (Wikipedia overview)</span>
          </p>

          <nav aria-label="Read another milestone" className="mt-10 flex justify-between gap-4 border-t border-zinc-800 pt-6">
            <button type="button" className={controlClassName} disabled={selectedIndex === 0} onClick={() => setSelectedIndex(index => index - 1)}>
              ← Previous
            </button>
            <button type="button" className={controlClassName} disabled={selectedIndex === historyMilestones.length - 1} onClick={() => setSelectedIndex(index => index + 1)}>
              Next →
            </button>
          </nav>
        </article>
      </div>
    </div>
  )
}
