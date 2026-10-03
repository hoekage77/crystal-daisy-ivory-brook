import { f as RANKS, l as POSITIONS, n as BANNER_META, p as RANK_META, t as BANNERS, u as POSITION_META } from "./catalog-B1Ee27tO.mjs";
import { s as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/codex-CqmU8bQB.js
var import_jsx_runtime = require_jsx_runtime();
var CODEX = [
	{
		id: "world",
		title: "The Spire",
		kicker: "World",
		body: [
			"Gates open. That much is true in every story like this. In Riftborn they do not open onto scattered dungeons — they stack. Each Gate is a floor. The floors are a tower. The tower is the Spire.",
			"At street level the Spire is a rumor: a black column that is not always there, a pressure change, a smell of cold iron. Riftborn walk into the rumor and come out ranked, rich, missing, or multiplied.",
			"This is Solo Leveling’s Gates welded to Tower of God’s climb. You do not raid a dungeon and go home. You take a floor, or the floor takes you, and the next door is already humming."
		]
	},
	{
		id: "riftborn",
		title: "Riftborn, not hunters",
		kicker: "People",
		body: [
			"We do not call them hunters. A hunter goes out and returns with a hide. These people are remade by the tear. Some were born the night a Gate opened in a hospital. Some walked in unmarked and came out with a Position stamped behind the eyes.",
			"Riftborn. The Ledger — the cold blue interface that only they can see — writes their name, their Position, their Rank, and the things they are not allowed to forget.",
			"Irregulars (Sovereign rank) are not on the ladder. The Spire did not invite them. They wrote a page anyway. Treat that the way Tower of God treats the people who enter the tower uninvited."
		]
	},
	{
		id: "positions",
		title: "Seven Positions",
		kicker: "Classes",
		body: [
			"Borrowed from Tower of God party roles, then bent toward Solo Leveling combat jobs. A party that wants to clear a floor usually wants one of each — except Wraiths, who arrive uninvited.",
			"Breaker — melee pressure. Dual blades, gauntlets, needles. First through the tear.",
			"Lance — long reach. Spears, pikes, javelins. Owns the lane.",
			"Lumen — sight and sustain. Lantern-orbs, staffs, the party’s map.",
			"Shade — recon and delete. Daggers, silence, Afterimages of footsteps.",
			"Weaver — Drift control. Floor weather, sigils, rule changes.",
			"Aegis — the wall. Shield, plate, a stance that ends arguments.",
			"Wraith — forbidden path. Commands Afterimages. Rare. The Ledger uses different ink."
		]
	},
	{
		id: "ranks",
		title: "The ladder",
		kicker: "Rank",
		body: [
			"Ember → Iron → Bronze → Silver → Gold → Platinum → Void → Sovereign.",
			"This is E through S, then the two ranks Solo Leveling keeps in the dark: national-level monsters, and monarchs. Ember is a survivor with tape on the joints. Void is someone the Spire has started to notice. Sovereign is not a promotion. It is a crime the tower has not figured out how to charge.",
			"Rank is readable on the stick figure. Higher rank means denser gear, brighter joint-glow, and an aura that does not ask permission. That is the whole point of a shared mannequin language: you should know a Platinum Aegis from an Ember Shade at silhouette distance."
		]
	},
	{
		id: "stickman",
		title: "Why Mixamo stickmen",
		kicker: "Art doctrine",
		body: [
			"Every Riftborn is the same skeleton. Spherical joints, cylindrical bones, Mixamo names (mixamorigHips, mixamorigSpine2, mixamorigRightHand…). That is the Mixamo stick figure — the mannequin used to preview motion capture — turned into a production character.",
			"Identity lives in wear, not anatomy. Palette, thickness, stance, helmet, cloak, weapon, aura. A Shade and an Aegis share a spine. They do not share a silhouette.",
			"This is also a pipeline decision. Mixamo animations (idle, walk, slash, cast) retarget onto this bone map later. When we add moves, we are not redrawing frames per hero. We are hanging clips on one rig and letting gear ride along."
		]
	},
	{
		id: "dna",
		title: "DNA & the Forge",
		kicker: "Generator",
		body: [
			"A Riftborn is a seed. The same seed always rebuilds the same body, gear, and colors. The code on the card (RB-00a11e55) is that seed in hex.",
			"Click Forge and the Ledger rolls Position, Rank, Banner, build, palette, loadout, cosmetics, name, and a one-line origin. Locks freeze a layer so you can hunt a Void Shade without rerolling the cloak you liked.",
			"Canon eight are authored seeds — the starter roster. They prove the system can hold a protagonist, a tank, a light-bearer, a spear, a necromancer, a dual-blade, a mage, and a scout without leaving the stick."
		]
	},
	{
		id: "gear",
		title: "Slots, gear, cosmetics",
		kicker: "Paper doll",
		body: [
			"Nine gear slots: head, face, torso, back, arms, legs, waist, main hand, off hand. Three cosmetic slots: aura, markings, trail.",
			"Gear is not stats with a picture. Gear is silhouette. A Choir plate changes the chest. Afterimage vans change the back. A Needle changes the reach. If a piece does not read at roster-card size, it does not ship.",
			"Cosmetics are the Solo Leveling ‘system glow’ and the Tower of God shinsoo-weather. Ember has air. Void seeps. Sovereigns carry a quiet inverted halo."
		]
	},
	{
		id: "banners",
		title: "Banners",
		kicker: "Factions",
		body: ["Guilds, renamed. Unbound (no contract). Ash Compact (small, lethal). White Veil (Lumens and the people who undo wipes). Iron Choir (walls). Night Ledger (Shades and paperwork that never happened). Spire Court (old money of the tower). Hollow Choir (Afterimage collectors).", "Banners tint a sash and a dossier line. They will matter more when floors have politics. For the Forge they keep a Shade from the Night Ledger from looking like a Court Lance in the same cloak."]
	},
	{
		id: "pipeline",
		title: "Sprite pipeline (later)",
		kicker: "Phase 2",
		body: [
			"Right now characters are live 3D paper-dolls. Unlimited, instant, Mixamo-ready. That is the correct generator for a roster you fill by clicking a button.",
			"When a look is frozen for combat, we run a capture + clean pipeline in the spirit of sprite-gen (aldegad/sprite-gen): turnaround stills from the rig, chroma or alpha cleanup, a backbone lattice so every animation cell shares one grid, then idle / walk / attack rows.",
			"sprite-gen’s useful ideas we will steal: component-row sheets (one state per row), real alpha instead of magenta fringes, a manifest of frame rectangles rather than assumed grids, and recolor maps so a palette swap does not mean a new draw.",
			"Grok Imagine video-to-loop is the backup for FX (aura boil, slash arcs, Gate tears) — not for the body. Bodies stay on the rig so the Shade you forged still has those exact horns in the walk cycle."
		]
	},
	{
		id: "later",
		title: "Moves, SFX, VFX",
		kicker: "Phase 3",
		body: [
			"Combat will feel like a manhwa panel that learned to loop. Mixamo locomotion first (idle, walk, run, hit). Then authored attacks per Position: Breaker cross-cut, Lance throw, Lumen lantern pulse, Shade blink, Weaver sigil, Aegis brace, Wraith echo-step.",
			"SFX: Ledger UI ticks (that Solo Leveling system chirp), Gate thunder, steel, a low choir for Sovereigns. VFX: Drift particles parented to joints, slash meshes that are not baked into the body sheet, Afterimage after-meshes that die in 400ms.",
			"Roguelike loop — Gates, floors, loadouts that you keep or break — sits on top of this roster. We do not start there until a party of six stick figures can stand in a ring and be told apart."
		]
	},
	{
		id: "lexicon",
		title: "Lexicon",
		kicker: "Words",
		body: ["Hunter → Riftborn. Gate / dungeon → Gate / Floor / Trial. Rank E–S → Ember–Platinum, then Void, then Sovereign. Mana / shinsoo → Drift. Shadows → Afterimages. System → the Ledger. Guild → Banner. Monarch / Irregular → Sovereign. Light Bearer lighthouse → Lumen orb. Spear Bearer → Lance. Fisherman → Breaker. Wave Controller → Weaver.", "If a word still sounds like it is wearing someone else’s jacket, we change it. The stickmen will not mind."]
	}
];
function CodexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.2em] text-subtle",
				children: "Ledger"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-3 flex flex-col gap-1",
				children: CODEX.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${s.id}`,
					className: "rounded-sm px-2 py-1.5 text-sm text-muted hover:text-fg",
					children: s.title
				}, s.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-w-3xl flex-col gap-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-subtle",
						children: "Design bible"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight",
						children: "How Riftborn are made"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-muted",
						children: "Solo Leveling’s Gates. Tower of God’s climb. Mixamo’s stick figure as the only body. This is the document the Forge obeys — change the words here when the world should change."
					})
				] }),
				CODEX.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: section.id,
					className: "scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.18em] text-accent",
							children: section.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-semibold tracking-tight",
							children: section.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-col gap-3",
							children: section.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] leading-relaxed text-muted",
								children: p
							}, p))
						})
					]
				}, section.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Positions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-3",
						children: POSITIONS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-fg",
							children: POSITION_META[id].name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: POSITION_META[id].analog
						})] }, id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Ranks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-3",
						children: RANKS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium text-fg",
							children: [
								RANK_META[id].roman,
								" · ",
								RANK_META[id].name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: RANK_META[id].blurb
						})] }, id))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Banners"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: BANNERS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-fg",
							children: BANNER_META[id].name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: BANNER_META[id].blurb
						})]
					}, id))
				})] })
			]
		})]
	});
}
//#endregion
export { CodexPage as component };
