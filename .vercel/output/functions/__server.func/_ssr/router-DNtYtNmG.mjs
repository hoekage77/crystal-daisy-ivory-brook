import { i as __toESM } from "../_runtime.mjs";
import { a as DEFAULT_LOCKS, c as GEAR, d as POSITION_PALETTES, g as allowedGear, h as allowedCosmetic, m as SLOTS, n as BANNER_META, o as EMPTY_COSMETICS, p as RANK_META, r as COSMETICS, s as EMPTY_LOADOUT, t as BANNERS, u as POSITION_META, y as rankIndex } from "./catalog-B1Ee27tO.mjs";
import { s as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DNtYtNmG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Mulberry32 — deterministic, tiny, good enough for character DNA. */
function mulberry32(seed) {
	let a = seed >>> 0;
	return function rand() {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function seedFromBytes() {
	const buf = /* @__PURE__ */ new Uint32Array(1);
	if (typeof crypto !== "undefined" && crypto.getRandomValues) {
		crypto.getRandomValues(buf);
		return buf[0] || Math.floor(Math.random() * 4294967295);
	}
	return Math.floor(Math.random() * 4294967295);
}
function pick(rand, list) {
	return list[Math.floor(rand() * list.length) % list.length];
}
function weighted(rand, list) {
	const total = list.reduce((s, x) => s + x.w, 0);
	let t = rand() * total;
	for (const item of list) {
		t -= item.w;
		if (t <= 0) return item;
	}
	return list[list.length - 1];
}
function range(rand, min, max) {
	return min + rand() * (max - min);
}
function chance(rand, p) {
	return rand() < p;
}
function toCode(seed) {
	return seed.toString(16).padStart(8, "0");
}
var FIRST = [
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
	"Vesper"
];
var LAST = [
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
	"Wane"
];
var ORIGIN = [
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
	"Does not remember the first Gate. Everyone else does."
];
function rollName(rand, position, rank) {
	const a = pick(rand, FIRST);
	let b = pick(rand, LAST);
	if (b === a) b = pick(rand, LAST);
	return {
		name: `${a} ${b}`,
		epithet: rollEpithet(rand, position, rank)
	};
}
function rollEpithet(rand, position, rank) {
	const pos = POSITION_META[position].name;
	return pick(rand, [
		RANK_META[rank].name + " " + pos,
		`the ${pos}`,
		rank === "ember" ? "Unmarked" : `of the ${RANK_META[rank].name} stair`,
		rank === "sovereign" ? "Irregular" : `${pos} of the Gate`,
		rank === "void" || rank === "sovereign" ? "of the Black Floor" : `Floor-touched`
	]);
}
function rollOrigin(rand, banner) {
	const extra = ` Banner: ${BANNER_META[banner].name}.`;
	return pick(rand, ORIGIN) + extra;
}
var RANK_WEIGHTS = [
	{
		id: "ember",
		w: 22
	},
	{
		id: "iron",
		w: 20
	},
	{
		id: "bronze",
		w: 16
	},
	{
		id: "silver",
		w: 14
	},
	{
		id: "gold",
		w: 12
	},
	{
		id: "platinum",
		w: 8
	},
	{
		id: "void",
		w: 6
	},
	{
		id: "sovereign",
		w: 2
	}
];
var POSITION_WEIGHTS = [
	{
		id: "breaker",
		w: 16
	},
	{
		id: "lance",
		w: 14
	},
	{
		id: "lumen",
		w: 14
	},
	{
		id: "shade",
		w: 16
	},
	{
		id: "weaver",
		w: 14
	},
	{
		id: "aegis",
		w: 14
	},
	{
		id: "wraith",
		w: 8
	}
];
var DEFAULT_WEAPON = {
	breaker: "wpn-dual",
	lance: "wpn-spear",
	lumen: "wpn-staff",
	shade: "wpn-daggers",
	weaver: "wpn-staff",
	aegis: "wpn-sword",
	wraith: "wpn-daggers"
};
var DEFAULT_OFF = {
	aegis: "off-shield",
	lumen: "off-lantern",
	weaver: "off-focus",
	wraith: "off-focus"
};
function jitterHex(rand, hex, amount) {
	const n = hex.replace("#", "");
	if (n.length !== 6) return hex;
	const ch = (i) => {
		const v = parseInt(n.slice(i, i + 2), 16);
		const j = Math.round((rand() - .5) * 2 * amount * 255);
		return Math.max(0, Math.min(255, v + j)).toString(16).padStart(2, "0");
	};
	return `#${ch(0)}${ch(2)}${ch(4)}`;
}
function mixPalette(rand, position, rank) {
	const base = POSITION_PALETTES[position];
	return {
		joint: jitterHex(rand, base.joint, .04),
		limb: jitterHex(rand, base.limb, .05),
		accent: jitterHex(rand, base.accent, .08),
		metal: jitterHex(rand, RANK_META[rank].metal, .06),
		cloth: jitterHex(rand, base.cloth, .07),
		aura: jitterHex(rand, base.aura, .08),
		eye: jitterHex(rand, base.eye, .05)
	};
}
function pickForSlot(rand, slot, position, rank, accessoryBias) {
	const pool = GEAR.filter((g) => g.slot === slot && g.mesh !== "none" && allowedGear(g, position, rank));
	if (pool.length === 0) return null;
	if (slot === "mainHand") {
		if (chance(rand, .72)) {
			const preferred = pool.find((g) => g.id === DEFAULT_WEAPON[position]);
			if (preferred && chance(rand, .55)) return preferred.id;
		}
		return pick(rand, pool).id;
	}
	if (slot === "offHand") {
		const fallback = DEFAULT_OFF[position];
		if (fallback && pool.some((g) => g.id === fallback) && chance(rand, .7)) return fallback;
		if (!chance(rand, accessoryBias * .85)) return null;
		return pick(rand, pool).id;
	}
	const emptyChance = slot === "face" ? .55 : .22;
	if (!chance(rand, accessoryBias) && chance(rand, emptyChance)) return null;
	return pick(rand, pool).id;
}
function rollLoadout(rand, position, rank) {
	const bias = RANK_META[rank].accessoryBias;
	const loadout = { ...EMPTY_LOADOUT };
	for (const slot of SLOTS) loadout[slot] = pickForSlot(rand, slot, position, rank, bias);
	if (!loadout.mainHand) loadout.mainHand = DEFAULT_WEAPON[position];
	if (position === "aegis" && !loadout.offHand) loadout.offHand = "off-shield";
	if (position === "lumen" && !loadout.back && chance(rand, .65)) loadout.back = "back-lantern";
	if (position === "wraith" && rankIndex(rank) >= rankIndex("void") && chance(rand, .55)) loadout.back = "back-wings";
	if ((rank === "void" || rank === "sovereign") && (position === "wraith" || position === "shade") && chance(rand, .5)) loadout.head = "crown-sovereign";
	return loadout;
}
function rollCosmetics(rand, position, rank) {
	const out = { ...EMPTY_COSMETICS };
	const bias = RANK_META[rank].accessoryBias;
	for (const slot of [
		"aura",
		"markings",
		"trail"
	]) {
		const pool = COSMETICS.filter((c) => c.slot === slot && c.mesh !== "none" && allowedCosmetic(c, position, rank));
		if (pool.length === 0) continue;
		if (chance(rand, slot === "aura" ? bias : slot === "markings" ? .55 : bias * .6)) out[slot] = pick(rand, pool).id;
	}
	if (rank === "sovereign" && (position === "wraith" || position === "shade")) out.aura = "aura-sovereign";
	return out;
}
function rollStats(rand, position, rank) {
	const floor = 8 + rankIndex(rank) * 6;
	const spread = 10 + rankIndex(rank) * 2;
	const stats = {
		str: Math.round(floor + range(rand, 0, spread)),
		agi: Math.round(floor + range(rand, 0, spread)),
		vit: Math.round(floor + range(rand, 0, spread)),
		intel: Math.round(floor + range(rand, 0, spread)),
		sense: Math.round(floor + range(rand, 0, spread)),
		luck: Math.round(floor + range(rand, 0, spread))
	};
	for (const k of {
		breaker: ["str", "agi"],
		lance: ["str", "sense"],
		lumen: ["intel", "sense"],
		shade: ["agi", "sense"],
		weaver: ["intel", "sense"],
		aegis: ["vit", "str"],
		wraith: ["intel", "agi"]
	}[position]) stats[k] += 8 + rankIndex(rank);
	return stats;
}
function rollBuild(rand, position) {
	const stance = position === "aegis" ? "wide" : position === "shade" || position === "wraith" ? "closed" : pick(rand, [
		"closed",
		"open",
		"wide"
	]);
	return {
		height: range(rand, .9, 1.12),
		thickness: range(rand, .88, 1.18),
		shoulder: range(rand, .92, 1.16),
		stance
	};
}
function bannerFor(rand, position, rank) {
	if (position === "lumen" && chance(rand, .45)) return "white-veil";
	if (position === "aegis" && chance(rand, .45)) return "iron-choir";
	if (position === "shade" && chance(rand, .4)) return "night-ledger";
	if (position === "wraith" && chance(rand, .5)) return "hollow-choir";
	if (rankIndex(rank) >= rankIndex("platinum") && chance(rand, .35)) return "spire-court";
	if (chance(rand, .28)) return "unbound";
	return pick(rand, BANNERS);
}
function generateRiftborn(input = {}) {
	const seed = input.seed ?? seedFromBytes();
	const rand = mulberry32(seed);
	const locks = input.locks ?? {};
	const base = input.base ?? null;
	const position = input.force?.position ?? (locks.position && base ? base.position : weighted(rand, POSITION_WEIGHTS).id);
	const rank = input.force?.rank ?? (locks.rank && base ? base.rank : weighted(rand, RANK_WEIGHTS).id);
	const banner = input.force?.banner ?? (locks.banner && base ? base.banner : bannerFor(rand, position, rank));
	const build = locks.build && base ? base.build : rollBuild(rand, position);
	const palette = locks.colors && base ? base.palette : mixPalette(rand, position, rank);
	const loadout = locks.gear && base ? base.loadout : rollLoadout(rand, position, rank);
	const cosmetics = locks.cosmetics && base ? base.cosmetics : rollCosmetics(rand, position, rank);
	const { name, epithet } = rollName(rand, position, rank);
	const origin = rollOrigin(rand, banner);
	const stats = rollStats(rand, position, rank);
	return {
		version: 1,
		id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `rb-${toCode(seed)}-${Date.now().toString(36)}`,
		seed,
		code: `RB-${toCode(seed)}`,
		name,
		epithet,
		position,
		rank,
		banner,
		build,
		palette,
		loadout,
		cosmetics,
		stats,
		origin,
		createdAt: Date.now()
	};
}
function generateSquad(count = 6, input = {}) {
	return Array.from({ length: count }, () => generateRiftborn(input));
}
var CANON = [
	{
		seed: 10559061,
		name: "Ashen Vale",
		epithet: "of the Black Floor",
		position: "wraith",
		rank: "sovereign",
		banner: "unbound",
		origin: "Walked into a Gate alone. Came out with an army that does not blink."
	},
	{
		seed: 1837585,
		name: "Kael Ironhowl",
		epithet: "the Door",
		position: "aegis",
		rank: "gold",
		banner: "iron-choir",
		origin: "Held Floor 14 for nine minutes after the rest of the party wiped."
	},
	{
		seed: 5304602,
		name: "Mira Sol",
		epithet: "White Veil",
		position: "lumen",
		rank: "platinum",
		banner: "white-veil",
		origin: "Her lighthouse orb found the true exit of a lying Trial."
	},
	{
		seed: 1723617,
		name: "Rin Quill",
		epithet: "the Lane",
		position: "lance",
		rank: "silver",
		banner: "ash-compact",
		origin: "Pinned a floor boss through three rooms without moving her feet."
	},
	{
		seed: 5955073,
		name: "Nyx Hollow",
		epithet: "Echo-keeper",
		position: "wraith",
		rank: "void",
		banner: "hollow-choir",
		origin: "Collects Afterimages in glass. One of them still argues."
	},
	{
		seed: 11644389,
		name: "Jae Thorne",
		epithet: "the First Through",
		position: "breaker",
		rank: "gold",
		banner: "ash-compact",
		origin: "Breaks Gates the way other people open doors. Smiles after."
	},
	{
		seed: 860663,
		name: "Sera Drift",
		epithet: "Weather of 12",
		position: "weaver",
		rank: "platinum",
		banner: "spire-court",
		origin: "Rewrote a floor rule mid-Trial. The Spire has not forgiven her."
	},
	{
		seed: 376999,
		name: "Hale Rook",
		epithet: "Unmarked no longer",
		position: "shade",
		rank: "bronze",
		banner: "night-ledger",
		origin: "Drew the map of Floor 6 in someone else's blood, then mailed it."
	}
];
function materializeCanon(spec) {
	return {
		...generateRiftborn({
			seed: spec.seed,
			force: {
				position: spec.position,
				rank: spec.rank,
				banner: spec.banner
			}
		}),
		id: `canon-${spec.seed.toString(16)}`,
		name: spec.name,
		epithet: spec.epithet,
		origin: spec.origin,
		canon: true
	};
}
function starterRoster() {
	return CANON.map(materializeCanon);
}
function withCurrent(roster, currentId) {
	return roster.find((c) => c.id === currentId) ?? roster[0] ?? null;
}
var useForge = create()(persist((set, get) => ({
	version: 1,
	ready: false,
	roster: [],
	currentId: null,
	locks: { ...DEFAULT_LOCKS },
	forcePosition: "any",
	forceRank: "any",
	hydrate: () => {
		const { roster } = get();
		if (roster.length === 0) {
			const starter = starterRoster();
			set({
				roster: starter,
				currentId: starter[0]?.id ?? null,
				ready: true
			});
			return;
		}
		set({
			currentId: get().currentId ?? roster[0]?.id ?? null,
			ready: true
		});
	},
	current: () => withCurrent(get().roster, get().currentId),
	forgeOne: () => {
		const { locks, roster, currentId, forcePosition, forceRank } = get();
		const made = generateRiftborn({
			locks,
			base: withCurrent(roster, currentId),
			force: {
				position: forcePosition === "any" ? void 0 : forcePosition,
				rank: forceRank === "any" ? void 0 : forceRank
			}
		});
		set({
			roster: [made, ...roster],
			currentId: made.id
		});
		return made;
	},
	forgeSquad: () => {
		const { locks, roster, currentId, forcePosition, forceRank } = get();
		const squad = generateSquad(6, {
			locks,
			base: withCurrent(roster, currentId),
			force: {
				position: forcePosition === "any" ? void 0 : forcePosition,
				rank: forceRank === "any" ? void 0 : forceRank
			}
		});
		set({
			roster: [...squad, ...roster],
			currentId: squad[0]?.id ?? currentId
		});
		return squad;
	},
	rerollLayer: (layer) => {
		const { roster, currentId, locks } = get();
		const base = withCurrent(roster, currentId);
		if (!base) return;
		const inverted = {
			position: true,
			rank: true,
			banner: true,
			colors: true,
			gear: true,
			cosmetics: true,
			build: true
		};
		inverted[layer] = false;
		const made = generateRiftborn({
			locks: {
				...inverted,
				...locks,
				[layer]: false
			},
			base,
			force: {
				position: base.position,
				rank: base.rank,
				banner: base.banner
			},
			seed: void 0
		});
		const next = {
			...base,
			...layer === "colors" ? { palette: made.palette } : null,
			...layer === "gear" ? { loadout: made.loadout } : null,
			...layer === "cosmetics" ? { cosmetics: made.cosmetics } : null,
			...layer === "build" ? { build: made.build } : null,
			...layer === "banner" ? {
				banner: made.banner,
				origin: made.origin
			} : null,
			...layer === "position" ? {
				position: made.position,
				loadout: made.loadout,
				cosmetics: made.cosmetics,
				stats: made.stats,
				palette: made.palette
			} : null,
			...layer === "rank" ? {
				rank: made.rank,
				loadout: made.loadout,
				cosmetics: made.cosmetics,
				stats: made.stats,
				palette: made.palette
			} : null
		};
		set({ roster: roster.map((c) => c.id === base.id ? next : c) });
	},
	select: (id) => set({ currentId: id }),
	remove: (id) => {
		const roster = get().roster.filter((c) => c.id !== id);
		set({
			roster,
			currentId: get().currentId === id ? roster[0]?.id ?? null : get().currentId
		});
	},
	setLock: (key, value) => set({ locks: {
		...get().locks,
		[key]: value
	} }),
	setForcePosition: (v) => set({ forcePosition: v }),
	setForceRank: (v) => set({ forceRank: v }),
	equip: (slot, gearId) => {
		const { roster, currentId } = get();
		set({ roster: roster.map((c) => c.id === currentId ? {
			...c,
			loadout: {
				...c.loadout,
				[slot]: gearId
			}
		} : c) });
	},
	equipCosmetic: (slot, id) => {
		const { roster, currentId } = get();
		set({ roster: roster.map((c) => c.id === currentId ? {
			...c,
			cosmetics: {
				...c.cosmetics,
				[slot]: id
			}
		} : c) });
	},
	rename: (id, name) => set({ roster: get().roster.map((c) => c.id === id ? {
		...c,
		name
	} : c) }),
	importRoster: (list) => {
		const cleaned = list.filter((c) => c && c.id && c.name);
		if (cleaned.length === 0) return;
		set({
			roster: [...cleaned, ...get().roster],
			currentId: cleaned[0].id
		});
	}
}), {
	name: "riftborn-forge-v1",
	version: 1,
	partialize: (s) => ({
		version: s.version,
		roster: s.roster,
		currentId: s.currentId,
		locks: s.locks,
		forcePosition: s.forcePosition,
		forceRank: s.forceRank
	})
}));
var NAV = [
	{
		to: "/",
		label: "Forge"
	},
	{
		to: "/roster",
		label: "Roster"
	},
	{
		to: "/gear",
		label: "Gear"
	},
	{
		to: "/codex",
		label: "Codex"
	}
];
function HydrateForge() {
	const hydrate = useForge((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		const persist = useForge.persist;
		const run = () => hydrate();
		if (persist.hasHydrated()) run();
		return persist.onFinishHydration(run);
	}, [hydrate]);
	return null;
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateForge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-baseline gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold tracking-tight text-fg sm:text-xl",
							children: "Riftborn"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-mono text-[10px] uppercase tracking-[0.22em] text-subtle sm:inline",
							children: "Character Forge"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex items-center gap-0.5 sm:gap-1",
						children: NAV.map((item) => {
							const on = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-sm px-2.5 py-2 text-sm font-medium transition-colors sm:px-3", on ? "text-fg" : "text-muted hover:text-fg"),
								children: item.label
							}, item.to);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6",
				children
			})
		]
	});
}
var styles_default = "/assets/styles-Ddk66G-D.css";
var APP_NAME = "Riftborn";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Forge Mixamo-style stick figures for a Solo Leveling × Tower of God roguelike. Generate Riftborn, gear, and cosmetics."
			},
			{
				name: "theme-color",
				content: "#09090b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@500;600;700;800&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$3 = () => import("./routes-CUJju62j.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./codex-CqmU8bQB.mjs");
var Route$2 = createFileRoute("/codex")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./gear-DAY54e6D.mjs");
var Route$1 = createFileRoute("/gear")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./roster-C-sOFII1.mjs");
var Route = createFileRoute("/roster")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	CodexRoute: Route$2.update({
		id: "/codex",
		path: "/codex",
		getParentRoute: () => Route$4
	}),
	GearRoute: Route$1.update({
		id: "/gear",
		path: "/gear",
		getParentRoute: () => Route$4
	}),
	RosterRoute: Route.update({
		id: "/roster",
		path: "/roster",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useForge as n, cn as r, router_exports as t };
