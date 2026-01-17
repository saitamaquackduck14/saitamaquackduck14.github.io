import { Container } from "@/components/layout"
import { Card } from "@/components/ui"

export function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Container>
        <header className="py-24">
          <h1 className="text-4xl font-semibold mb-4">
            Systems Lab
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            A workspace for experiments in systems, abstractions, and tooling.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="Experiments"
            description="Small, focused explorations and simulations."
          />
          <Card
            title="Notes"
            description="Working thoughts, not polished essays."
          />
        </section>
      </Container>
    </div>
  )
}
