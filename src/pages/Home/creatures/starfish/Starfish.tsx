import { motion } from "framer-motion"
import { useState } from "react"
import { Creature } from "../base/Creature"

type StarfishProps = {
  x: number
  y: number
  size: number
}

export function Starfish({ x, y, size }: StarfishProps) {
  const [state, setState] = useState<
    "idle" | "reacting" | "detaching" | "falling"
  >("idle")

  return (
    <Creature x={x} y={y}>
      <motion.div
        style={{ width: size, cursor: "pointer" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={() => {
          if (state === "idle") {
            setState("reacting")
            setTimeout(() => setState("detaching"), 800)
            setTimeout(() => setState("falling"), 1400)
          }
        }}
      >
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          animate={
            state === "falling"
              ? { y: 260, rotate: 120, opacity: 0 }
              : {}
          }
          transition={
            state === "falling"
              ? { duration: 1.6, ease: "easeIn" }
              : {}
          }
        >
          <defs>
            {/* BODY GRADIENT */}
            <radialGradient id="starfish-body">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="70%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#c2410c" />
            </radialGradient>

            {/* PAPULAE TEXTURE */}
            <pattern
              id="papulae"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="6"
                cy="6"
                r="2"
                fill="rgba(255,255,255,0.25)"
              />
            </pattern>
          </defs>

          {/* ARMS */}
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <motion.path
              key={i}
              d="M100,15 C125,55 125,90 100,105 C75,90 75,55 100,15 Z"
              fill="url(#starfish-body)"
              transform={`rotate(${deg} 100 100)`}
              animate={
                state === "reacting"
                  ? { rotate: [deg, deg + 6, deg - 4, deg] }
                  : { rotate: [deg, deg + 1, deg] }
              }
              transition={{
                duration: state === "reacting" ? 0.4 : 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
            />
          ))}

          {/* CENTRAL DISC */}
          <circle
            cx="100"
            cy="100"
            r="34"
            fill="url(#starfish-body)"
          />

          {/* PAPULAE OVERLAY */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="url(#papulae)"
            opacity={0.35}
          />

          {/* PEDICELLARIA (tiny pinchers) */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const r = 60 + (i % 3) * 6
            return (
              <motion.circle
                key={i}
                cx={100 + Math.cos(angle) * r}
                cy={100 + Math.sin(angle) * r}
                r="2"
                fill="#7c2d12"
                animate={{
                  scale:
                    state === "reacting"
                      ? [1, 1.6, 1]
                      : [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            )
          })}

          {/* EYES */}
          <circle cx="90" cy="100" r="4" fill="#000" />
          <circle cx="110" cy="100" r="4" fill="#000" />

          {/* MOUTH */}
          <motion.path
            d="M90,115 C100,120 110,120 120,115"
            stroke="#000"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={
              state === "reacting"
                ? { d: ["M90,115 C100,125 110,125 120,115", "M90,115 C100,120 110,120 120,115"] }
                : {}
            }
            transition={{ duration: 0.4 }}
          />
        </motion.svg>
      </motion.div>
    </Creature>
  )
}
