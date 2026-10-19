import { motion, useReducedMotion } from "framer-motion"
import { useId } from "react"

type Props = {
  size: number
  socialState: "walking" | "talking"
}

const legs = [0, 1, 2, 3]

export function CrabArtwork({ size, socialState }: Props) {
  const shellId = useId()
  const reducedMotion = useReducedMotion()
  const talking = socialState === "talking"

  return (
    <svg
      data-creature="crab"
      aria-hidden="true"
      width={size}
      height={size * 0.6}
      viewBox="0 0 300 180"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={shellId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>

      {/* Four bent legs on each side, with an alternating sideways scuttle. */}
      {[false, true].map(mirrored => (
        <g key={String(mirrored)} transform={mirrored ? "translate(300 0) scale(-1 1)" : undefined}>
          {legs.map(i => {
            const hipY = 103 + i * 8
            const kneeX = 54 - i * 7
            const footX = 38 - i * 7
            const footY = 127 + i * 11
            const resting = `M88,${hipY} L${kneeX},${footY - 15} L${footX},${footY}`
            const stepping = `M88,${hipY} L${kneeX + 7},${footY - 20} L${footX + 12},${footY - 5}`
            return (
              <motion.path
                key={i}
                d={resting}
                fill="none"
                stroke="#991b1b"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={reducedMotion ? undefined : { d: [resting, stepping, resting] }}
                transition={{ duration: talking ? 1.2 : 0.65, delay: (i % 2) * 0.32, repeat: Infinity, ease: "easeInOut" }}
              />
            )
          })}
        </g>
      ))}

      <motion.g
        animate={reducedMotion ? undefined : { y: [0, -2, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Big mitten-like pincers, mirrored around the shell. */}
        {[false, true].map(mirrored => (
          <g key={String(mirrored)} transform={mirrored ? "translate(300 0) scale(-1 1)" : undefined}>
            <motion.g
              animate={reducedMotion ? undefined : { rotate: [0, talking ? 14 : 5, 0] }}
              style={{ transformOrigin: "86px 103px" }}
              transition={{ duration: talking ? 0.5 : 1.5, delay: mirrored ? 0.25 : 0, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M87,105 Q57,99 43,76" fill="none" stroke="#7f1d1d" strokeWidth="12" strokeLinecap="round" />
              <path
                d="M42,82 C17,83 10,59 24,36 Q28,32 31,39 L37,55 L46,34 Q49,29 53,34 C73,52 67,77 48,82 Z"
                fill="#b91c1c"
                stroke="#4c0519"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path d="M23,59 Q23,72 33,75" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            </motion.g>
          </g>
        ))}

        {/* A squat shell and raised eyes give the crab a readable little face. */}
        <path d="M119,85 L113,50 M181,85 L187,50" stroke="#7f1d1d" strokeWidth="9" strokeLinecap="round" />
        <path
          d="M77,105 C77,75 105,64 150,65 C195,64 223,75 223,105 C223,135 195,145 150,145 C105,145 77,135 77,105 Z"
          fill={`url(#${shellId})`}
          stroke="#4c0519"
          strokeWidth="4"
        />
        <path d="M102,84 Q123,75 143,77" fill="none" stroke="#b91c1c" strokeWidth="5" strokeLinecap="round" />
        {[113, 187].map(x => (
          <g key={x}>
            <circle cx={x} cy="46" r="13" fill="#fff7ed" stroke="#4c0519" strokeWidth="3" />
            <circle cx={x + 2} cy="46" r="6" fill="#18181b" />
            <circle cx={x + 4} cy="43" r="2" fill="#fff7ed" />
          </g>
        ))}
        <path d="M136,110 Q150,124 164,110" fill="none" stroke="#4c0519" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="115" cy="110" rx="8" ry="4" fill="#991b1b" />
        <ellipse cx="185" cy="110" rx="8" ry="4" fill="#991b1b" />
      </motion.g>
    </svg>
  )
}
