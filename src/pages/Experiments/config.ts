export interface ExperimentSection {
  key: string
  title: string
  description: string
  path: string
  image?: string
}

export const experimentSections: ExperimentSection[] = [
  {
    key: "bass",
    title: "Bass Learnings",
    description:
      "Foundational concepts, mental models, and notes I want to revisit often.",
    path: "/experiments/bass",
    image: "/src/assets/bass.webp",
  },
  {
    key: "ancient-history",
    title: "Ancient History",
    description: "Explorations into",
    path: "/experiments/ancient-history",
    image: "/src/assets/ancient-history.JPG",
  },
  {
    key: "game-theory",
    title: "Game Theory",
    description:
      "Strategic thinking, equilibria, minimax ideas, and decision frameworks.",
    path: "/experiments/game-theory",
    image: "/src/assets/game-theory.png",
  },
  {
    key: "system-dynamics",
    title: "System Dynamics",
    description:
      "Probabilities & Statistics — intuition, proofs, paradoxes, and examples.",
    path: "/experiments/system-dynamics",
    image: "/src/assets/system-dynamics.webp",
  },
  {
    key: "tibet",
    title: "Tibet",
    description:
      "Probabilities & Statistics — intuition, proofs, paradoxes, and examples.",
    path: "/experiments/tibet",
    image: "/src/assets/tibet.jpg",
  },
  {
    key: "pns",
    title: "PnS",
    description:
      "Probabilities & Statistics — intuition, proofs, paradoxes, and examples.",
    path: "/experiments/pns",
    image: "/src/assets/pns.jpg",
  },
  {
    key: "random",
    title: "Random",
    description:
      "Loose thoughts, experiments, half-baked ideas, and curiosities.",
    path: "/experiments/random",
    image: "/src/assets/random.png",
  },
]
