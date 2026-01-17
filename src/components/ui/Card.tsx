type Props = {
  title: string
  description: string
}

export function Card({ title, description }: Props) {
  return (
    <div className="rounded-sm border border-blue-800 p-6 hover:border-zinc-700 transition">
      <h2 className="font-large mb-2">{title}</h2>
      <p className="text-xl text-zinc-400">{description}</p>
    </div>
  )
}
