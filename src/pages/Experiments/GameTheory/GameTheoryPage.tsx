import { useState } from "react"
import { Link } from "react-router-dom"
import { exercises } from "./exercises"

type Answer = { selected: string; checked: boolean }
const buttonClassName = "rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"

export function GameTheoryPage() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const exercise = exercises[index]
  const answer = answers[exercise.id]
  const completed = exercises.filter(item => answers[item.id]?.checked).length
  const correct = exercises.filter(item => answers[item.id]?.checked && answers[item.id].selected === item.correctId).length

  return (
    <div className="min-h-full bg-zinc-950 px-4 pt-12 pb-72 sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-5xl">
        <Link to="/experiments" className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100">← Experiments</Link>
        <h1 className="mt-8 text-4xl font-bold text-zinc-100 sm:text-5xl">Game Theory</h1>
        <section aria-labelledby="brain-exercises-title" className="mt-10">
          <h2 id="brain-exercises-title" className="text-3xl font-bold">Brain exercises</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">Read the rules, make a decision, then check the reasoning. These are small, simplified games: the assumptions matter as much as the answer.</p>
          <p role="status" className="mt-4 text-sm text-zinc-400">{completed} / {exercises.length} checked · {correct} correct</p>

          <nav aria-label="Brain exercises" className="mt-6 flex flex-wrap gap-3">
            {exercises.map((item, itemIndex) => (
              <button key={item.id} type="button" aria-pressed={index === itemIndex} onClick={() => setIndex(itemIndex)} className={`${buttonClassName} ${index === itemIndex ? "border-zinc-100" : ""}`}>
                {itemIndex + 1}. {item.concept}
              </button>
            ))}
          </nav>

          <article key={exercise.id} className="mt-8 border-t border-zinc-800 pt-8" aria-labelledby="exercise-title">
            <p className="text-xs tracking-widest text-zinc-500">Exercise {index + 1} / {exercises.length}</p>
            <h3 id="exercise-title" className="mt-3 text-2xl font-bold">{exercise.title}</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">{exercise.setup}</p>

            {exercise.matrix && (
              <div className="my-6 overflow-x-auto">
                <table className="w-full max-w-3xl border-collapse text-left text-sm">
                  <caption className="mb-3 text-left text-xs text-zinc-400">{exercise.matrix.caption}</caption>
                  <thead><tr><th scope="col" className="border border-zinc-700 p-3">Your choice</th>{exercise.matrix.columns.map(column => <th key={column} scope="col" className="border border-zinc-700 p-3 font-medium">{column}</th>)}</tr></thead>
                  <tbody>{exercise.matrix.rows.map(row => <tr key={row.label}><th scope="row" className="border border-zinc-700 p-3 font-medium">{row.label}</th>{row.values.map((value, cellIndex) => <td key={cellIndex} className="border border-zinc-700 p-3 text-zinc-400">{value}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}

            <fieldset disabled={answer?.checked} className="mt-6">
              <legend className="mb-4 text-lg text-zinc-100">{exercise.prompt}</legend>
              <div className="grid gap-3">
                {exercise.options.map(option => (
                  <label key={option.id} className={`flex items-start gap-3 rounded border p-4 ${answer?.selected === option.id ? "border-zinc-100" : "border-zinc-700"} ${answer?.checked ? "" : "cursor-pointer hover:border-zinc-400"}`}>
                    <input type="radio" name={exercise.id} value={option.id} checked={answer?.selected === option.id} onChange={() => setAnswers(previous => ({ ...previous, [exercise.id]: { selected: option.id, checked: false } }))} className="mt-1 accent-zinc-100" />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="button" disabled={!answer || answer.checked} onClick={() => setAnswers(previous => ({ ...previous, [exercise.id]: { ...previous[exercise.id], checked: true } }))} className={`${buttonClassName} mt-5`}>Check answer</button>

            {answer?.checked && (
              <div role="status" className="mt-6 rounded border border-zinc-700 p-5">
                <p className="font-semibold">{answer.selected === exercise.correctId ? "Correct." : "Not quite."}</p>
                <p className="mt-3 leading-relaxed text-zinc-400">{exercise.explanation}</p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-zinc-800 pt-6">
              <button type="button" disabled={index === 0} onClick={() => setIndex(current => current - 1)} className={buttonClassName}>← Previous</button>
              <button type="button" onClick={() => { setAnswers({}); setIndex(0) }} className={buttonClassName}>Start again</button>
              <button type="button" disabled={index === exercises.length - 1} onClick={() => setIndex(current => current + 1)} className={buttonClassName}>Next →</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}
