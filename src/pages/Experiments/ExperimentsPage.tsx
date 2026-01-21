import { motion } from "framer-motion"
import { experimentSections } from "./config"
import { ExperimentCard } from "./components/ExperimentCard"

// Organic positioning offsets for each card
const cardOffsets = [
  { rotate: -2, y: -10, scale: 1.02 },
  { rotate: 1.5, y: 15, scale: 0.98 },
  { rotate: -1, y: 5, scale: 1.0 },
  { rotate: 2, y: -5, scale: 1.01 },
  { rotate: -1.5, y: 20, scale: 0.99 },
  { rotate: 1, y: -15, scale: 1.02 },
]

export function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-16 text-zinc-100">
            Experiments
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pb-16">
          {experimentSections.map((section, index) => {
            const offset = cardOffsets[index % cardOffsets.length]
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: offset.rotate,
                  scale: offset.scale,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                style={{
                  marginTop: offset.y,
                }}
              >
                <ExperimentCard section={section} index={index} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}