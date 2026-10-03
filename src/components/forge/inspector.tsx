import { BANNER_META, POSITION_META, RANK_META, gearById, cosmeticById } from "@/lib/riftborn/catalog";
import type { Locks, Riftborn } from "@/lib/riftborn/types";
import { SLOTS, COSMETIC_SLOTS } from "@/lib/riftborn/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LOCK_LABEL: Record<keyof Locks, string> = {
  position: "Position",
  rank: "Rank",
  banner: "Banner",
  colors: "Colors",
  gear: "Gear",
  cosmetics: "Cosmetics",
  build: "Build",
};

const STAT_LABEL: Record<keyof Riftborn["stats"], string> = {
  str: "STR",
  agi: "AGI",
  vit: "VIT",
  intel: "INT",
  sense: "SNS",
  luck: "LCK",
};

export function Inspector({
  character,
  locks,
  onLock,
  onReroll,
  onRemove,
  onRename,
}: {
  character: Riftborn;
  locks: Locks;
  onLock: (key: keyof Locks, value: boolean) => void;
  onReroll: (layer: keyof Locks) => void;
  onRemove: () => void;
  onRename: (name: string) => void;
}) {
  const pos = POSITION_META[character.position];
  const rank = RANK_META[character.rank];
  const banner = BANNER_META[character.banner];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <input
          value={character.name}
          onChange={(e) => onRename(e.target.value)}
          className="w-full bg-transparent font-display text-2xl font-semibold tracking-tight text-fg outline-none"
          aria-label="Character name"
        />
        <p className="mt-1 text-sm text-muted">{character.epithet}</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {character.code}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge tone="accent">{rank.name}</Badge>
        <Badge>{pos.name}</Badge>
        <Badge>{banner.name}</Badge>
        {character.canon ? <Badge tone="fg">Canon</Badge> : null}
      </div>

      <p className="text-sm leading-relaxed text-muted">{character.origin}</p>
      <p className="text-sm leading-relaxed text-subtle">{pos.blurb}</p>

      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Ledger stats
        </p>
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(STAT_LABEL) as Array<keyof Riftborn["stats"]>).map((k) => (
            <div key={k} className="rounded-md border border-line bg-elevated px-2.5 py-2">
              <p className="font-mono text-[10px] tracking-[0.14em] text-subtle">
                {STAT_LABEL[k]}
              </p>
              <p className="font-mono text-lg tabular-nums text-fg">{character.stats[k]}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Loadout
        </p>
        <ul className="flex flex-col gap-1.5">
          {SLOTS.map((slot) => {
            const item = gearById(character.loadout[slot]);
            return (
              <li
                key={slot}
                className="flex items-baseline justify-between gap-3 border-b border-line/70 py-1.5 text-sm"
              >
                <span className="capitalize text-subtle">{slot.replace("Hand", " hand")}</span>
                <span className="text-right text-fg">{item?.name ?? "—"}</span>
              </li>
            );
          })}
          {COSMETIC_SLOTS.map((slot) => {
            const item = cosmeticById(character.cosmetics[slot]);
            return (
              <li
                key={slot}
                className="flex items-baseline justify-between gap-3 border-b border-line/70 py-1.5 text-sm"
              >
                <span className="capitalize text-subtle">{slot}</span>
                <span className="text-right text-fg">{item?.name ?? "—"}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Locks — freeze a layer, then forge
        </p>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(LOCK_LABEL) as Array<keyof Locks>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onLock(key, !locks[key])}
              className={cn(
                "rounded-sm border px-2.5 py-1.5 text-xs transition-colors",
                locks[key]
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-line text-muted hover:text-fg",
              )}
            >
              {LOCK_LABEL[key]}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {(["colors", "gear", "cosmetics", "build"] as const).map((layer) => (
            <Button
              key={layer}
              size="sm"
              variant="outline"
              onClick={() => onReroll(layer)}
            >
              Reroll {LOCK_LABEL[layer].toLowerCase()}
            </Button>
          ))}
        </div>
      </div>

      {!character.canon ? (
        <Button variant="ghost" onClick={onRemove} className="self-start text-danger">
          Remove from roster
        </Button>
      ) : null}
    </div>
  );
}
