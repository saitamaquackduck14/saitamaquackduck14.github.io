import { motion } from "framer-motion"

type Props = {
  size: number
  x: number
  delay: number
  duration: number
}

export function Bubble({ size, x, delay, duration }: Props) {
  return (
    <motion.div
      initial={{ y: "0%", opacity: 0 }}
      animate={{ y: "-180vh", opacity: [0, 0.6, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        bottom: "-10%",
        left: `${x}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `
          radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,0.8),
            rgba(255,255,255,0.35) 40%,
            rgba(255,255,255,0.12) 60%,
            rgba(255,255,255,0.05) 100%
          )
        `,
        boxShadow: `
          inset -3px -4px 8px rgba(255,255,255,0.15),
          inset 3px 3px 8px rgba(255,255,255,0.08)
        `,
        filter: "blur(0.2px)",
      }}
    />
  )
}
