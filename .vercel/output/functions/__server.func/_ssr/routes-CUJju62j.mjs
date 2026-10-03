import { i as __toESM } from "../_runtime.mjs";
import { _ as cosmeticById, f as RANKS, i as COSMETIC_SLOTS, l as POSITIONS, m as SLOTS, n as BANNER_META, p as RANK_META, u as POSITION_META, v as gearById } from "./catalog-B1Ee27tO.mjs";
import { s as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as useForge, r as cn } from "./router-DNtYtNmG.mjs";
import { t as Badge } from "./badge-CgOc_H_u.mjs";
import { t as Button } from "./button--LuhXA2b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUJju62j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioClient({ character }) {
	const [Comp, setComp] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./studio-DnryLmLO.mjs").then((mod) => {
			if (live) setComp(() => mod.Studio);
		});
		return () => {
			live = false;
		};
	}, []);
	if (!Comp) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full w-full bg-bg",
		"aria-hidden": true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { character });
}
var LOCK_LABEL = {
	position: "Position",
	rank: "Rank",
	banner: "Banner",
	colors: "Colors",
	gear: "Gear",
	cosmetics: "Cosmetics",
	build: "Build"
};
var STAT_LABEL = {
	str: "STR",
	agi: "AGI",
	vit: "VIT",
	intel: "INT",
	sense: "SNS",
	luck: "LCK"
};
function Inspector({ character, locks, onLock, onReroll, onRemove, onRename }) {
	const pos = POSITION_META[character.position];
	const rank = RANK_META[character.rank];
	const banner = BANNER_META[character.banner];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: character.name,
					onChange: (e) => onRename(e.target.value),
					className: "w-full bg-transparent font-display text-2xl font-semibold tracking-tight text-fg outline-none",
					"aria-label": "Character name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: character.epithet
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
					children: character.code
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "accent",
						children: rank.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: pos.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: banner.name }),
					character.canon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "fg",
						children: "Canon"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: character.origin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-subtle",
				children: pos.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
				children: "Ledger stats"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: Object.keys(STAT_LABEL).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-line bg-elevated px-2.5 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.14em] text-subtle",
						children: STAT_LABEL[k]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-lg tabular-nums text-fg",
						children: character.stats[k]
					})]
				}, k))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
				children: "Loadout"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-1.5",
				children: [SLOTS.map((slot) => {
					const item = gearById(character.loadout[slot]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-3 border-b border-line/70 py-1.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capitalize text-subtle",
							children: slot.replace("Hand", " hand")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-fg",
							children: item?.name ?? "—"
						})]
					}, slot);
				}), COSMETIC_SLOTS.map((slot) => {
					const item = cosmeticById(character.cosmetics[slot]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-3 border-b border-line/70 py-1.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capitalize text-subtle",
							children: slot
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-fg",
							children: item?.name ?? "—"
						})]
					}, slot);
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
					children: "Locks — freeze a layer, then forge"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: Object.keys(LOCK_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onLock(key, !locks[key]),
						className: cn("rounded-sm border px-2.5 py-1.5 text-xs transition-colors", locks[key] ? "border-accent/40 bg-accent/10 text-accent" : "border-line text-muted hover:text-fg"),
						children: LOCK_LABEL[key]
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: [
						"colors",
						"gear",
						"cosmetics",
						"build"
					].map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => onReroll(layer),
						children: ["Reroll ", LOCK_LABEL[layer].toLowerCase()]
					}, layer))
				})
			] }),
			!character.canon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: onRemove,
				className: "self-start text-danger",
				children: "Remove from roster"
			}) : null
		]
	});
}
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
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
			if (e.key === "g" || e.key === "G" || e.code === "Space") {
				e.preventDefault();
				forgeOne();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [forgeOne]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "flex min-h-[420px] flex-1 rounded-xl border border-line bg-surface lg:min-h-[640px]" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-0 flex-1 flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex min-h-[420px] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-panel lg:min-h-[640px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-subtle",
						children: "Mixamo stick · Ledger live"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: current ? current.name : "Empty floor"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => forgeSquad(),
							children: "Forge six"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							onClick: () => forgeOne(),
							className: "min-w-[9.5rem]",
							children: "Forge"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[360px] flex-1 touch-none sm:min-h-[480px]",
					children: current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioClient, { character: current }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center text-sm text-muted",
						children: "Forge a Riftborn to begin."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end gap-3 border-t border-line px-4 py-3 sm:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-w-[9rem] flex-1 flex-col gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
								children: "Bias position"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: forcePosition,
								onChange: (e) => setForcePosition(e.target.value),
								className: "h-10 rounded-md border border-line bg-elevated px-3 text-sm text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "any",
									children: "Any position"
								}), POSITIONS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p,
									children: POSITION_META[p].name
								}, p))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-w-[9rem] flex-1 flex-col gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
								children: "Bias rank"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: forceRank,
								onChange: (e) => setForceRank(e.target.value),
								className: "h-10 rounded-md border border-line bg-elevated px-3 text-sm text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "any",
									children: "Any rank"
								}), RANKS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r,
									children: RANK_META[r].name
								}, r))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle sm:block",
							children: "G or Space to forge"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "rounded-xl border border-line bg-surface p-5 shadow-panel",
			children: current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, {
				character: current,
				locks,
				onLock: setLock,
				onReroll: rerollLayer,
				onRemove: () => remove(current.id),
				onRename: (name) => rename(current.id, name)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No Riftborn selected."
			})
		})]
	});
}
//#endregion
export { ForgePage as component };
