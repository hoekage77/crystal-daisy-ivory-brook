import { useEffect, useState, type ComponentType } from "react";
import type { Riftborn } from "@/lib/riftborn/types";

export function StudioClient({ character }: { character: Riftborn }) {
  const [Comp, setComp] = useState<ComponentType<{ character: Riftborn }> | null>(
    null,
  );
  useEffect(() => {
    let live = true;
    void import("./studio").then((mod) => {
      if (live) setComp(() => mod.Studio);
    });
    return () => {
      live = false;
    };
  }, []);
  if (!Comp) return <div className="h-full w-full bg-bg" aria-hidden />;
  return <Comp character={character} />;
}
