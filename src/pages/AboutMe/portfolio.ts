export interface PortfolioQuestion {
  id: string
  question: string
  guidance: string
  maxWords: number
  answer: string
  sources: { label: string; href: string }[]
}

// Personal answers and reading references belong here, separately from the resume.
export const portfolioQuestions: PortfolioQuestion[] = [
  {
    id: "unconventional-belief",
    question: "What’s one thing you believe that most smart people think is wrong, and why?",
    guidance: "Explain your reasoning and what evidence would change your mind. The belief can be in any domain.",
    maxWords: 300,
    answer: "",
    sources: [],
  },
  {
    id: "difficult-work",
    question: "Tell us about something difficult you built, solved, or made happen.",
    guidance: "What did you personally own? What was the hardest judgment call, and what happened?",
    maxWords: 200,
    answer: "",
    sources: [],
  },
  {
    id: "recent-reading",
    question: "What have you read recently that changed your thinking?",
    guidance: "Choose up to two nonfiction books, papers, or essays. Tell us what you took from them.",
    maxWords: 150,
    answer: "",
    sources: [],
  },
]
