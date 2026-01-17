import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { Creature } from "../base/Creature"

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
        <svg
          width={size}
          height={size * 0.55}
          viewBox="0 0 300 160"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient id="crab-shell" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#b91c1c" />
              <stop offset="45%" stopColor="#991b1b" />
              <stop offset="75%" stopColor="#7f1d1d" />
              <stop offset="100%" stopColor="#4c0519" />
            </radialGradient>
          </defs>

          {/* BODY */}
          <path
            d="
              M40,80
              C45,40 95,30 150,35
              C205,30 255,40 260,80
              C255,115 205,125 150,120
              C95,125 45,115 40,80
              Z
            "
            fill="url(#crab-shell)"
          />

          {/* LEGS */}
          {[...Array(5)].map((_, i) => {
            const baseX = 90 + i * 25
            return (
              <motion.path
                key={i}
                d={`M ${baseX} 115 L ${baseX - 14} 135 L ${baseX - 8
                  } 155`}
                stroke="#2a120b"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                animate={{
                  d: [
                    `M ${baseX} 115 L ${baseX - 14} 135 L ${baseX - 8
                    } 155`,
                    `M ${baseX} 115 L ${baseX - 8} 130 L ${baseX - 18
                    } 150`,
                  ],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.14,
                  ease: [0.7, 0, 0.9, 1],
                }}
              />
            )
          })}

          {/* LEFT CLAW */}
          <motion.g
            animate={
              socialState === "talking"
                ? { y: [0, -2, 0] }
                : {}
            }
            transition={{
              duration: 0.5,
              repeat: socialState === "talking" ? Infinity : 0,
              ease: [0.7, 0, 0.9, 1],
            }}
          >
            <path
              d="M40,80 C20,65 10,50 25,45 C45,50 55,65 40,80 Z"
              fill="#7f1d1d"
            />
            <motion.path
              d="M40,80 C25,95 15,115 30,120 C50,115 55,95 40,80 Z"
              fill="#991b1b"
              animate={{
                d:
                  socialState === "talking"
                    ? [
                      "M40,80 C25,95 15,115 30,120 C50,115 55,95 40,80 Z",
                      "M40,80 C30,92 25,100 35,104 C50,100 55,92 40,80 Z",
                    ]
                    : undefined,
              }}
              transition={{
                duration: 0.4,
                repeat: socialState === "talking" ? Infinity : 0,
                ease: [0.7, 0, 0.9, 1],
              }}
            />
          </motion.g>

          {/* RIGHT CLAW */}
          <motion.g
            animate={
              socialState === "talking"
                ? { y: [0, -2, 0] }
                : {}
            }
            transition={{
              duration: 0.5,
              repeat: socialState === "talking" ? Infinity : 0,
              ease: [0.7, 0, 0.9, 1]
              ,
            }}
          >
            <path
              d="M260,80 C280,65 290,50 275,45 C255,50 245,65 260,80 Z"
              fill="#7f1d1d"
            />
            <motion.path
              d="M260,80 C275,95 285,115 270,120 C250,115 245,95 260,80 Z"
              fill="#991b1b"
              animate={{
                d:
                  socialState === "talking"
                    ? [
                      "M260,80 C275,95 285,115 270,120 C250,115 245,95 260,80 Z",
                      "M260,80 C270,92 275,100 265,104 C250,100 245,92 260,80 Z",
                    ]
                    : undefined,
              }}
              transition={{
                duration: 0.4,
                repeat: socialState === "talking" ? Infinity : 0,
                ease: [0.7, 0, 0.9, 1],
              }}
            />
          </motion.g>

          {/* EYES */}
          <circle cx="130" cy="50" r="5" fill="#000" />
          <circle cx="170" cy="50" r="5" fill="#000" />
        </svg>
      </motion.div>
    </Creature >
  )
}
