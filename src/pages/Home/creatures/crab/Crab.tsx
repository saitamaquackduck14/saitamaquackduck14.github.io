import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { Creature } from "../base/Creature"
import { CrabArtwork } from "./CrabArtwork"

type CrabProps = {
  size: number
  direction: "left" | "right"
  groundY: number

  xOffset: number
  socialState: "walking" | "talking"
  onMeet: () => void
  onLeave: () => void
}

export function Crab({
  size,
  direction,
  groundY,
  xOffset,
  socialState,
  onMeet,
  onLeave,
}: CrabProps) {
  const controls = useAnimation()

  useEffect(() => {
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200

    async function walkCycle() {
      const fromX =
        direction === "left"
          ? -size - 300
          : viewportWidth + size + 300

      const toX =
        direction === "left"
          ? viewportWidth * 0.55 + xOffset
          : viewportWidth * 0.45 - xOffset

      await controls.set({ x: fromX })

      await controls.start({
        x: toX,
        transition: {
          duration: 14 + Math.random() * 4,
          ease: [0.7, 0, 0.9, 1],
        },
      })

      if (socialState === "talking") {
        onMeet()

        await controls.start({
          x: toX + (Math.random() * 8 - 4),
          transition: {
            duration: 0.5,
            ease: [0.7, 0, 0.9, 1],
          },
        })

        await new Promise((r) =>
          setTimeout(r, 2200 + Math.random() * 1200)
        )
      }

      await controls.start({
        x:
          direction === "left"
            ? viewportWidth + size + 400
            : -size - 400,
        transition: {
          duration: 10,
          ease: [0.7, 0, 0.9, 1],
        },
      })

      onLeave()
    }

    walkCycle()
  }, [
    controls,
    direction,
    groundY,
    size,
    xOffset,
    socialState,
    onMeet,
    onLeave,
  ])

  return (
    <Creature y={groundY}>
      <motion.div animate={controls} style={{ width: size }}>
        <CrabArtwork size={size} socialState={socialState} />
      </motion.div>
    </Creature>
  )
}
