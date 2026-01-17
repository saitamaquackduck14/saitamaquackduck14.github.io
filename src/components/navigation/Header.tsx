import { NavItem } from "./NavItem"

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Experiments", to: "/experiments" },
  { label: "Notes", to: "/notes" },
]

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="text-4xl font-extrabold text-white-200">
          Systems Lab
        </div>

        <nav className="flex gap-6">
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
