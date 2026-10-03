import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateRiftborn, generateSquad, starterRoster } from "./generate";
import {
  DEFAULT_LOCKS,
  SAVE_VERSION,
  type Locks,
  type Riftborn,
  type SlotId,
  type CosmeticSlot,
} from "./types";

type ForgeState = {
  version: number;
  ready: boolean;
  roster: Riftborn[];
  currentId: string | null;
  locks: Locks;
  forcePosition: Riftborn["position"] | "any";
  forceRank: Riftborn["rank"] | "any";
  hydrate: () => void;
  current: () => Riftborn | null;
  forgeOne: () => Riftborn;
  forgeSquad: () => Riftborn[];
  rerollLayer: (layer: keyof Locks) => void;
  select: (id: string) => void;
  remove: (id: string) => void;
  setLock: (key: keyof Locks, value: boolean) => void;
  setForcePosition: (v: ForgeState["forcePosition"]) => void;
  setForceRank: (v: ForgeState["forceRank"]) => void;
  equip: (slot: SlotId, gearId: string | null) => void;
  equipCosmetic: (slot: CosmeticSlot, id: string | null) => void;
  rename: (id: string, name: string) => void;
  importRoster: (list: Riftborn[]) => void;
};

function withCurrent(roster: Riftborn[], currentId: string | null) {
  return roster.find((c) => c.id === currentId) ?? roster[0] ?? null;
}

export const useForge = create<ForgeState>()(
  persist(
    (set, get) => ({
      version: SAVE_VERSION,
      ready: true,
      roster: starterRoster(),
      currentId: "canon-a11e55",
      locks: { ...DEFAULT_LOCKS },
      forcePosition: "any",
      forceRank: "any",
      hydrate: () => {
        const { roster } = get();
        if (roster.length === 0) {
          const starter = starterRoster();
          set({ roster: starter, currentId: starter[0]?.id ?? null, ready: true });
          return;
        }
        const currentId = get().currentId ?? roster[0]?.id ?? null;
        set({ currentId, ready: true });
      },
      current: () => withCurrent(get().roster, get().currentId),
      forgeOne: () => {
        const { locks, roster, currentId, forcePosition, forceRank } = get();
        const base = withCurrent(roster, currentId);
        const made = generateRiftborn({
          locks,
          base,
          force: {
            position: forcePosition === "any" ? undefined : forcePosition,
            rank: forceRank === "any" ? undefined : forceRank,
          },
        });
        set({ roster: [made, ...roster], currentId: made.id });
        return made;
      },
      forgeSquad: () => {
        const { locks, roster, currentId, forcePosition, forceRank } = get();
        const base = withCurrent(roster, currentId);
        const squad = generateSquad(6, {
          locks,
          base,
          force: {
            position: forcePosition === "any" ? undefined : forcePosition,
            rank: forceRank === "any" ? undefined : forceRank,
          },
        });
        set({ roster: [...squad, ...roster], currentId: squad[0]?.id ?? currentId });
        return squad;
      },
      rerollLayer: (layer) => {
        const { roster, currentId, locks } = get();
        const base = withCurrent(roster, currentId);
        if (!base) return;
        const inverted: Locks = {
          position: true,
          rank: true,
          banner: true,
          colors: true,
          gear: true,
          cosmetics: true,
          build: true,
        };
        inverted[layer] = false;
        const made = generateRiftborn({
          locks: { ...inverted, ...locks, [layer]: false },
          base,
          force: { position: base.position, rank: base.rank, banner: base.banner },
          seed: undefined,
        });
        const next: Riftborn = {
          ...base,
          ...(layer === "colors" ? { palette: made.palette } : null),
          ...(layer === "gear" ? { loadout: made.loadout } : null),
          ...(layer === "cosmetics" ? { cosmetics: made.cosmetics } : null),
          ...(layer === "build" ? { build: made.build } : null),
          ...(layer === "banner" ? { banner: made.banner, origin: made.origin } : null),
          ...(layer === "position"
            ? {
                position: made.position,
                loadout: made.loadout,
                cosmetics: made.cosmetics,
                stats: made.stats,
                palette: made.palette,
              }
            : null),
          ...(layer === "rank"
            ? {
                rank: made.rank,
                loadout: made.loadout,
                cosmetics: made.cosmetics,
                stats: made.stats,
                palette: made.palette,
              }
            : null),
        };
        set({
          roster: roster.map((c) => (c.id === base.id ? next : c)),
        });
      },
      select: (id) => set({ currentId: id }),
      remove: (id) => {
        const roster = get().roster.filter((c) => c.id !== id);
        const currentId =
          get().currentId === id ? (roster[0]?.id ?? null) : get().currentId;
        set({ roster, currentId });
      },
      setLock: (key, value) =>
        set({ locks: { ...get().locks, [key]: value } }),
      setForcePosition: (v) => set({ forcePosition: v }),
      setForceRank: (v) => set({ forceRank: v }),
      equip: (slot, gearId) => {
        const { roster, currentId } = get();
        set({
          roster: roster.map((c) =>
            c.id === currentId
              ? { ...c, loadout: { ...c.loadout, [slot]: gearId } }
              : c,
          ),
        });
      },
      equipCosmetic: (slot, id) => {
        const { roster, currentId } = get();
        set({
          roster: roster.map((c) =>
            c.id === currentId
              ? { ...c, cosmetics: { ...c.cosmetics, [slot]: id } }
              : c,
          ),
        });
      },
      rename: (id, name) =>
        set({
          roster: get().roster.map((c) => (c.id === id ? { ...c, name } : c)),
        }),
      importRoster: (list) => {
        const cleaned = list.filter((c) => c && c.id && c.name);
        if (cleaned.length === 0) return;
        set({ roster: [...cleaned, ...get().roster], currentId: cleaned[0].id });
      },
    }),
    {
      name: "riftborn-forge-v1",
      version: SAVE_VERSION,
      partialize: (s) => ({
        version: s.version,
        roster: s.roster,
        currentId: s.currentId,
        locks: s.locks,
        forcePosition: s.forcePosition,
        forceRank: s.forceRank,
      }),
    },
  ),
);
