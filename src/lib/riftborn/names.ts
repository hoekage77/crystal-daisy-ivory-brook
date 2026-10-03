import { BANNER_META, POSITION_META, RANK_META } from "./catalog";
import type { BannerId, PositionId, RankId } from "./types";
import { pick } from "./rng";

const FIRST = [
  "Ae",
  "Brin",
  "Cass",
  "Dae",
  "Elk",
  "Fen",
  "Hale",
  "Iori",
  "Kael",
  "Lira",
  "Maia",
  "Nox",
  "Oryn",
  "Pell",
  "Ren",
  "Sable",
  "Tor",
  "Vale",
  "Wren",
  "Yara",
  "Seo",
  "Hwan",
  "Min",
  "Rin",
  "Nyx",
  "Soren",
  "Ilya",
  "Kira",
  "Voss",
  "Halim",
  "Mira",
  "Jae",
  "Sera",
  "Rook",
  "Ash",
  "Quin",
  "Nera",
  "Cal",
  "Odette",
  "Vesper",
];

const LAST = [
  "Ashen",
  "Thorne",
  "Vale",
  "Quill",
  "Rook",
  "Drift",
  "Sol",
  "Marr",
  "Keel",
  "Voss",
  "Rane",
  "Peck",
  "Iori",
  "Sable",
  "Hollow",
  "Vane",
  "Cinder",
  "Wick",
  "Morrow",
  "Shard",
  "Nadir",
  "Pell",
  "Greave",
  "Lumen",
  "Harrow",
  "Pike",
  "Vellum",
  "Noct",
  "Silt",
  "Wane",
];

const ORIGIN = [
  "Woke inside a closing Gate with someone else's knife.",
  "The only survivor of Floor 9 who still answers mail.",
  "Sold a Banner contract for a name that was not theirs.",
  "Followed a lighthouse orb that refused to explain itself.",
  "Ranked up the night the Spire skipped a floor.",
  "Keeps an Afterimage of a sibling in a locked flask.",
  "Writes the Ledger by hand because the System lied once.",
  "Climbs because the ground floor forgot them.",
  "Earned Iron by standing still longer than the boss.",
  "Left the White Veil after a wipe they could have stopped.",
  "Night Ledger courier. The packages hum.",
  "Court-born. Pretends the ash on the boots is theatrical.",
  "Heard a Sovereign speak and has not slept correctly since.",
  "Maps Trials as music. The wrong note is a trap.",
  "Does not remember the first Gate. Everyone else does.",
];

export function rollName(
  rand: () => number,
  position: PositionId,
  rank: RankId,
) {
  const a = pick(rand, FIRST);
  let b = pick(rand, LAST);
  if (b === a) b = pick(rand, LAST);
  const name = `${a} ${b}`;
  const epithet = rollEpithet(rand, position, rank);
  return { name, epithet };
}

export function rollEpithet(
  rand: () => number,
  position: PositionId,
  rank: RankId,
) {
  const pos = POSITION_META[position].name;
  const pool = [
    RANK_META[rank].name + " " + pos,
    `the ${pos}`,
    rank === "ember" ? "Unmarked" : `of the ${RANK_META[rank].name} stair`,
    rank === "sovereign" ? "Irregular" : `${pos} of the Gate`,
    rank === "void" || rank === "sovereign" ? "of the Black Floor" : `Floor-touched`,
  ];
  return pick(rand, pool);
}

export function rollOrigin(rand: () => number, banner: BannerId) {
  const extra = ` Banner: ${BANNER_META[banner].name}.`;
  return pick(rand, ORIGIN) + extra;
}
