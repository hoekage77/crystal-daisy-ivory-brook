import { i as __toESM } from "../_runtime.mjs";
import { c as GEAR, g as allowedGear, h as allowedCosmetic, i as COSMETIC_SLOTS, m as SLOTS, r as COSMETICS } from "./catalog-B1Ee27tO.mjs";
import { s as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as useForge, r as cn } from "./router-DNtYtNmG.mjs";
import { t as Badge } from "./badge-CgOc_H_u.mjs";
import { t as Button } from "./button--LuhXA2b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gear-DAY54e6D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GearPage() {
	const ready = useForge((s) => s.ready);
	const roster = useForge((s) => s.roster);
	const currentId = useForge((s) => s.currentId);
	const current = roster.find((c) => c.id === currentId) ?? roster[0] ?? null;
	const equip = useForge((s) => s.equip);
	const equipCosmetic = useForge((s) => s.equipCosmetic);
	const [slot, setSlot] = (0, import_react.useState)("mainHand");
	const isCosmetic = COSMETIC_SLOTS.includes(slot);
	const items = (0, import_react.useMemo)(() => {
		if (!current) return [];
		if (isCosmetic) return COSMETICS.filter((g) => g.slot === slot);
		return GEAR.filter((g) => g.slot === slot);
	}, [
		slot,
		current,
		isCosmetic
	]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "min-h-[40vh] rounded-xl border border-line bg-surface" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-subtle",
					children: "Paper doll"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "Gear & cosmetics"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-2xl text-sm text-muted",
					children: "Equip the current Riftborn. Pieces that this Position or Rank cannot wear stay visible but locked — the silhouette language stays honest."
				}),
				current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-fg",
					children: [
						"Dressing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: current.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [
								" ",
								"· ",
								current.position,
								" · ",
								current.rank
							]
						})
					]
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [SLOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSlot(s),
					className: cn("rounded-sm border px-3 py-2 text-xs capitalize transition-colors", slot === s ? "border-accent/40 bg-accent/10 text-accent" : "border-line text-muted hover:text-fg"),
					children: s.replace("Hand", " hand")
				}, s)), COSMETIC_SLOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSlot(s),
					className: cn("rounded-sm border px-3 py-2 text-xs capitalize transition-colors", slot === s ? "border-accent/40 bg-accent/10 text-accent" : "border-line text-muted hover:text-fg"),
					children: s
				}, s))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => {
					const equipped = current ? isCosmetic ? current.cosmetics[slot] === item.id : current.loadout[slot] === item.id : false;
					const allowed = current ? isCosmetic ? item.mesh === "none" || allowedCosmetic(item, current.position, current.rank) : item.mesh === "none" || allowedGear(item, current.position, current.rank) : false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col gap-3 rounded-lg border p-4", equipped ? "border-accent bg-elevated" : "border-line bg-surface"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-base font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: item.blurb
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: item.rarity })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: equipped ? "accent" : "outline",
							disabled: !current || !allowed,
							onClick: () => {
								if (!current) return;
								if (isCosmetic) equipCosmetic(slot, equipped ? null : item.mesh === "none" ? null : item.id);
								else equip(slot, equipped || item.mesh === "none" ? null : item.id);
							},
							children: !allowed ? "Wrong rank / position" : equipped ? "Equipped" : "Equip"
						})]
					}, item.id);
				})
			})
		]
	});
}
//#endregion
export { GearPage as component };
