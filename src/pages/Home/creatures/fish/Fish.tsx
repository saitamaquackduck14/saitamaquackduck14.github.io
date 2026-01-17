import { motion } from "framer-motion"
import { Creature } from "../base/Creature"
import type { FishStyle } from "./types"

type Props = {
  y: number
  size: number
  speed: number
  delay: number
  style: FishStyle
}

export function Fish({ y, size, speed, delay, style }: Props) {
  const gradientId = `fish-grad-${style.bodyColor.replace(/[^a-z0-9]/gi, "")}`
  const scaleId = `fish-scales-${style.bodyColor.replace(/[^a-z0-9]/gi, "")}`

  return (
    <Creature y={y}>
      <motion.div
        initial={{ x: "-20vw" }}
        animate={{ x: "120vw" }}
        transition={{
          duration: speed,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: size * 2 }}
      >
        <svg
          width={size * 2}
          height={size}
          viewBox="0 0 200 100"
          style={{ overflow: "visible", transform: "scaleX(-1)" }}
        >
          <defs>
            {/* BODY GRADIENT */}
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={style.bodyColor} />
              <stop offset="70%" stopColor={style.accentColor} />
            </linearGradient>

            {/* SCALE PATTERN */}
            <pattern
              id={scaleId}
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="1.2" fill="rgba(255,255,255,0.25)" />
            </pattern>
          </defs>

          {/* BODY (animated shape) */}
          <motion.path
            d="M20,50 C50,10 120,10 160,50 C120,90 50,90 20,50 Z"
            fill={`url(#${gradientId})`}
            animate={{
              d: [
                "M20,50 C50,12 120,10 160,50 C120,88 50,90 20,50 Z",
                "M20,50 C50,10 120,12 160,50 C120,90 50,88 20,50 Z",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SCALES */}
          {style.scalePattern !== "none" && (
            <path
              d="M20,50 C50,10 120,10 160,50 C120,90 50,90 20,50 Z"
              fill={`url(#${scaleId})`}
              opacity={style.scaleDensity}
            />
          )}

          {/* SHEEN / HIGHLIGHT */}
          <path
            d="M30,45 C65,25 120,30 150,50"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={style.luminescence}
          />

          {/* TAIL */}
          <motion.path
            d="M160,50 L195,25 L195,75 Z"
            fill={style.accentColor}
            animate={{ rotate: [0, 20, -20, 0] }}
            style={{
              transformOrigin: "160px 50px",
              transformBox: "fill-box",
            }}
            transition={{
              duration: 0.5 / style.tailFrequency,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* EYE */}
          <motion.circle
            cx="55"
            cy="45"
            r={style.eyeSize}
            fill="#000"
            animate={{ cx: [55, 57, 55] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </Creature>
  )
}
