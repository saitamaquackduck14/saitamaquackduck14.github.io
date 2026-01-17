import type { FishStyle } from "./types"

export const FISH_STYLES: FishStyle[] = [
  // ─────────────────────────────
  // Lanternfish (mesopelagic)
  // ─────────────────────────────
  {
    bodyColor: "#1e3a5f",
    accentColor: "#38bdf8",
    hueShift: 0,
    luminescence: 0.4,
    opacity: 0.85,

    bodyShape: "slender",
    bodyRatio: 2.4,
    bodyThickness: 0.8,

    scalePattern: "lines",
    scaleDensity: 0.35,
    scaleContrast: 0.4,

    eyeSize: 5,
    eyePosition: 0.22,
    pupilSize: 0.6,
    eyeGlow: 0.3,

    tailType: "fork",
    tailSize: 0.35,
    tailFrequency: 1.1,
    tailStiffness: 0.8,

    swimStyle: "steady",
    waveAmplitude: 1,
    waveLength: 1.6,

    depthBias: -0.4,
    schoolingTendency: 0.9,
  },

  // ─────────────────────────────
  // Angler-like drifter
  // ─────────────────────────────
  {
    bodyColor: "#0f172a",
    accentColor: "#22c55e",
    hueShift: 0,
    luminescence: 0.8,
    opacity: 0.9,

    bodyShape: "round",
    bodyRatio: 1.4,
    bodyThickness: 1.1,

    scalePattern: "dots",
    scaleDensity: 0.6,
    scaleContrast: 0.6,

    eyeSize: 7,
    eyePosition: 0.16,
    pupilSize: 0.7,
    eyeGlow: 0.5,

    tailType: "fan",
    tailSize: 0.45,
    tailFrequency: 0.6,
    tailStiffness: 0.4,

    swimStyle: "lazy",
    waveAmplitude: 0.6,
    waveLength: 2.4,

    depthBias: -0.7,
    schoolingTendency: 0.2,
  },

  // ─────────────────────────────
  // Fast predator
  // ─────────────────────────────
  {
    bodyColor: "#020617",
    accentColor: "#0ea5e9",
    hueShift: 0,
    luminescence: 0.2,
    opacity: 0.8,

    bodyShape: "slender",
    bodyRatio: 2.8,
    bodyThickness: 0.7,

    scalePattern: "chevron",
    scaleDensity: 0.4,
    scaleContrast: 0.5,

    eyeSize: 4,
    eyePosition: 0.3,
    pupilSize: 0.4,
    eyeGlow: 0.2,

    tailType: "triangle",
    tailSize: 0.3,
    tailFrequency: 1.6,
    tailStiffness: 1.2,

    swimStyle: "darting",
    waveAmplitude: 1.4,
    waveLength: 1.2,

    depthBias: -0.2,
    schoolingTendency: 0.4,
  },
]
