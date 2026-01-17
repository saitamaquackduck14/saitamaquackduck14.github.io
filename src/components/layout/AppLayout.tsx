import { Header } from "@/components/navigation"

type Props = {
  children: React.ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Header />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
