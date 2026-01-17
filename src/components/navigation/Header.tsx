import { NavLink } from "react-router-dom"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Experiments", to: "/experiments" },
  { label: "Notes", to: "/notes" },
]

export function Header() {
  return (
    <header className="border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
