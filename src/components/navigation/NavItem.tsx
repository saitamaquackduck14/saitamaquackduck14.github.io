import { NavLink } from "react-router-dom"

type Props = {
  to: string
  label: string
}

export function NavItem({ to, label }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-3xl transition-colors",
          isActive
            ? "text-zinc-100"
            : "text-zinc-400 hover:text-zinc-200 lg:hover:text-zinc-100",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  )
}
