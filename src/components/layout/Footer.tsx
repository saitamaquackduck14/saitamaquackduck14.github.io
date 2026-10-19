export function Footer() {
  return (
    <footer className="shrink-0 border-t border-zinc-800 bg-zinc-950 px-6 py-3 text-center text-xs leading-relaxed text-zinc-400">
      <p>
        Maintained by the original human owner and{" "}
        <span className="text-zinc-200">Codex</span> since{" "}
        <time dateTime="2026-10-20">20 October 2026</time>.
        <span className="mx-2 hidden sm:inline" aria-hidden="true">·</span>
        <span className="block sm:inline">
          With love from your coding agent <span className="text-rose-300">♥</span>
        </span>
      </p>
    </footer>
  )
}
