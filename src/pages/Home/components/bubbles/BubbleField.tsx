import { Bubble } from "./Bubble"

const bubbles = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  size: Math.random() * 24 + 16,
  x: Math.random() * 100,
  delay: Math.random() * 10,
  duration: Math.random() * 25 + 20,
}))

export function BubbleField() {
  return (
    <>
      {bubbles.map((b) => (
        <Bubble key={b.id} {...b} />
      ))}
    </>
  )
}
