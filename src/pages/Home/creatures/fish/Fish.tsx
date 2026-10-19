import { useId } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Creature } from "../base/Creature"
import { bodyPath, swimFrames, tailPath } from "./dynamics"
import type { FishStyle } from "./types"

type Props = {
  y: number
  size: number
  speed: number
  delay: number
  style: FishStyle
}

export function Fish({ y, size, speed, delay, style }: Props) {
  const id = useId()
  const gradientId = `fish-grad-${id}`
  const scaleId = `fish-scales-${id}`
  const reducedMotion = useReducedMotion()
  const body = bodyPath(style)
  const bodyAnimation = reducedMotion ? undefined : {
    d: [body, bodyPath(style, style.waveAmplitude * 2), body],
  }

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
        <motion.svg
          width={size * 2}
          height={size}
          viewBox="0 0 200 100"
          style={{ overflow: "visible", scaleX: -1 }}
          animate={reducedMotion ? undefined : swimFrames(style, delay)}
          transition={{
            duration: style.waveLength * (style.swimStyle === "lazy" ? 6 : 4),
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
            d={body}
            fill={`url(#${gradientId})`}
            animate={bodyAnimation}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SCALES */}
          {style.scalePattern !== "none" && (
            <motion.path
              d={body}
              animate={bodyAnimation}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
            d={tailPath(style)}
            fill={style.accentColor}
            animate={reducedMotion ? undefined : {
              rotate: [0, 20 / style.tailStiffness, -20 / style.tailStiffness, 0],
            }}
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
        </motion.svg>
      </motion.div>
    </Creature>
  )
}
