import { Header } from "@/components/navigation"

type Props = {
  children: React.ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main className="py-12">
        {children}
      </main>
    </div>
  )
}
