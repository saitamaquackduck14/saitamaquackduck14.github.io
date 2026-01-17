type Props = {
  depth: number
  children: React.ReactNode
}

export function CreatureLayer({ depth, children }: Props) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: depth,
      }}
    >
      {children}
    </div>
  )
}
