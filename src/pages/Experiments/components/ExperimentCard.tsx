import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import type { ExperimentSection } from "../config"

interface ExperimentCardProps {
  section: ExperimentSection
  index: number
}

export function ExperimentCard({ section, index }: ExperimentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Color overlays for variety
  const overlayColors = [
    "from-blue-600/40 via-purple-600/30 to-zinc-950",
    "from-amber-500/40 via-orange-600/30 to-zinc-950",
    "from-cyan-500/40 via-blue-600/30 to-zinc-950",
    "from-yellow-500/40 via-amber-600/30 to-zinc-950",
    "from-violet-600/40 via-fuchsia-600/30 to-zinc-950",
    "from-emerald-500/40 via-teal-600/30 to-zinc-950",
  ]

  const overlayColor = overlayColors[index % overlayColors.length]

  return (
    <Link
      to={section.path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 aspect-[5/4] shadow-2xl"
    >
      {/* Background Image - Initially Blurred */}
      {section.image && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${section.image})`,
          }}
          initial={{ filter: "blur(20px)", scale: 1.1 }}
          animate={{
            filter: isHovered ? "blur(0px)" : "blur(20px)",
            scale: isHovered ? 1 : 1.1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      )}

      {/* Colorful Overlay Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-t ${overlayColor}`}
        initial={{ opacity: 0.85 }}
        animate={{
          opacity: isHovered ? 0.4 : 0.85,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />

      {/* Content with better text visibility */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {section.title}
          </h2>

          <motion.p
            className="text-base text-zinc-100 line-clamp-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {section.description}
          </motion.p>
        </motion.div>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 border-white/80 backdrop-blur-sm bg-white/10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ boxShadow: "0 0 0 0px rgba(255, 255, 255, 0)" }}
        animate={{
          boxShadow: isHovered
            ? "0 0 0 2px rgba(255, 255, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4)"
            : "0 0 0 0px rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}
