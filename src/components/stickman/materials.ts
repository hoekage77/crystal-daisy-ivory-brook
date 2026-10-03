import type { Riftborn } from "@/lib/riftborn/types";
import { RANK_META } from "@/lib/riftborn/catalog";

export function figureStyle(c: Riftborn) {
  const glow = RANK_META[c.rank].glow;
  return {
    glow,
    joint: {
      color: c.palette.joint,
      metalness: 0.62,
      roughness: 0.28,
      emissive: c.palette.eye,
      emissiveIntensity: glow,
    },
    limb: {
      color: c.palette.limb,
      metalness: 0.45,
      roughness: 0.42,
      emissive: c.palette.accent,
      emissiveIntensity: glow * 0.35,
    },
    metal: {
      color: c.palette.metal,
      metalness: 0.82,
      roughness: 0.28,
      emissive: c.palette.metal,
      emissiveIntensity: glow * 0.2,
    },
    cloth: {
      color: c.palette.cloth,
      metalness: 0.08,
      roughness: 0.78,
      emissive: c.palette.accent,
      emissiveIntensity: glow * 0.12,
    },
    accent: {
      color: c.palette.accent,
      metalness: 0.4,
      roughness: 0.35,
      emissive: c.palette.accent,
      emissiveIntensity: 0.25 + glow,
    },
    aura: {
      color: c.palette.aura,
      metalness: 0,
      roughness: 1,
      emissive: c.palette.aura,
      emissiveIntensity: 0.8 + glow,
    },
    eye: {
      color: c.palette.eye,
      metalness: 0,
      roughness: 0.2,
      emissive: c.palette.eye,
      emissiveIntensity: 0.9 + glow * 2,
    },
  };
}

export type FigureStyle = ReturnType<typeof figureStyle>;
