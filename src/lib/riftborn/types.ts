export const SAVE_VERSION = 1 as const;

export const POSITIONS = [
  "breaker",
  "lance",
  "lumen",
  "shade",
  "weaver",
  "aegis",
  "wraith",
] as const;
export type PositionId = (typeof POSITIONS)[number];

export const RANKS = [
  "ember",
  "iron",
  "bronze",
  "silver",
  "gold",
  "platinum",
  "void",
  "sovereign",
] as const;
export type RankId = (typeof RANKS)[number];

export const BANNERS = [
  "unbound",
  "ash-compact",
  "white-veil",
  "iron-choir",
  "night-ledger",
  "spire-court",
  "hollow-choir",
] as const;
export type BannerId = (typeof BANNERS)[number];

export const SLOTS = [
  "head",
  "face",
  "torso",
  "back",
  "arms",
  "legs",
  "waist",
  "mainHand",
  "offHand",
] as const;
export type SlotId = (typeof SLOTS)[number];

export const COSMETIC_SLOTS = ["aura", "markings", "trail"] as const;
export type CosmeticSlot = (typeof COSMETIC_SLOTS)[number];

export type Rarity = "common" | "uncommon" | "rare" | "epic" | "mythic";

export type GearDef = {
  id: string;
  name: string;
  slot: SlotId;
  mesh: string;
  rarity: Rarity;
  tags: string[];
  positions?: PositionId[];
  minRank?: RankId;
  blurb: string;
};

export type CosmeticDef = {
  id: string;
  name: string;
  slot: CosmeticSlot;
  mesh: string;
  rarity: Rarity;
  tags: string[];
  positions?: PositionId[];
  minRank?: RankId;
  blurb: string;
};

export type Palette = {
  joint: string;
  limb: string;
  accent: string;
  metal: string;
  cloth: string;
  aura: string;
  eye: string;
};

export type Build = {
  height: number;
  thickness: number;
  shoulder: number;
  stance: "closed" | "open" | "wide";
};

export type Loadout = Record<SlotId, string | null>;
export type Cosmetics = Record<CosmeticSlot, string | null>;

export type Stats = {
  str: number;
  agi: number;
  vit: number;
  intel: number;
  sense: number;
  luck: number;
};

export type Riftborn = {
  version: typeof SAVE_VERSION;
  id: string;
  seed: number;
  code: string;
  name: string;
  epithet: string;
  position: PositionId;
  rank: RankId;
  banner: BannerId;
  build: Build;
  palette: Palette;
  loadout: Loadout;
  cosmetics: Cosmetics;
  stats: Stats;
  origin: string;
  createdAt: number;
  canon?: boolean;
};

export type Locks = {
  position: boolean;
  rank: boolean;
  banner: boolean;
  colors: boolean;
  gear: boolean;
  cosmetics: boolean;
  build: boolean;
};

export const EMPTY_LOADOUT: Loadout = {
  head: null,
  face: null,
  torso: null,
  back: null,
  arms: null,
  legs: null,
  waist: null,
  mainHand: null,
  offHand: null,
};

export const EMPTY_COSMETICS: Cosmetics = {
  aura: null,
  markings: null,
  trail: null,
};

export const DEFAULT_LOCKS: Locks = {
  position: false,
  rank: false,
  banner: false,
  colors: false,
  gear: false,
  cosmetics: false,
  build: false,
};
