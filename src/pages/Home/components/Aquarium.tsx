type Props = {
  children: React.ReactNode
}

export function Aquarium({ children }: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {children}
      {/* Seabed */}
      <div
        className="pointer-events-none absolute left-0 w-full"
        style={{
          bottom: 0,
          height: "22%",
          background:
            "linear-gradient(to top, #2a1a0f, #3b2a1a 40%, transparent)",
        }}
      />

      {/* Horizon line */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" /> */}

    </div>
  )
}
