import { useEffect, useState } from "react"
import { Crab } from "./Crab"

type CrabAgent = {
  id: number
  direction: "left" | "right"
  size: number
  xOffset: number
  state: "walking" | "talking"
}

const MIN_SIZE = 220
const MAX_SIZE = 300
const MIN_SPACING = 260

export function CrabField({ groundY }: { groundY: number }) {
  const [crabs, setCrabs] = useState<CrabAgent[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCrabs((prev) => {
        const active = prev.slice(-2)

        const size =
          MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE)

        const direction =
          Math.random() > 0.5 ? "left" : "right"

        const last = active[active.length - 1]

        const xOffset = last
          ? last.xOffset + MIN_SPACING + Math.random() * 80
          : 0

        return [
          ...active,
          {
            id: Date.now(),
            size,
            direction,
            xOffset,
            state: "walking",
          },
        ]
      })
    }, 14000 + Math.random() * 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {crabs.map((crab) => (
        <Crab
          key={crab.id}
          size={crab.size}
          direction={crab.direction}
          groundY={groundY}
          xOffset={crab.xOffset}
          socialState={crab.state}
          onMeet={() => {
            setCrabs((cs) =>
              cs.map((c) =>
                c.id === crab.id && c.state === "walking"
                  ? { ...c, state: "talking" }
                  : c
              )
            )
          }}
          onLeave={() => {
            setCrabs((cs) =>
              cs.filter((c) => c.id !== crab.id)
            )
          }}
        />
      ))}
    </>
  )
}
