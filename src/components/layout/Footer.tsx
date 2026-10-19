export function Footer() {
  return (
    <footer className="relative z-20 min-h-[48px] shrink-0 flex items-center justify-center border-t border-zinc-800 bg-zinc-950 px-6 py-3">
      <p className="text-[10px] tracking-widest text-zinc-500 text-center">
        © saitama™ ·{" "}
        Maintained by the original human owner and{" "}
        Codex since{" "}
        <time dateTime="2026-10-20">20 October 2026</time>.
        <span className="mx-2 hidden sm:inline" aria-hidden="true">·</span>
        <span className="block sm:inline">
          With love from your coding agent 😈
        </span>
      </p>
    </footer>
  )
}
