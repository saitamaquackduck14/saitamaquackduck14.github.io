import { NavItem } from "./NavItem"

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Experiments", to: "/experiments" },
  { label: "Notes", to: "/notes" },
]

export function Header() {
  return (
    <header className="shrink-0 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 min-h-14 py-3 sm:py-0 flex flex-wrap gap-x-6 gap-y-3 items-center justify-between">
        <div className="text-2xl sm:text-4xl font-extrabold text-white-200">
          Systems Lab
        </div>

        <nav className="flex gap-4 sm:gap-6">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}
