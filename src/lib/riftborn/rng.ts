/** Mulberry32 — deterministic, tiny, good enough for character DNA. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFromBytes(): number {
  const buf = new Uint32Array(1);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(buf);
    return buf[0] || Math.floor(Math.random() * 0xffffffff);
  }
  return Math.floor(Math.random() * 0xffffffff);
}

export function pick<T>(rand: () => number, list: readonly T[]): T {
  return list[Math.floor(rand() * list.length) % list.length] as T;
}

export function weighted<T extends { w: number }>(
  rand: () => number,
  list: readonly T[],
): T {
  const total = list.reduce((s, x) => s + x.w, 0);
  let t = rand() * total;
  for (const item of list) {
    t -= item.w;
    if (t <= 0) return item;
  }
  return list[list.length - 1] as T;
}

export function range(rand: () => number, min: number, max: number) {
  return min + rand() * (max - min);
}

export function chance(rand: () => number, p: number) {
  return rand() < p;
}

export function toCode(seed: number) {
  return seed.toString(16).padStart(8, "0");
}
