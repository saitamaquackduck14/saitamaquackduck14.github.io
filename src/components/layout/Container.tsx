type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-32">
      {children}
    </div>
  )
}
