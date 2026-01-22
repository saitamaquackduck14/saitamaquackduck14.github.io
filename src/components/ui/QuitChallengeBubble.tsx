import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface QuitChallengeBubbleProps {
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
}

export function QuitChallengeBubble({ position = { top: "20%", right: "8%" } }: QuitChallengeBubbleProps) {
  const navigate = useNavigate()

  const handleQuit = () => {
    navigate("/experiments")
  }

  return (
    <motion.button
      onClick={handleQuit}
      style={{
        position: "absolute",
        ...position,
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.4))",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.5), inset -2px -2px 8px rgba(0, 0, 0, 0.2)",
      }}
      animate={{
        backdropFilter: ["blur(0px)", "blur(8px)", "blur(2px)", "blur(8px)", "blur(0px)"],
        opacity: [0.3, 0.8, 0.5, 0.8, 0.3],
        scale: [0.95, 1.05, 0.98, 1.05, 0.95],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex items-center justify-center text-center font-bold text-lg hover:scale-110 transition-transform"
    // style={{
    //   color: "#001f3f",
    //   textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
    // }}
    >
      <span className="pointer-events-none">quit</span>
    </motion.button>
  )
}
