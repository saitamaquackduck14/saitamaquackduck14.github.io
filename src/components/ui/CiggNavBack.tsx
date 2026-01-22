import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface CiggNavBackProps {
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  onNavigate?: () => void
}

export function CiggNavBack({
  position = { top: "-18px", right: "18%" },
  onNavigate,
}: CiggNavBackProps) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate()
    } else {
      navigate(-1)
    }
  }

  return (
    <motion.div
      onClick={handleNavigate}
      style={{
        position: "absolute",
        ...position,
        zIndex: 25,
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Cigarette - Standing/tilted */}
      <motion.div
        style={{
          position: "relative",
          width: "5px",
          height: "50px",
          background: "linear-gradient(90deg, #f5deb3 0%, #d4a574 50%, #c9975d 100%)",
          borderRadius: "3px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.3)",
          transformOrigin: "bottom center",
          rotate: -12,
        }}
      >
        {/* Ash section */}
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "6px",
            top: "0px",
            left: "0.5px",
            background: "linear-gradient(90deg, #4a4a4a, #6a6a6a)",
            borderRadius: "2px 2px 0 0",
          }}
        />

        {/* Ember */}
        <motion.div
          style={{
            position: "absolute",
            width: "5px",
            height: "5px",
            background: "radial-gradient(circle, #ff9900 0%, #ff6600 100%)",
            borderRadius: "50%",
            top: "-1px",
            left: "0px",
            boxShadow: "0 0 4px #ff6600, 0 0 8px rgba(255, 102, 0, 0.7), inset 0 0.5px 1px rgba(255,200,0,0.3)",
          }}
          animate={{
            boxShadow: [
              "0 0 4px #ff6600, 0 0 8px rgba(255, 102, 0, 0.7), inset 0 0.5px 1px rgba(255,200,0,0.3)",
              "0 0 6px #ff8800, 0 0 12px rgba(255, 136, 0, 0.9), inset 0 1px 1px rgba(255,220,0,0.4)",
              "0 0 4px #ff6600, 0 0 8px rgba(255, 102, 0, 0.7), inset 0 0.5px 1px rgba(255,200,0,0.3)",
            ],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Smoke wisps */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`smoke-${i}`}
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            width: `${10 + i * 2}px`,
            height: `${10 + i * 2}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(220, 220, 220, ${0.5 - i * 0.12}) 0%, transparent 70%)`,
            filter: "blur(2px)",
            pointerEvents: "none",
            transform: "translateX(-50%)",
          }}
          animate={{
            y: [-20 - i * 15, -140 - i * 25],
            x: [0, (i % 2 === 0 ? 12 : -12) + (Math.random() - 0.5) * 8],
            opacity: [0, 0.6 - i * 0.12, 0],
            scale: [0.6, 1 + i * 0.15, 1.3 + i * 0.25],
          }}
          transition={{
            duration: 2.6 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  )
}
