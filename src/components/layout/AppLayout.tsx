import { Header } from "@/components/navigation"
import { Footer } from "./Footer"

type Props = {
  children: React.ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Header />
      <main className="min-h-0 flex-1 overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
