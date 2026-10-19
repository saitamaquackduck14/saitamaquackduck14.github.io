import { useId, useState } from "react"
import { albums } from "./album"
import styles from "./BandcampPlayer.module.css"

export function BandcampPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [albumId, setAlbumId] = useState(albums[0].id)
  const album = albums.find(item => item.id === albumId) ?? albums[0]
  const panelId = useId()
  const selectId = useId()

  function togglePlayer() {
    setHasOpened(true)
    setIsOpen(open => !open)
  }

  return (
    <aside
      aria-label="Music"
      className={`${styles.deck} absolute bottom-4 right-4 z-30 flex w-[350px] max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)] flex-col text-zinc-100 shadow-2xl`}
    >
      <button
        type="button"
        onClick={togglePlayer}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${isOpen ? "Hide" : "Show"} Bandcamp controls for ${album.title}`}
        className={`${styles.cassette} w-full shrink-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100`}
      >
        <span className={styles.screw} aria-hidden="true" />
        <span className={styles.label} aria-hidden="true">
          <span className={styles.labelHeading}>A · Godspeed You! Black Emperor</span>
          <span className={styles.albumTitle}>{album.title}</span>
          <span className={styles.window}>
            <span className={styles.reel} />
            <span className={styles.tape}>STEREO</span>
            <span className={styles.reel} />
          </span>
        </span>
        <span className={styles.cassetteBottom} aria-hidden="true">
          <span>♫ Music</span>
          <span>{isOpen ? "Hide player −" : "Open player +"}</span>
        </span>
      </button>

      <div className="flex shrink-0 items-center gap-3 border-t border-zinc-700 px-3 py-2">
        <label htmlFor={selectId} className="text-xs text-zinc-400">Album</label>
        <select
          id={selectId}
          value={album.id}
          onChange={event => {
            setAlbumId(event.target.value)
            setHasOpened(true)
            setIsOpen(true)
          }}
          className="min-w-0 flex-1 rounded border border-zinc-700 bg-zinc-950 px-2 py-2 text-xs text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100"
        >
          {albums.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
      </div>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={isOpen ? "min-h-0 w-full overflow-y-auto" : "invisible absolute bottom-0 right-0 h-0 w-full overflow-hidden"}
      >
        {hasOpened && (
          <iframe
            key={album.id}
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
