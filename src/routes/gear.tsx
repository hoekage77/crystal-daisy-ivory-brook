import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { COSMETICS, GEAR, allowedCosmetic, allowedGear } from "@/lib/riftborn/catalog";
import { COSMETIC_SLOTS, SLOTS, type CosmeticSlot, type SlotId } from "@/lib/riftborn/types";
import { useForge } from "@/lib/riftborn/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gear")({ component: GearPage });

function GearPage() {
  const ready = useForge((s) => s.ready);
  const roster = useForge((s) => s.roster);
  const currentId = useForge((s) => s.currentId);
  const current = roster.find((c) => c.id === currentId) ?? roster[0] ?? null;
  const equip = useForge((s) => s.equip);
  const equipCosmetic = useForge((s) => s.equipCosmetic);
  const [slot, setSlot] = useState<SlotId | CosmeticSlot>("mainHand");

  const isCosmetic = (COSMETIC_SLOTS as readonly string[]).includes(slot);
  const items = useMemo(() => {
    if (!current) return [];
    if (isCosmetic) {
      return COSMETICS.filter((g) => g.slot === slot);
    }
    return GEAR.filter((g) => g.slot === slot);
  }, [slot, current, isCosmetic]);

  if (!ready) {
    return <main className="min-h-[40vh] rounded-xl border border-line bg-surface" />;
  }

  return (
    <main className="flex flex-col gap-6">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
          Paper doll
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Gear & cosmetics</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted">
          Equip the current Riftborn. Pieces that this Position or Rank cannot wear stay
          visible but locked — the silhouette language stays honest.
        </p>
        {current ? (
          <p className="mt-3 text-sm text-fg">
            Dressing <span className="font-medium">{current.name}</span>
            <span className="text-muted">
              {" "}
              · {current.position} · {current.rank}
            </span>
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {SLOTS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSlot(s)}
            className={cn(
              "rounded-sm border px-3 py-2 text-xs capitalize transition-colors",
              slot === s
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {s.replace("Hand", " hand")}
          </button>
        ))}
        {COSMETIC_SLOTS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSlot(s)}
            className={cn(
              "rounded-sm border px-3 py-2 text-xs capitalize transition-colors",
              slot === s
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const equipped = current
            ? isCosmetic
              ? current.cosmetics[slot as CosmeticSlot] === item.id
              : current.loadout[slot as SlotId] === item.id
            : false;
          const allowed = current
            ? isCosmetic
              ? item.mesh === "none" ||
                allowedCosmetic(item as (typeof COSMETICS)[number], current.position, current.rank)
              : item.mesh === "none" ||
                allowedGear(item as (typeof GEAR)[number], current.position, current.rank)
            : false;
          return (
            <article
              key={item.id}
              className={cn(
                "flex flex-col gap-3 rounded-lg border p-4",
                equipped ? "border-accent bg-elevated" : "border-line bg-surface",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-base font-semibold">{item.name}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.blurb}</p>
                </div>
                <Badge>{item.rarity}</Badge>
              </div>
              <Button
                size="sm"
                variant={equipped ? "accent" : "outline"}
                disabled={!current || !allowed}
                onClick={() => {
                  if (!current) return;
                  if (isCosmetic) {
                    equipCosmetic(
                      slot as CosmeticSlot,
                      equipped ? null : item.mesh === "none" ? null : item.id,
                    );
                  } else {
                    equip(
                      slot as SlotId,
                      equipped || item.mesh === "none" ? null : item.id,
                    );
                  }
                }}
              >
                {!allowed ? "Wrong rank / position" : equipped ? "Equipped" : "Equip"}
              </Button>
            </article>
          );
        })}
      </div>
    </main>
  );
}
