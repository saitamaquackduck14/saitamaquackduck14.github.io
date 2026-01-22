import { motion } from "framer-motion"
import type { BassLearning } from "../data"

interface LearningCardProps {
  learning: BassLearning
  index: number
  isRevealed: boolean
  onReveal: () => void
  isReturningToDeck: boolean
}

export function LearningCard({
  learning,
  index,
  isRevealed,
  onReveal,
  isReturningToDeck,
}: LearningCardProps) {
  // Calculate natural dealing angle (slight fan)
  const dealAngle = (index - 1) * 4 // -4deg, 0deg, +4deg
  const dealYOffset = Math.abs(index - 1) * 8 // Center card highest

  return (
    <motion.div
      className="relative w-full h-[420px] cursor-pointer"
      initial={{ opacity: 0, x: -200, rotate: -15, y: 50 }}
      animate={{
        opacity: isReturningToDeck ? 0 : 1,
        x: isReturningToDeck ? -200 : 0,
        y: isReturningToDeck ? -100 : dealYOffset,
        rotate: isReturningToDeck ? -25 : dealAngle,
        scale: isReturningToDeck ? 0.8 : 1,
      }}
      transition={{
        duration: 0.5,
        delay: isReturningToDeck ? index * 0.1 : index * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      onClick={!isRevealed ? onReveal : undefined}
      style={{
        imageRendering: isRevealed ? "auto" : "pixelated",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Back - Block Print Moiré Lattice */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl backface-hidden shadow-2xl border-4"
          style={{
            backfaceVisibility: "hidden",
            backgroundColor: "#001f3f",
            borderColor: "#FFD700",
            imageRendering: "pixelated",
          }}
        >
          <div
            className="w-full h-full rounded-sm"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  #001f3f 0px,
                  #001f3f 8px,
                  #0033cc 8px,
                  #0033cc 16px,
                  #001f3f 16px,
                  #001f3f 24px,
                  #FFD700 24px,
                  #FFD700 26px,
                  #001f3f 26px,
                  #001f3f 32px
                ),
                repeating-linear-gradient(
                  90deg,
                  #001f3f 0px,
                  #001f3f 8px,
                  #0033cc 8px,
                  #0033cc 16px,
                  #001f3f 16px,
                  #001f3f 24px,
                  #FFFFFF 24px,
                  #FFFFFF 26px,
                  #001f3f 26px,
                  #001f3f 32px
                ),
                repeating-linear-gradient(
                  45deg,
                  transparent 0px,
                  transparent 14px,
                  rgba(255, 215, 0, 0.1) 14px,
                  rgba(255, 215, 0, 0.1) 16px,
                  transparent 16px,
                  transparent 30px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent 0px,
                  transparent 14px,
                  rgba(255, 255, 255, 0.08) 14px,
                  rgba(255, 255, 255, 0.08) 16px,
                  transparent 16px,
                  transparent 30px
                )
              `,
              imageRendering: "pixelated",
            }}
          />
        </div>

        {/* Card Front - Parchment style */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-xl backface-hidden shadow-2xl border-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#f5deb3",
            borderColor: "#FFD700",
            imageRendering: "auto",
          }}
        >
          <div className="flex flex-col h-full p-7">
            {learning.category && (
              <span
                className="text-xs font-bold tracking-wider mb-4 uppercase"
                style={{ color: "#001f3f" }}
              >
                {learning.category}
              </span>
            )}

            <h2
              className="text-2xl font-bold mb-5 leading-snug flex-shrink-0"
              style={{ color: "#001f3f" }}
            >
              {learning.title}
            </h2>

            {learning.tabs && learning.tabs.length > 0 ? (
              <div
                className="flex-1 flex flex-col justify-center items-center mb-4 overflow-y-auto"
                style={{
                  backgroundColor: "#fafaf8",
                  border: "1px solid #d4c5a9",
                  borderRadius: "6px",
                  padding: "16px 8px",
                }}
              >
                <div style={{ width: "100%", textAlign: "center" }}>
                  {learning.tabs.map((line, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontFamily: '"Courier Prime", "Courier New", monospace',
                        fontSize: "12px",
                        lineHeight: "2",
                        color: "#0a0a0a",
                        margin: "2px 0",
                        fontWeight: "600",
                        letterSpacing: "0.3px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p
                className="text-sm leading-relaxed flex-1 overflow-hidden"
                style={{ color: "#0033cc" }}
              >
                {learning.content}
              </p>
            )}

            <div className="mt-auto pt-5 border-t" style={{ borderColor: "#FFD700" }}>
              <span className="text-xs font-mono" style={{ color: "#0033cc" }}>
                Tab #{learning.id}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
