import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { StudioClient } from "@/components/stickman/studio-client";
import { Inspector } from "@/components/forge/inspector";
import { Button } from "@/components/ui/button";
import { POSITION_META, RANK_META } from "@/lib/riftborn/catalog";
import { POSITIONS, RANKS } from "@/lib/riftborn/types";
import { useForge } from "@/lib/riftborn/store";

export const Route = createFileRoute("/")({ component: ForgePage });

function ForgePage() {
  const ready = useForge((s) => s.ready);
  const roster = useForge((s) => s.roster);
  const currentId = useForge((s) => s.currentId);
  const current = roster.find((c) => c.id === currentId) ?? roster[0] ?? null;
  const forgeOne = useForge((s) => s.forgeOne);
  const forgeSquad = useForge((s) => s.forgeSquad);
  const locks = useForge((s) => s.locks);
  const setLock = useForge((s) => s.setLock);
  const rerollLayer = useForge((s) => s.rerollLayer);
  const remove = useForge((s) => s.remove);
  const rename = useForge((s) => s.rename);
  const forcePosition = useForge((s) => s.forcePosition);
  const forceRank = useForge((s) => s.forceRank);
  const setForcePosition = useForge((s) => s.setForcePosition);
  const setForceRank = useForge((s) => s.setForceRank);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "g" || e.key === "G" || e.code === "Space") {
        e.preventDefault();
        forgeOne();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [forgeOne]);

  if (!ready) {
    return (
      <main className="flex min-h-[420px] flex-1 rounded-xl border border-line bg-surface lg:min-h-[640px]" />
    );
  }

  return (
    <main className="flex min-h-0 flex-1 flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-6">
      <section className="flex min-h-[420px] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-panel lg:min-h-[640px]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
              Mixamo stick · Ledger live
            </p>
            <h1 className="font-display text-lg font-semibold tracking-tight">
              {current ? current.name : "Empty floor"}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => forgeSquad()}>
              Forge six
            </Button>
            <Button size="lg" onClick={() => forgeOne()} className="min-w-[9.5rem]">
              Forge
            </Button>
          </div>
        </div>
        <div className="relative min-h-[360px] flex-1 touch-none sm:min-h-[480px]">
          {current ? (
            <StudioClient character={current} />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              Forge a Riftborn to begin.
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-end gap-3 border-t border-line px-4 py-3 sm:px-5">
          <label className="flex min-w-[9rem] flex-1 flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
              Bias position
            </span>
            <select
              value={forcePosition}
              onChange={(e) =>
                setForcePosition(e.target.value as typeof forcePosition)
              }
              className="h-10 rounded-md border border-line bg-elevated px-3 text-sm text-fg"
            >
              <option value="any">Any position</option>
              {POSITIONS.map((p) => (
                <option key={p} value={p}>
                  {POSITION_META[p].name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex min-w-[9rem] flex-1 flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
              Bias rank
            </span>
            <select
              value={forceRank}
              onChange={(e) => setForceRank(e.target.value as typeof forceRank)}
              className="h-10 rounded-md border border-line bg-elevated px-3 text-sm text-fg"
            >
              <option value="any">Any rank</option>
              {RANKS.map((r) => (
                <option key={r} value={r}>
                  {RANK_META[r].name}
                </option>
              ))}
            </select>
          </label>
          <p className="hidden pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle sm:block">
            G or Space to forge
          </p>
        </div>
      </section>

      <aside className="rounded-xl border border-line bg-surface p-5 shadow-panel">
        {current ? (
          <Inspector
            character={current}
            locks={locks}
            onLock={setLock}
            onReroll={rerollLayer}
            onRemove={() => remove(current.id)}
            onRename={(name) => rename(current.id, name)}
          />
        ) : (
          <p className="text-sm text-muted">No Riftborn selected.</p>
        )}
      </aside>
    </main>
  );
}
