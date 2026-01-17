function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="max-w-4xl mx-auto px-6 py-24">
        <header className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Systems Lab
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            A working space for small experiments in systems, abstractions,
            tooling, and reasoning. Built incrementally. Opinions may change.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition">
            <h2 className="font-medium mb-2">Experiments</h2>
            <p className="text-sm text-zinc-400">
              Small, focused explorations. Simulations, models, visual tools.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition">
            <h2 className="font-medium mb-2">Notes</h2>
            <p className="text-sm text-zinc-400">
              Thinking in public. Rough ideas, not polished essays.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition">
            <h2 className="font-medium mb-2">Utilities</h2>
            <p className="text-sm text-zinc-400">
              Small tools built to answer specific questions.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition">
            <h2 className="font-medium mb-2">Archive</h2>
            <p className="text-sm text-zinc-400">
              Old experiments kept for reference, not vanity.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
