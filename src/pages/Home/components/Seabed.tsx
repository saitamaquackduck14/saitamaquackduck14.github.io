export function Seabed() {
  return (
    <div
      className="absolute bottom-0 left-0 w-full"
      style={{
        height: "22vh",
        background: `
          linear-gradient(
            to top,
            #2a1a0f,
            #3b2a1a 40%,
            transparent
          )
        `,
      }}
    >
      {/* grain */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
          opacity: 0.4,
        }}
      />
    </div>
  )
}
