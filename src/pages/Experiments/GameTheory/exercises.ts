export interface Exercise {
  id: string
  title: string
  concept: string
  prompt: string
  setup: string
  options: { id: string; label: string }[]
  correctId: string
  explanation: string
  matrix?: {
    caption: string
    columns: string[]
    rows: { label: string; values: string[] }[]
  }
}

export const exercises: Exercise[] = [
  {
    id: "prisoners-dilemma",
    title: "The tempting betrayal",
    concept: "Dominant strategies",
    setup: "You and another player choose simultaneously. Each cell shows (your points, their points). Both players prefer more points.",
    prompt: "Which action gives you more points regardless of the other player's choice?",
    matrix: {
      caption: "Prisoner's dilemma: your points first, their points second",
      columns: ["They cooperate", "They defect"],
      rows: [{ label: "You cooperate", values: ["3, 3", "0, 5"] }, { label: "You defect", values: ["5, 0", "1, 1"] }],
    },
    options: [{ id: "cooperate", label: "Cooperate" }, { id: "defect", label: "Defect" }, { id: "depends", label: "It depends on what they do" }],
    correctId: "defect",
    explanation: "If they cooperate, defecting gives you 5 instead of 3. If they defect, defecting gives you 1 instead of 0. Defection strictly dominates cooperation in this one-shot game. Both defecting is the Nash equilibrium, even though both cooperating would give each player more points. Repeated games can have different incentives.",
  },
  {
    id: "coordination",
    title: "Meet at the same place",
    concept: "Nash equilibrium",
    setup: "Two players independently choose a meeting place. Each cell shows (your points, their points). A pure-strategy Nash equilibrium is a pair of choices where neither player benefits by changing their choice alone.",
    prompt: "Which pairs are pure-strategy Nash equilibria?",
    matrix: {
      caption: "Meeting game: your points first, their points second",
      columns: ["They choose the library", "They choose the café"],
      rows: [{ label: "You choose the library", values: ["4, 4", "0, 0"] }, { label: "You choose the café", values: ["0, 0", "2, 2"] }],
    },
    options: [{ id: "library", label: "Only both choosing the library" }, { id: "both", label: "Both at the library and both at the café" }, { id: "neither", label: "Neither pair" }],
    correctId: "both",
    explanation: "At either meeting place, changing your choice alone means missing the other player and receiving 0. Both matching pairs are therefore equilibria. The library gives a higher payoff, but a Nash equilibrium does not have to be the best outcome available. The question asks about pure strategies; mixed strategies are outside this exercise.",
  },
  {
    id: "entry",
    title: "An empty threat?",
    concept: "Backward induction",
    setup: "An entrant first chooses Stay out or Enter. Staying out gives (entrant: 2, incumbent: 4). After entry, the incumbent chooses Accommodate for (3, 3), or Fight for (0, 1). Both players know these payoffs and maximize their own points.",
    prompt: "What does backward induction predict?",
    options: [{ id: "out", label: "Stay out because the incumbent can fight" }, { id: "fight", label: "Enter, then the incumbent fights" }, { id: "enter", label: "Enter, then the incumbent accommodates" }],
    correctId: "enter",
    explanation: "Start at the final decision. After entry, the incumbent prefers accommodating (3) to fighting (1). Anticipating that response, the entrant compares entering (3) with staying out (2), and enters. Under these stated assumptions, a threat to fight is not credible once entry occurs.",
  },
  {
    id: "maximin",
    title: "Protect the downside",
    concept: "Maximin reasoning",
    setup: "You choose one plan before learning which condition occurs. Only your points are shown. You are specifically trying to maximize your worst possible payoff; no probabilities are available.",
    prompt: "Which plan has the highest guaranteed payoff?",
    matrix: {
      caption: "Your payoff under each condition",
      columns: ["Condition A", "Condition B"],
      rows: [{ label: "Steady plan", values: ["4", "4"] }, { label: "Risky plan", values: ["9", "1"] }, { label: "Middle plan", values: ["6", "3"] }],
    },
    options: [{ id: "steady", label: "Steady plan" }, { id: "risky", label: "Risky plan" }, { id: "middle", label: "Middle plan" }],
    correctId: "steady",
    explanation: "Take the minimum payoff in each row: Steady = 4, Risky = 1, Middle = 3. Then choose the largest minimum: 4. This is the maximin criterion. It does not mean Steady would maximize expected points if probabilities were known.",
  },
]
