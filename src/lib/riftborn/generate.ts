import {
  allowedCosmetic,
  allowedGear,
  COSMETICS,
  GEAR,
  POSITION_PALETTES,
  RANK_META,
  rankIndex,
} from "./catalog";
import { rollName, rollOrigin } from "./names";
import {
  chance,
  mulberry32,
  pick,
  range,
  seedFromBytes,
  toCode,
  weighted,
} from "./rng";
import {
  BANNERS,
  EMPTY_COSMETICS,
  EMPTY_LOADOUT,
  SAVE_VERSION,
  SLOTS,
  type BannerId,
  type Cosmetics,
  type Locks,
  type Loadout,
  type Palette,
  type PositionId,
  type RankId,
  type Riftborn,
  type SlotId,
  type Stats,
} from "./types";

const RANK_WEIGHTS: { id: RankId; w: number }[] = [
  { id: "ember", w: 22 },
  { id: "iron", w: 20 },
  { id: "bronze", w: 16 },
  { id: "silver", w: 14 },
  { id: "gold", w: 12 },
  { id: "platinum", w: 8 },
  { id: "void", w: 6 },
  { id: "sovereign", w: 2 },
];

const POSITION_WEIGHTS: { id: PositionId; w: number }[] = [
  { id: "breaker", w: 16 },
  { id: "lance", w: 14 },
  { id: "lumen", w: 14 },
  { id: "shade", w: 16 },
  { id: "weaver", w: 14 },
  { id: "aegis", w: 14 },
  { id: "wraith", w: 8 },
];

const DEFAULT_WEAPON: Record<PositionId, string> = {
  breaker: "wpn-dual",
  lance: "wpn-spear",
  lumen: "wpn-staff",
  shade: "wpn-daggers",
  weaver: "wpn-staff",
  aegis: "wpn-sword",
  wraith: "wpn-daggers",
};

const DEFAULT_OFF: Partial<Record<PositionId, string>> = {
  aegis: "off-shield",
  lumen: "off-lantern",
  weaver: "off-focus",
  wraith: "off-focus",
};

export type ForgeInput = {
  seed?: number;
  locks?: Partial<Locks>;
  base?: Riftborn | null;
  force?: Partial<{
    position: PositionId;
    rank: RankId;
    banner: BannerId;
  }>;
};

function jitterHex(rand: () => number, hex: string, amount: number) {
  const n = hex.replace("#", "");
  if (n.length !== 6) return hex;
  const ch = (i: number) => {
    const v = parseInt(n.slice(i, i + 2), 16);
    const j = Math.round((rand() - 0.5) * 2 * amount * 255);
    return Math.max(0, Math.min(255, v + j))
      .toString(16)
      .padStart(2, "0");
  };
  return `#${ch(0)}${ch(2)}${ch(4)}`;
}

function mixPalette(rand: () => number, position: PositionId, rank: RankId): Palette {
  const base = POSITION_PALETTES[position];
  return {
    joint: jitterHex(rand, base.joint, 0.04),
    limb: jitterHex(rand, base.limb, 0.05),
    accent: jitterHex(rand, base.accent, 0.08),
    metal: jitterHex(rand, RANK_META[rank].metal, 0.06),
    cloth: jitterHex(rand, base.cloth, 0.07),
    aura: jitterHex(rand, base.aura, 0.08),
    eye: jitterHex(rand, base.eye, 0.05),
  };
}

function pickForSlot(
  rand: () => number,
  slot: SlotId,
  position: PositionId,
  rank: RankId,
  accessoryBias: number,
): string | null {
  const pool = GEAR.filter(
    (g) => g.slot === slot && g.mesh !== "none" && allowedGear(g, position, rank),
  );
  if (pool.length === 0) return null;
  if (slot === "mainHand") {
    if (chance(rand, 0.72)) {
      const preferred = pool.find((g) => g.id === DEFAULT_WEAPON[position]);
      if (preferred && chance(rand, 0.55)) return preferred.id;
    }
    return pick(rand, pool).id;
  }
  if (slot === "offHand") {
    const fallback = DEFAULT_OFF[position];
    if (fallback && pool.some((g) => g.id === fallback) && chance(rand, 0.7)) {
      return fallback;
    }
    if (!chance(rand, accessoryBias * 0.85)) return null;
    return pick(rand, pool).id;
  }
  const emptyChance = slot === "face" ? 0.55 : 0.22;
  if (!chance(rand, accessoryBias) && chance(rand, emptyChance)) return null;
  return pick(rand, pool).id;
}

function rollLoadout(
  rand: () => number,
  position: PositionId,
  rank: RankId,
): Loadout {
  const bias = RANK_META[rank].accessoryBias;
  const loadout: Loadout = { ...EMPTY_LOADOUT };
  for (const slot of SLOTS) {
    loadout[slot] = pickForSlot(rand, slot, position, rank, bias);
  }
  if (!loadout.mainHand) loadout.mainHand = DEFAULT_WEAPON[position];
  if (position === "aegis" && !loadout.offHand) loadout.offHand = "off-shield";
  if (position === "lumen" && !loadout.back && chance(rand, 0.65)) {
    loadout.back = "back-lantern";
  }
  if (position === "wraith" && rankIndex(rank) >= rankIndex("void") && chance(rand, 0.55)) {
    loadout.back = "back-wings";
  }
  if (
    (rank === "void" || rank === "sovereign") &&
    (position === "wraith" || position === "shade") &&
    chance(rand, 0.5)
  ) {
    loadout.head = "crown-sovereign";
  }
  return loadout;
}

function rollCosmetics(
  rand: () => number,
  position: PositionId,
  rank: RankId,
): Cosmetics {
  const out: Cosmetics = { ...EMPTY_COSMETICS };
  const bias = RANK_META[rank].accessoryBias;
  for (const slot of ["aura", "markings", "trail"] as const) {
    const pool = COSMETICS.filter(
      (c) => c.slot === slot && c.mesh !== "none" && allowedCosmetic(c, position, rank),
    );
    if (pool.length === 0) continue;
    const p = slot === "aura" ? bias : slot === "markings" ? 0.55 : bias * 0.6;
    if (chance(rand, p)) out[slot] = pick(rand, pool).id;
  }
  if (rank === "sovereign" && (position === "wraith" || position === "shade")) {
    out.aura = "aura-sovereign";
  }
  return out;
}

function rollStats(
  rand: () => number,
  position: PositionId,
  rank: RankId,
): Stats {
  const floor = 8 + rankIndex(rank) * 6;
  const spread = 10 + rankIndex(rank) * 2;
  const stats: Stats = {
    str: Math.round(floor + range(rand, 0, spread)),
    agi: Math.round(floor + range(rand, 0, spread)),
    vit: Math.round(floor + range(rand, 0, spread)),
    intel: Math.round(floor + range(rand, 0, spread)),
    sense: Math.round(floor + range(rand, 0, spread)),
    luck: Math.round(floor + range(rand, 0, spread)),
  };
  const primary: Record<PositionId, Array<keyof Stats>> = {
    breaker: ["str", "agi"],
    lance: ["str", "sense"],
    lumen: ["intel", "sense"],
    shade: ["agi", "sense"],
    weaver: ["intel", "sense"],
    aegis: ["vit", "str"],
    wraith: ["intel", "agi"],
  };
  for (const k of primary[position]) stats[k] += 8 + rankIndex(rank);
  return stats;
}

function rollBuild(rand: () => number, position: PositionId) {
  const stance =
    position === "aegis"
      ? "wide"
      : position === "shade" || position === "wraith"
        ? "closed"
        : pick(rand, ["closed", "open", "wide"] as const);
  return {
    height: range(rand, 0.9, 1.12),
    thickness: range(rand, 0.88, 1.18),
    shoulder: range(rand, 0.92, 1.16),
    stance,
  };
}

function bannerFor(rand: () => number, position: PositionId, rank: RankId): BannerId {
  if (position === "lumen" && chance(rand, 0.45)) return "white-veil";
  if (position === "aegis" && chance(rand, 0.45)) return "iron-choir";
  if (position === "shade" && chance(rand, 0.4)) return "night-ledger";
  if (position === "wraith" && chance(rand, 0.5)) return "hollow-choir";
  if (rankIndex(rank) >= rankIndex("platinum") && chance(rand, 0.35)) return "spire-court";
  if (chance(rand, 0.28)) return "unbound";
  return pick(rand, BANNERS);
}

export function generateRiftborn(input: ForgeInput = {}): Riftborn {
  const seed = input.seed ?? seedFromBytes();
  const rand = mulberry32(seed);
  const locks = input.locks ?? {};
  const base = input.base ?? null;

  const position: PositionId =
    input.force?.position ??
    (locks.position && base ? base.position : weighted(rand, POSITION_WEIGHTS).id);
  const rank: RankId =
    input.force?.rank ??
    (locks.rank && base ? base.rank : weighted(rand, RANK_WEIGHTS).id);
  const banner: BannerId =
    input.force?.banner ??
    (locks.banner && base ? base.banner : bannerFor(rand, position, rank));

  const build = locks.build && base ? base.build : rollBuild(rand, position);
  const palette = locks.colors && base ? base.palette : mixPalette(rand, position, rank);
  const loadout = locks.gear && base ? base.loadout : rollLoadout(rand, position, rank);
  const cosmetics =
    locks.cosmetics && base ? base.cosmetics : rollCosmetics(rand, position, rank);
  const { name, epithet } = rollName(rand, position, rank);
  const origin = rollOrigin(rand, banner);
  const stats = rollStats(rand, position, rank);
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `rb-${toCode(seed)}-${Date.now().toString(36)}`;

  return {
    version: SAVE_VERSION,
    id,
    seed,
    code: `RB-${toCode(seed)}`,
    name,
    epithet,
    position,
    rank,
    banner,
    build,
    palette,
    loadout,
    cosmetics,
    stats,
    origin,
    createdAt: Date.now(),
  };
}

export function generateSquad(count = 6, input: ForgeInput = {}): Riftborn[] {
  return Array.from({ length: count }, () => generateRiftborn(input));
}

export type CanonSpec = {
  seed: number;
  name: string;
  epithet: string;
  position: PositionId;
  rank: RankId;
  banner: BannerId;
  origin: string;
  loadout?: Partial<Loadout>;
  cosmetics?: Partial<Cosmetics>;
};

export const CANON: CanonSpec[] = [
  {
    seed: 0x0a11e55,
    name: "Ashen Vale",
    epithet: "of the Black Floor",
    position: "wraith",
    rank: "sovereign",
    banner: "unbound",
    origin: "Walked into a Gate alone. Came out with an army that does not blink.",
    loadout: {
      head: "crown-sovereign",
      face: "mask-blank",
      torso: "harness",
      back: "back-wings",
      arms: "arms-wraps",
      legs: "legs-boots",
      waist: "waist-sash",
      mainHand: "wpn-scythe",
      offHand: null,
    },
    cosmetics: { aura: "aura-sovereign", markings: "mark-seams", trail: "trail-echo" },
  },
  {
    seed: 0x1c0a11,
    name: "Kael Ironhowl",
    epithet: "the Door",
    position: "aegis",
    rank: "gold",
    banner: "iron-choir",
    origin: "Held Floor 14 for nine minutes after the rest of the party wiped.",
    loadout: {
      head: "helm-iron",
      torso: "torso-plate",
      back: "back-cape",
      arms: "arms-pauldrons",
      legs: "legs-greaves",
      waist: "waist-belt",
      mainHand: "wpn-sword",
      offHand: "off-shield",
    },
  },
  {
    seed: 0x50f11a,
    name: "Mira Sol",
    epithet: "White Veil",
    position: "lumen",
    rank: "platinum",
    banner: "white-veil",
    origin: "Her lighthouse orb found the true exit of a lying Trial.",
    loadout: {
      head: "circlet-drift",
      torso: "torso-robe",
      back: "back-lantern",
      waist: "waist-sash",
      mainHand: "wpn-staff",
      offHand: "off-lantern",
    },
    cosmetics: { aura: "aura-ice", markings: "mark-seams", trail: null },
  },
  {
    seed: 0x1a4ce1,
    name: "Rin Quill",
    epithet: "the Lane",
    position: "lance",
    rank: "silver",
    banner: "ash-compact",
    origin: "Pinned a floor boss through three rooms without moving her feet.",
    loadout: {
      head: "helm-visor",
      torso: "torso-vest",
      back: "back-quiver",
      arms: "arms-bracers",
      legs: "legs-boots",
      mainHand: "wpn-spear",
      offHand: null,
    },
  },
  {
    seed: 0x5ade01,
    name: "Nyx Hollow",
    epithet: "Echo-keeper",
    position: "wraith",
    rank: "void",
    banner: "hollow-choir",
    origin: "Collects Afterimages in glass. One of them still argues.",
    loadout: {
      head: "horns-void",
      torso: "torso-robe",
      back: "back-tattered",
      mainHand: "wpn-daggers",
      offHand: "off-focus",
    },
    cosmetics: { aura: "aura-shadow", markings: "mark-seams", trail: "trail-echo" },
  },
  {
    seed: 0xb1ade5,
    name: "Jae Thorne",
    epithet: "the First Through",
    position: "breaker",
    rank: "gold",
    banner: "ash-compact",
    origin: "Breaks Gates the way other people open doors. Smiles after.",
    loadout: {
      head: "head-none",
      torso: "torso-harness",
      arms: "arms-wraps",
      legs: "legs-boots",
      waist: "waist-belt",
      mainHand: "wpn-dual",
      offHand: null,
    },
  },
  {
    seed: 0xd21f7,
    name: "Sera Drift",
    epithet: "Weather of 12",
    position: "weaver",
    rank: "platinum",
    banner: "spire-court",
    origin: "Rewrote a floor rule mid-Trial. The Spire has not forgiven her.",
    loadout: {
      head: "hood-veil",
      torso: "torso-robe",
      back: "back-cloak",
      mainHand: "wpn-tome",
      offHand: "off-focus",
    },
    cosmetics: { aura: "aura-ice", markings: "mark-bands", trail: null },
  },
  {
    seed: 0x5c0a7,
    name: "Hale Rook",
    epithet: "Unmarked no longer",
    position: "shade",
    rank: "bronze",
    banner: "night-ledger",
    origin: "Drew the map of Floor 6 in someone else's blood, then mailed it.",
    loadout: {
      head: "hood-veil",
      face: "mask-blank",
      torso: "torso-wraps",
      back: "back-cloak",
      arms: "arms-wraps",
      mainHand: "wpn-daggers",
      offHand: null,
    },
  },
];

export function materializeCanon(spec: CanonSpec): Riftborn {
  const rolled = generateRiftborn({
    seed: spec.seed,
    force: { position: spec.position, rank: spec.rank, banner: spec.banner },
  });
  return {
    ...rolled,
    id: `canon-${spec.seed.toString(16)}`,
    name: spec.name,
    epithet: spec.epithet,
    origin: spec.origin,
    createdAt: spec.seed,
    canon: true,
    loadout: { ...rolled.loadout, ...spec.loadout },
    cosmetics: { ...rolled.cosmetics, ...spec.cosmetics },
  };
}

export function starterRoster(): Riftborn[] {
  return CANON.map(materializeCanon);
}
