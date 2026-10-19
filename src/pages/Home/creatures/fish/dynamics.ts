import { createNoise2D } from "simplex-noise"
import type { FishStyle } from "./types"

// A fixed seed keeps motion stable across renders and page reloads.
let seed = 14
const noise = createNoise2D(() => {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
  return seed / 4294967296
})

export function swimFrames(style: FishStyle, phase: number) {
  const amplitude = style.waveAmplitude * (1 - style.schoolingTendency * 0.5)
  const samples = Array.from({ length: 9 }, (_, i) => {
    // Sampling a circle makes the last frame meet the first without a jump.
    const angle = (i % 8) * Math.PI / 4
    return noise(phase + Math.cos(angle), Math.sin(angle))
  })

  return {
    y: samples.map(value => value * amplitude * 8),
    rotate: samples.map(value => value * amplitude * 3),
  }
}

export function bodyPath(style: FishStyle, bend = 0) {
  const shapeHeight = { slender: 0.85, round: 1.1, flat: 0.65 }[style.bodyShape]
  const height = Math.min(48, 70 / style.bodyRatio * style.bodyThickness * shapeHeight)
  return `M20,50 C50,${50 - height + bend} 120,${50 - height - bend} 160,50 C120,${50 + height - bend} 50,${50 + height + bend} 20,50 Z`
}

export function tailPath(style: FishStyle) {
  const height = style.tailSize * 60
  switch (style.tailType) {
    case "fork":
      return `M160,50 L195,${50 - height} L184,50 L195,${50 + height} Z`
    case "fan":
      return `M160,50 Q178,${50 - height} 195,${50 - height} Q203,50 195,${50 + height} Q178,${50 + height} 160,50 Z`
    case "triangle":
      return `M160,50 L195,${50 - height} L195,${50 + height} Z`
  }
}
