import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { bassLearnings } from "./data"
import { LearningCard } from "./components/LearningCard"
import { CiggNavBack } from "@/components/ui"

export function BassLearningsPage() {
  const [currentCards, setCurrentCards] = useState(() => {
    // Get initial 3 random cards
    const shuffled = [...bassLearnings].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3)
  })
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set())
  const [isShuffling, setIsShuffling] = useState(false)
  const [isReturningToDeck, setIsReturningToDeck] = useState(false)

  const handleShuffle = useCallback(() => {
    // First, return cards to deck if any are revealed
    if (revealedCards.size > 0) {
      setIsReturningToDeck(true)
      setTimeout(() => {
        setIsReturningToDeck(false)
        setIsShuffling(true)
        setRevealedCards(new Set())
      }, 800)
    } else {
      setIsShuffling(true)
    }

    // Then shuffle and deal new cards
    setTimeout(
      () => {
        const shuffled = [...bassLearnings].sort(() => Math.random() - 0.5)
        setCurrentCards(shuffled.slice(0, 3))
        setIsShuffling(false)
      },
      revealedCards.size > 0 ? 1300 : 500
    )
  }, [revealedCards.size])

  const handleRevealCard = useCallback((cardId: string) => {
    setRevealedCards((prev) => {
      const next = new Set(prev)
      next.add(cardId)
      return next
    })
  }, [])

  const allRevealed = currentCards.every((card) => revealedCards.has(card.id))

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #1a3a2e 0%, #2d5940 50%, #1a3a2e 100%)",
        imageRendering: "pixelated",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          style={{ imageRendering: "pixelated" }}
        >
          <h1 className="text-5xl font-bold text-amber-100 mb-3 drop-shadow-lg" style={{ textShadow: "3px 3px 0px #4a1e1e" }}>
            Bass Learnings
          </h1>
          <p className="text-amber-50/80 text-base">
            Click to reveal • Shuffle for new cards
          </p>
        </motion.div>

        {/* Snooker Table */}
        <div
          className="relative mb-8 shadow-2xl"
          style={{
            imageRendering: "pixelated",
          }}
        >
          {/* Quit Challenge Navigation */}
          <CiggNavBack position={{ top: "-18px", right: "18%" }} />
          {/* Wooden Frame/Rail - Enhanced Oak */}
          <div
            className="p-12"
            style={{
              background: `linear-gradient(135deg, #5c3d1f 0%, #4a2f16 25%, #7d4f2a 50%, #4a2f16 75%, #5c3d1f 100%),
                           repeating-linear-gradient(90deg, transparent 0px, rgba(139, 69, 19, 0.1) 2px, transparent 4px)`,
              borderRadius: "20px",
              boxShadow: "inset 0 8px 16px rgba(0,0,0,0.7), inset 0 -2px 4px rgba(255,255,255,0.1), 0 12px 24px rgba(0,0,0,0.8)",
              border: "2px solid #2a1a0a",
            }}
          >
            {/* Felt/Baize Surface */}
            <div
              className="relative p-12 rounded-lg"
              style={{
                backgroundColor: "#1a5632",
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    rgba(26, 86, 50, 0.8) 0px,
                    rgba(20, 70, 40, 0.8) 2px,
                    rgba(26, 86, 50, 0.8) 4px
                  )
                `,
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {/* Corner Pockets - Realistic depth */}
              {/* Top-Left */}
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "translate(-50%, -50%)",
                  background: `radial-gradient(circle at 30% 30%, #333333 0%, #0a0a0a 60%, #000000 100%)`,
                  boxShadow: "inset -2px -2px 8px rgba(0,0,0,0.9), inset 2px 2px 4px rgba(100,100,100,0.3), 0 4px 8px rgba(0,0,0,0.6)",
                }}
              />
              {/* Top-Right */}
              <div
                className="absolute top-0 right-0 rounded-full"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "translate(50%, -50%)",
                  background: `radial-gradient(circle at 30% 30%, #333333 0%, #0a0a0a 60%, #000000 100%)`,
                  boxShadow: "inset -2px -2px 8px rgba(0,0,0,0.9), inset 2px 2px 4px rgba(100,100,100,0.3), 0 4px 8px rgba(0,0,0,0.6)",
                }}
              />
              {/* Bottom-Left */}
              <div
                className="absolute bottom-0 left-0 rounded-full"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "translate(-50%, 50%)",
                  background: `radial-gradient(circle at 30% 30%, #333333 0%, #0a0a0a 60%, #000000 100%)`,
                  boxShadow: "inset -2px -2px 8px rgba(0,0,0,0.9), inset 2px 2px 4px rgba(100,100,100,0.3), 0 4px 8px rgba(0,0,0,0.6)",
                }}
              />
              {/* Bottom-Right */}
              <div
                className="absolute bottom-0 right-0 rounded-full"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "translate(50%, 50%)",
                  background: `radial-gradient(circle at 30% 30%, #333333 0%, #0a0a0a 60%, #000000 100%)`,
                  boxShadow: "inset -2px -2px 8px rgba(0,0,0,0.9), inset 2px 2px 4px rgba(100,100,100,0.3), 0 4px 8px rgba(0,0,0,0.6)",
                }}
              />

              {/* Middle Pockets - Realistic depth */}
              {/* Top-Middle */}
              <div
                className="absolute top-0 left-1/2"
                style={{
                  width: "28px",
                  height: "20px",
                  transform: "translate(-50%, -50%)",
                  background: `radial-gradient(ellipse 50% 50% at 50% 40%, #333333 0%, #0a0a0a 50%, #000000 100%)`,
                  borderRadius: "14px 14px 8px 8px",
                  boxShadow: "inset -1px -2px 6px rgba(0,0,0,0.9), inset 1px 1px 3px rgba(100,100,100,0.2), 0 3px 6px rgba(0,0,0,0.5)",
                }}
              />
              {/* Bottom-Middle */}
              <div
                className="absolute bottom-0 left-1/2"
                style={{
                  width: "28px",
                  height: "20px",
                  transform: "translate(-50%, 50%)",
                  background: `radial-gradient(ellipse 50% 50% at 50% 60%, #333333 0%, #0a0a0a 50%, #000000 100%)`,
                  borderRadius: "8px 8px 14px 14px",
                  boxShadow: "inset -1px -2px 6px rgba(0,0,0,0.9), inset 1px 1px 3px rgba(100,100,100,0.2), 0 3px 6px rgba(0,0,0,0.5)",
                }}
              />

              {/* Baulk Line (top line) */}
              <div
                className="absolute left-12 right-12"
                style={{
                  top: "25%",
                  height: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              />

              {/* D semicircle */}
              <div
                className="absolute border-2 rounded-full"
                style={{
                  top: "25%",
                  left: "50%",
                  width: "120px",
                  height: "60px",
                  transform: "translate(-50%, -50%)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  borderBottom: "none",
                  borderRadius: "120px 120px 0 0",
                }}
              />
              <AnimatePresence mode="wait">
                {!isShuffling && (
                  <motion.div
                    key="cards"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4"
                  >
                    {currentCards.map((learning, index) => (
                      <LearningCard
                        key={`${learning.id}-${index}`}
                        learning={learning}
                        index={index}
                        isRevealed={revealedCards.has(learning.id)}
                        onReveal={() => handleRevealCard(learning.id)}
                        isReturningToDeck={isReturningToDeck}
                      />
                    ))}
                  </motion.div>
                )}

                {isShuffling && (
                  <motion.div
                    key="shuffling"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-[420px]"
                  >
                    {/* Classic cascading cards animation with dealing angle */}
                    <div className="relative w-32 h-48">
                      {[0, 1, 2, 3, 4].map((i) => {
                        // Create a fan-deal pattern
                        const dealAngle = (i - 2) * 6 // -12, -6, 0, 6, 12 degrees
                        const yShift = Math.abs(i - 2) * 12 // Center card highest
                        const xShift = (i - 2) * 8

                        return (
                          <motion.div
                            key={i}
                            className="absolute inset-0 border-4 rounded-xl shadow-2xl"
                            style={{
                              backgroundColor: "#001f3f",
                              borderColor: "#FFD700",
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
                            animate={{
                              x: [0, 200 + xShift * 2, xShift],
                              y: [0, -80 + yShift, yShift],
                              rotate: [0, 25 + dealAngle, dealAngle],
                            }}
                            transition={{
                              duration: 0.9,
                              repeat: Infinity,
                              delay: i * 0.12,
                              ease: "easeInOut",
                            }}
                          />
                        )
                      })}
                    </div>
                    <p className="text-amber-100/70 text-sm mt-8 font-medium" style={{ imageRendering: "pixelated" }}>
                      Dealing...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.button
            onClick={handleShuffle}
            disabled={isShuffling || isReturningToDeck}
            className="px-10 py-3 text-lg font-bold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed border-2"
            style={{
              backgroundColor: "#7a2e2e",
              color: "#f5deb3",
              borderColor: "#4a1e1e",
              imageRendering: "pixelated",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isShuffling || isReturningToDeck ? "Shuffling..." : "Shuffle Deck"}
          </motion.button>

          {allRevealed && !isShuffling && !isReturningToDeck && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium px-4 py-2 rounded-lg"
              style={{
                color: "#f5deb3",
                backgroundColor: "rgba(42, 59, 48, 0.7)",
                imageRendering: "pixelated",
              }}
            >
              All cards revealed!
            </motion.p>
          )}

          <p className="text-sm" style={{ color: "#a0886f", imageRendering: "pixelated" }}>
            {bassLearnings.length} cards in deck
          </p>
        </motion.div>
      </div>
    </div>
  )
}
