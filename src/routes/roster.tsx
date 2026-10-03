import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { RosterCard } from "@/components/stickman/portrait";
import { Button } from "@/components/ui/button";
import { useForge } from "@/lib/riftborn/store";

export const Route = createFileRoute("/roster")({ component: RosterPage });

function RosterPage() {
  const ready = useForge((s) => s.ready);
  const roster = useForge((s) => s.roster);
  const currentId = useForge((s) => s.currentId);
  const select = useForge((s) => s.select);
  const forgeOne = useForge((s) => s.forgeOne);
  const forgeSquad = useForge((s) => s.forgeSquad);
  const navigate = useNavigate();

  if (!ready) {
    return <main className="min-h-[40vh] rounded-xl border border-line bg-surface" />;
  }

  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
            {roster.length} recorded
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight">Roster</h1>
          <p className="mt-1 max-w-xl text-sm text-muted">
            Canon eight sit at the top of a new Ledger. Every Forge click appends another
            stick figure — same skeleton, different wear.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => forgeSquad()}>
            Forge six
          </Button>
          <Button onClick={() => forgeOne()}>Forge</Button>
        </div>
      </div>
      {roster.length === 0 ? (
        <p className="text-sm text-muted">Empty. Forge a Riftborn.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {roster.map((c) => (
            <RosterCard
              key={c.id}
              character={c}
              active={c.id === currentId}
              onSelect={() => {
                select(c.id);
                void navigate({ to: "/" });
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
