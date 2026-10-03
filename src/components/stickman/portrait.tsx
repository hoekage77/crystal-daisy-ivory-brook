import { BANNER_META, RANK_META, gearById } from "@/lib/riftborn/catalog";
import { scaledFig, stanceSpread } from "@/lib/riftborn/mixamo";
import type { Riftborn } from "@/lib/riftborn/types";
import { cn } from "@/lib/utils";

export function StickPortrait({
  character,
  className,
}: {
  character: Riftborn;
  className?: string;
}) {
  const fig = scaledFig(character.build);
  const s = 150;
  const gx = 100;
  const gy = 312;
  const hip = { x: gx, y: gy - fig.hipY * s };
  const spread = stanceSpread(character.build.stance);
  const spine1 = { x: hip.x, y: hip.y - (fig.spine[0] + fig.spine[1]) * s };
  const chest = { x: hip.x, y: spine1.y - fig.spine[2] * s };
  const neck = { x: chest.x, y: chest.y - fig.neck * s };
  const head = { x: neck.x, y: neck.y - fig.head * s };
  const ls = { x: chest.x - fig.shoulderX * s, y: chest.y + 4 };
  const rs = { x: chest.x + fig.shoulderX * s, y: chest.y + 4 };
  const lh = { x: ls.x - 6, y: ls.y + (fig.upperArm + fig.forearm) * s * 0.92 };
  const rh = { x: rs.x + 6, y: rs.y + (fig.upperArm + fig.forearm) * s * 0.92 };
  const ll = { x: hip.x - fig.hipX * spread * s, y: hip.y };
  const rl = { x: hip.x + fig.hipX * spread * s, y: hip.y };
  const lf = { x: ll.x, y: ll.y + (fig.upperLeg + fig.lowerLeg) * s };
  const rf = { x: rl.x, y: rl.y + (fig.upperLeg + fig.lowerLeg) * s };
  const jr = fig.joint * s;
  const headR = fig.headR * s;
  const limb = character.palette.limb;
  const joint = character.palette.joint;
  const metal = character.palette.metal;
  const cloth = character.palette.cloth;
  const accent = character.palette.accent;
  const main = gearById(character.loadout.mainHand)?.mesh ?? "none";
  const back = gearById(character.loadout.back)?.mesh ?? "none";
  const headGear = gearById(character.loadout.head)?.mesh ?? "none";
  const torso = gearById(character.loadout.torso)?.mesh ?? "none";

  return (
    <svg
      viewBox="0 0 200 340"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`g-${character.id}`} cx="50%" cy="70%" r="55%">
          <stop offset="0%" stopColor={character.palette.aura} stopOpacity="0.28" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="340" fill="#0c0d10" />
      <circle cx="100" cy="250" r="90" fill={`url(#g-${character.id})`} />
      <ellipse cx="100" cy="318" rx="42" ry="6" fill={accent} opacity="0.25" />

      {(back === "cloak" || back === "cape" || back === "tattered") && (
        <path
          d={`M ${chest.x - 28} ${chest.y + 8} Q ${chest.x} ${chest.y + 90} ${chest.x + 30} ${chest.y + 8} Z`}
          fill={cloth}
          opacity="0.9"
        />
      )}
      {back === "wings" && (
        <g fill={character.palette.aura} opacity="0.85">
          <polygon points={`${chest.x - 12},${chest.y} ${chest.x - 52},${chest.y - 10} ${chest.x - 44},${chest.y + 40}`} />
          <polygon points={`${chest.x + 12},${chest.y} ${chest.x + 52},${chest.y - 10} ${chest.x + 44},${chest.y + 40}`} />
        </g>
      )}
      {back === "lantern" && (
        <circle cx={chest.x - 34} cy={chest.y - 8} r="7" fill={accent} />
      )}

      <g stroke={limb} strokeWidth={fig.bone * s * 2} strokeLinecap="round" fill="none">
        <line x1={hip.x} y1={hip.y} x2={chest.x} y2={chest.y} />
        <line x1={chest.x} y1={chest.y} x2={head.x} y2={head.y} />
        <line x1={ls.x} y1={ls.y} x2={lh.x} y2={lh.y} />
        <line x1={rs.x} y1={rs.y} x2={rh.x} y2={rh.y} />
        <line x1={ll.x} y1={ll.y} x2={lf.x} y2={lf.y} />
        <line x1={rl.x} y1={rl.y} x2={rf.x} y2={rf.y} />
      </g>

      {torso === "plate" || torso === "vest" ? (
        <rect
          x={chest.x - 18}
          y={chest.y - 4}
          width="36"
          height="28"
          rx="3"
          fill={metal}
        />
      ) : torso === "robe" || torso === "wraps" ? (
        <rect
          x={chest.x - 16}
          y={chest.y - 2}
          width="32"
          height="34"
          rx="8"
          fill={cloth}
        />
      ) : null}

      {[hip, chest, ls, rs, lh, rh, ll, rl, { x: lf.x, y: lf.y - 8 }, { x: rf.x, y: rf.y - 8 }].map(
        (p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={jr} fill={joint} />
        ),
      )}
      <circle cx={head.x} cy={head.y} r={headR} fill={joint} />
      <circle cx={head.x - headR * 0.32} cy={head.y - 2} r="1.6" fill={character.palette.eye} />
      <circle cx={head.x + headR * 0.32} cy={head.y - 2} r="1.6" fill={character.palette.eye} />

      {headGear === "helm" && (
        <path
          d={`M ${head.x - headR} ${head.y} Q ${head.x} ${head.y - headR * 1.5} ${head.x + headR} ${head.y} Z`}
          fill={metal}
        />
      )}
      {headGear === "hood" && (
        <path
          d={`M ${head.x - headR * 1.2} ${head.y + 4} Q ${head.x} ${head.y - headR * 1.7} ${head.x + headR * 1.2} ${head.y + 4}`}
          fill={cloth}
        />
      )}
      {headGear === "horns" && (
        <g fill={metal}>
          <polygon
            points={`${head.x - 10},${head.y - 8} ${head.x - 22},${head.y - 28} ${head.x - 6},${head.y - 10}`}
          />
          <polygon
            points={`${head.x + 10},${head.y - 8} ${head.x + 22},${head.y - 28} ${head.x + 6},${head.y - 10}`}
          />
        </g>
      )}
      {headGear === "crown" && (
        <g fill={accent}>
          {[ -12, -6, 0, 6, 12].map((dx) => (
            <rect key={dx} x={head.x + dx - 2} y={head.y - headR - 8} width="4" height="8" />
          ))}
        </g>
      )}
      {headGear === "visor" && (
        <rect x={head.x - 10} y={head.y - 4} width="20" height="5" rx="1" fill={metal} />
      )}

      {(main === "sword" || main === "dual" || main === "greatsword") && (
        <line
          x1={rh.x}
          y1={rh.y}
          x2={rh.x + 4}
          y2={rh.y - (main === "greatsword" ? 48 : 32)}
          stroke={metal}
          strokeWidth={main === "greatsword" ? 4 : 2.4}
          strokeLinecap="round"
        />
      )}
      {main === "spear" || main === "needle" ? (
        <line
          x1={rh.x}
          y1={rh.y + 28}
          x2={rh.x + 2}
          y2={rh.y - 56}
          stroke={metal}
          strokeWidth={main === "needle" ? 1.4 : 2}
          strokeLinecap="round"
        />
      ) : null}
      {main === "staff" && (
        <g>
          <line x1={rh.x} y1={rh.y + 20} x2={rh.x} y2={rh.y - 44} stroke={cloth} strokeWidth="2.2" />
          <circle cx={rh.x} cy={rh.y - 46} r="5" fill={accent} />
        </g>
      )}
      {main === "scythe" && (
        <g stroke={metal} fill="none" strokeWidth="2.2">
          <line x1={rh.x} y1={rh.y + 10} x2={rh.x} y2={rh.y - 48} />
          <path d={`M ${rh.x} ${rh.y - 48} Q ${rh.x + 22} ${rh.y - 40} ${rh.x + 18} ${rh.y - 22}`} />
        </g>
      )}
      {(main === "daggers" || main === "dual") && (
        <line
          x1={lh.x}
          y1={lh.y}
          x2={lh.x - 3}
          y2={lh.y - 22}
          stroke={metal}
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
      {gearById(character.loadout.offHand)?.mesh === "shield" && (
        <ellipse cx={lh.x - 6} cy={lh.y - 8} rx="10" ry="14" fill={metal} />
      )}
    </svg>
  );
}

export function RosterCard({
  character,
  active,
  onSelect,
}: {
  character: Riftborn;
  active?: boolean;
  onSelect?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border text-left transition-colors",
        active
          ? "border-accent bg-elevated"
          : "border-line bg-surface hover:border-line-strong",
      )}
    >
      <div className="relative aspect-[3/4] bg-bg">
        <StickPortrait character={character} />
        {character.canon ? (
          <span className="absolute left-2 top-2 rounded-sm border border-accent/30 bg-bg/80 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-accent">
            Canon
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-1 px-3 py-3">
        <p className="font-display text-sm font-semibold leading-tight text-fg">
          {character.name}
        </p>
        <p className="text-xs text-muted">{character.epithet}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
          {RANK_META[character.rank].name} · {character.position} ·{" "}
          {BANNER_META[character.banner].name}
        </p>
      </div>
    </button>
  );
}
