import { Header } from "@/components/navigation"
import { Footer } from "./Footer"
import { BandcampPlayer } from "@/components/music/BandcampPlayer"

type Props = {
  children: React.ReactNode
}

export function AppLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Header />
      <div className="relative min-h-0 flex-1">
        <main className="h-full overflow-y-auto scroll-pb-64">
          {children}
        </main>
        <BandcampPlayer />
      </div>
      <Footer />
    </div>
  )
}
