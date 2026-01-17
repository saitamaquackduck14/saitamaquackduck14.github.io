type Props = {
  children: React.ReactNode
  x?: number
  y?: number
  style?: React.CSSProperties
}

export function Creature({ children, x = 0, y = 0, style }: Props) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
