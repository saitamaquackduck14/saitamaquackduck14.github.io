import { useId, useState } from "react"
import { album } from "./album"

export function BandcampPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const panelId = useId()

  function togglePlayer() {
    setHasOpened(true)
    setIsOpen(open => !open)
  }

  return (
    <aside
      aria-label="Music"
      className={`absolute bottom-4 right-4 z-30 flex max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)] flex-col rounded border border-zinc-700 bg-zinc-950 text-zinc-100 shadow-2xl ${isOpen ? "w-[350px]" : ""}`}
    >
      <button
        type="button"
        onClick={togglePlayer}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full shrink-0 items-center justify-between gap-6 rounded px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"
      >
        <span>♫ Music</span>
        <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        <span className="sr-only"> · {album.title}</span>
      </button>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={isOpen ? "min-h-0 w-full overflow-y-auto" : "invisible absolute bottom-0 right-0 h-0 w-full overflow-hidden"}
      >
        <div className="border-t border-zinc-800 px-4 py-3">
          <p className="text-sm">{album.title}</p>
          <p className="mt-1 text-xs text-zinc-400">{album.artist}</p>
        </div>

        {hasOpened && (
          <iframe
            title={`${album.title} by ${album.artist} — Bandcamp player`}
            src={album.embedUrl}
            allow="autoplay"
            className="block aspect-square h-auto w-full border-0"
          />
        )}

        <a
          href={album.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 text-xs text-zinc-400 underline underline-offset-4 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"
        >
          Listen on Bandcamp ↗
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </aside>
  )
}
