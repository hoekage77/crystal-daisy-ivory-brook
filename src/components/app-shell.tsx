import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useForge } from "@/lib/riftborn/store";

const NAV = [
  { to: "/", label: "Forge" },
  { to: "/roster", label: "Roster" },
  { to: "/gear", label: "Gear" },
  { to: "/codex", label: "Codex" },
] as const;

function HydrateForge() {
  const hydrate = useForge((s) => s.hydrate);
  useEffect(() => {
    const persist = useForge.persist;
    const run = () => hydrate();
    if (persist.hasHydrated()) run();
    return persist.onFinishHydration(run);
  }, [hydrate]);
  return null;
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <HydrateForge />
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2.5">
            <span className="font-display text-lg font-semibold tracking-tight text-fg sm:text-xl">
              Riftborn
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-subtle sm:inline">
              Character Forge
            </span>
          </Link>
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {NAV.map((item) => {
              const on =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-sm px-2.5 py-2 text-sm font-medium transition-colors sm:px-3",
                    on ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
        {children}
      </div>
    </div>
  );
}
