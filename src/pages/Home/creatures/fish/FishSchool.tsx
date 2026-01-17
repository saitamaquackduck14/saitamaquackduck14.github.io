import { useMemo } from "react"
import { Fish } from "@/pages/Home/creatures/fish/Fish"
import { FISH_STYLES } from "@/pages/Home/creatures/fish/palette"

type FishConfig = {
  id: string
  y: number
  size: number
  speed: number
  delay: number
  style: typeof FISH_STYLES[number]
}

const SCHOOL_SIZE = 9
const BASE_Y = 30
const LANE_GAP = 6

function hexToHSL(hex: string) {
  let r = 0, g = 0, b = 0

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else {
    r = parseInt(hex.slice(1, 3), 16)
    g = parseInt(hex.slice(3, 5), 16)
    b = parseInt(hex.slice(5, 7), 16)
  }

  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h *= 60
  }

  return { h, s: s * 100, l: l * 100 }
}

function varyColor(hex: string, hueShift: number, lightnessShift: number) {
  const { h, s, l } = hexToHSL(hex)

  const newH = (h + hueShift + 360) % 360
  const newL = Math.min(90, Math.max(5, l + lightnessShift))

  return `hsl(${newH}, ${s}%, ${newL}%)`
}


function randomDeepHue() {
  return Math.random() * 16 - 8 // ±8° (deep water safe)
}

function randomLightness() {
  return Math.random() * 6 - 3.2 // ±3%
}

export function FishSchool() {
  const fish = useMemo<FishConfig[]>(() => {
    // choose 2–3 related species per school
    const speciesPool = [...FISH_STYLES]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    return Array.from({ length: SCHOOL_SIZE }).map((_, i) => {
      const baseStyle = speciesPool[i % speciesPool.length]

      const lane = i - SCHOOL_SIZE / 2

      // center fish slightly larger
      const size = 55 + Math.cos((i / SCHOOL_SIZE) * Math.PI) * 12

      // larger fish move slower
      const speed = 45 - (size - 55) * 0.4

      // per-fish deep-water variation
      const hue = randomDeepHue()
      const lightness = randomLightness()

      const bodyColor = varyColor(
        baseStyle.bodyColor,
        hue,
        lightness
      )

      const accentColor = varyColor(
        baseStyle.accentColor,
        hue,
        lightness + 4 // accents slightly brighter
      )

      return {
        id: `fish-${i}`,
        y: BASE_Y + lane * LANE_GAP + (Math.random() * 2 - 1),
        size,
        speed,
        delay: i * 0.6,

        style: {
          ...baseStyle,
          bodyColor,
          accentColor,

          opacity: Math.min(
            1,
            Math.max(0.75, baseStyle.opacity + Math.random() * 0.1 - 0.05)
          ),

          tailFrequency:
            baseStyle.tailFrequency * (0.85 + Math.random() * 0.3),
        },
      }

    })
  }, [])

  return (
    <>
      {fish.map((f) => (
        <Fish key={f.id} {...f} />
      ))}
    </>
  )
}
