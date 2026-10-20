type Link = { href: string; label: string }

export function ResumeText({ text, links }: { text: string; links: Link[] }) {
  const lookup = new Map(links.map(link => [link.label, link.href]))
  const labels = [...lookup.keys()].filter(Boolean).sort((a, b) => b.length - a.length)
  const expression = labels.map(label => label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
  const parts = expression ? text.split(new RegExp(`(${expression})`, "g")) : [text]

  return (
    <pre className="mt-5 overflow-auto whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-300">
      {parts.map((part, index) => lookup.has(part) ? (
        <a key={index} href={lookup.get(part)} className="underline underline-offset-4 hover:text-zinc-100">{part}</a>
      ) : part)}
    </pre>
  )
}
