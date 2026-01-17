export type FishStyle = {
  /* Color + light */
  bodyColor: string
  accentColor: string
  hueShift: number
  luminescence: number
  opacity: number

  /* Body anatomy */
  bodyShape: "slender" | "round" | "flat"
  bodyRatio: number          // length / height
  bodyThickness: number      // perceived mass (0.6–1.2)

  /* Surface */
  scalePattern: "none" | "dots" | "lines" | "chevron"
  scaleDensity: number
  scaleContrast: number      // NEW: how visible scales are

  /* Head / eyes */
  eyeSize: number
  eyePosition: number
  pupilSize: number
  eyeGlow: number            // deep-sea glow (0–1)

  /* Tail & fins */
  tailType: "triangle" | "fork" | "fan"
  tailSize: number
  tailFrequency: number
  tailStiffness: number      // NEW: affects wave propagation

  /* Motion personality */
  swimStyle: "lazy" | "steady" | "darting"
  waveAmplitude: number      // NEW: body wave strength
  waveLength: number         // NEW: how long the wave is

  /* Ecology */
  depthBias: number          // -1 deep, +1 shallow
  schoolingTendency: number // 0 loner → 1 tight school
}
