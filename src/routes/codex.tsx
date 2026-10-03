import { createFileRoute } from "@tanstack/react-router";
import { CODEX } from "@/lib/riftborn/codex";
import { BANNER_META, POSITION_META, RANK_META } from "@/lib/riftborn/catalog";
import { BANNERS, POSITIONS, RANKS } from "@/lib/riftborn/types";

export const Route = createFileRoute("/codex")({ component: CodexPage });

function CodexPage() {
  return (
    <main className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
          Ledger
        </p>
        <nav className="mt-3 flex flex-col gap-1">
          {CODEX.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-sm px-2 py-1.5 text-sm text-muted hover:text-fg"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>
      <div className="flex max-w-3xl flex-col gap-14">
        <header>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
            Design bible
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
            How Riftborn are made
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Solo Leveling’s Gates. Tower of God’s climb. Mixamo’s stick figure as the
            only body. This is the document the Forge obeys — change the words here when
            the world should change.
          </p>
        </header>

        {CODEX.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {section.kicker}
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {section.body.map((p) => (
                <p key={p} className="text-[15px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold">Positions</h2>
            <ul className="mt-3 flex flex-col gap-3">
              {POSITIONS.map((id) => (
                <li key={id}>
                  <p className="font-medium text-fg">{POSITION_META[id].name}</p>
                  <p className="text-sm text-muted">{POSITION_META[id].analog}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">Ranks</h2>
            <ul className="mt-3 flex flex-col gap-3">
              {RANKS.map((id) => (
                <li key={id}>
                  <p className="font-medium text-fg">
                    {RANK_META[id].roman} · {RANK_META[id].name}
                  </p>
                  <p className="text-sm text-muted">{RANK_META[id].blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Banners</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {BANNERS.map((id) => (
              <li key={id} className="rounded-md border border-line bg-surface p-4">
                <p className="font-medium text-fg">{BANNER_META[id].name}</p>
                <p className="mt-1 text-sm text-muted">{BANNER_META[id].blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
