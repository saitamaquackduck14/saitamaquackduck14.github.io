import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { Creature } from "../base/Creature"

type SquidProps = {
  x: number
  size: number
  speed: number
}

export function Squid({ x, size, speed }: SquidProps) {
  const controls = useAnimation()

  useEffect(() => {
    async function floatCycle() {
      while (true) {
        // upward pulse
        await controls.start({
          y: -40,
          scaleY: 0.92,
          transition: {
            duration: speed * 0.25,
            ease: "easeOut",
          },
        })

        // glide
        await controls.start({
          y: -120,
          scaleY: 1,
          transition: {
            duration: speed * 0.5,
            ease: "linear",
          },
        })

        // drift down
        await controls.start({
          y: 0,
          transition: {
            duration: speed * 0.4,
            ease: "easeInOut",
          },
        })

        // pause
        await new Promise((r) =>
          setTimeout(r, 1000 + Math.random() * 2000)
        )
      }
    }

    floatCycle()
  }, [controls, speed])

  return (
    <Creature x={x} y={85}>
      <motion.div animate={controls} style={{ width: size }}>
        <svg
          width={size}
          height={size * 1.4}
          viewBox="0 0 200 280"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Mantle gradient */}
            <linearGradient id="squid-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="40%" stopColor="#1e1b4b" />
              <stop offset="80%" stopColor="#0ea5e9" />
            </linearGradient>

            {/* Sheen */}
            <linearGradient id="squid-sheen" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* MANTLE */}
          <motion.path
            d="M100,20 C150,60 150,160 100,200 C50,160 50,60 100,20 Z"
            fill="url(#squid-body)"
            animate={{
              d: [
                "M100,20 C150,60 150,160 100,200 C50,160 50,60 100,20 Z",
                "M100,30 C145,70 145,155 100,195 C55,155 55,70 100,30 Z",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SHEEN */}
          <path
            d="M85,40 C105,60 110,120 95,170"
            stroke="url(#squid-sheen)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* TENTACLES */}
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M90 ${200 + i * 6} C85 230 75 260 70 290`}
              stroke="#0ea5e9"
              strokeWidth="4"
              fill="none"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* EYES */}
          <circle cx="80" cy="80" r="6" fill="#000" />
          <circle cx="120" cy="80" r="6" fill="#000" />
        </svg>
      </motion.div>
    </Creature>
  )
}
