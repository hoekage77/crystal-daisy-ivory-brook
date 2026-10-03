//#region node_modules/.nitro/vite/services/ssr/assets/catalog-B1Ee27tO.js
var POSITIONS = [
	"breaker",
	"lance",
	"lumen",
	"shade",
	"weaver",
	"aegis",
	"wraith"
];
var RANKS = [
	"ember",
	"iron",
	"bronze",
	"silver",
	"gold",
	"platinum",
	"void",
	"sovereign"
];
var BANNERS = [
	"unbound",
	"ash-compact",
	"white-veil",
	"iron-choir",
	"night-ledger",
	"spire-court",
	"hollow-choir"
];
var SLOTS = [
	"head",
	"face",
	"torso",
	"back",
	"arms",
	"legs",
	"waist",
	"mainHand",
	"offHand"
];
var COSMETIC_SLOTS = [
	"aura",
	"markings",
	"trail"
];
var EMPTY_LOADOUT = {
	head: null,
	face: null,
	torso: null,
	back: null,
	arms: null,
	legs: null,
	waist: null,
	mainHand: null,
	offHand: null
};
var EMPTY_COSMETICS = {
	aura: null,
	markings: null,
	trail: null
};
var DEFAULT_LOCKS = {
	position: false,
	rank: false,
	banner: false,
	colors: false,
	gear: false,
	cosmetics: false,
	build: false
};
var POSITION_META = {
	breaker: {
		name: "Breaker",
		analog: "Fisherman / Fighter",
		role: "Melee pressure",
		blurb: "Closes the Gate. Dual blades, gauntlets, or a short needle — first through the tear, last to leave the floor.",
		weaponHint: "Blades, gauntlets, needles",
		stats: [
			"str",
			"agi",
			"vit"
		]
	},
	lance: {
		name: "Lance",
		analog: "Spear Bearer",
		role: "Long reach",
		blurb: "Owns the lane. Spears, javelins, and rail-thin pikes that pin a Trial boss before the Breaker arrives.",
		weaponHint: "Spears, pikes, javelins",
		stats: [
			"str",
			"sense",
			"agi"
		]
	},
	lumen: {
		name: "Lumen",
		analog: "Light Bearer / Healer",
		role: "Sight & sustain",
		blurb: "Carries a lantern-orb — a personal lighthouse. Reveals the floor, knits Drift wounds, and marks the true exit.",
		weaponHint: "Staff, lantern, tome",
		stats: [
			"intel",
			"sense",
			"vit"
		]
	},
	shade: {
		name: "Shade",
		analog: "Scout / Assassin",
		role: "Recon & delete",
		blurb: "Walks the Veil. Daggers, silence, and Afterimages. The floor map is drawn in their bloodless footsteps.",
		weaponHint: "Daggers, short swords, wire",
		stats: [
			"agi",
			"sense",
			"luck"
		]
	},
	weaver: {
		name: "Weaver",
		analog: "Wave Controller / Mage",
		role: "Drift control",
		blurb: "Bends the Gate’s weather. Orbs, sigils, and floor-wide pressure. When a Weaver panics, the Trial changes rules.",
		weaponHint: "Staff, grimmoire, focus",
		stats: [
			"intel",
			"sense",
			"luck"
		]
	},
	aegis: {
		name: "Aegis",
		analog: "Tank / Guardian",
		role: "Wall",
		blurb: "The door that does not open. Shield, plate, and a stance that tells a Gate boss it picked the wrong party.",
		weaponHint: "Sword & shield, tower plate",
		stats: [
			"vit",
			"str",
			"sense"
		]
	},
	wraith: {
		name: "Wraith",
		analog: "Shadow / Irregular",
		role: "Forbidden path",
		blurb: "Rare. Commands Afterimages — copies of the dead and the almost-dead. The Ledger writes their name in a different ink.",
		weaponHint: "Scythe, shadow blades, bare hands",
		stats: [
			"intel",
			"agi",
			"luck"
		]
	}
};
var RANK_META = {
	ember: {
		name: "Ember",
		roman: "VIII",
		blurb: "Unmarked. Survived one Gate. Gear is scavenged tape and hope.",
		glow: 0,
		accessoryBias: .15,
		metal: "#5c5348"
	},
	iron: {
		name: "Iron",
		roman: "VII",
		blurb: "Registered with a Banner. Can hold a floor without dying on purpose.",
		glow: .02,
		accessoryBias: .28,
		metal: "#6d737a"
	},
	bronze: {
		name: "Bronze",
		roman: "VI",
		blurb: "Trusted on mid floors. Armor starts to fit like it was made for them.",
		glow: .04,
		accessoryBias: .4,
		metal: "#8a6a49"
	},
	silver: {
		name: "Silver",
		roman: "V",
		blurb: "Named in reports. Drift gathers at the joints when they breathe.",
		glow: .08,
		accessoryBias: .55,
		metal: "#9aa3ad"
	},
	gold: {
		name: "Gold",
		roman: "IV",
		blurb: "Floor captains. A Gate opening with their name on it is a news event.",
		glow: .12,
		accessoryBias: .7,
		metal: "#c4a36a"
	},
	platinum: {
		name: "Platinum",
		roman: "III",
		blurb: "National-level. Banners bid for their contracts. Aura is visible in daylight.",
		glow: .18,
		accessoryBias: .82,
		metal: "#d5e2ea"
	},
	void: {
		name: "Void",
		roman: "II",
		blurb: "The Spire notices them. Afterimages cling. Most records of them are redacted.",
		glow: .28,
		accessoryBias: .92,
		metal: "#2a3038"
	},
	sovereign: {
		name: "Sovereign",
		roman: "I",
		blurb: "Irregular. Not on the ladder. The Ledger did not invite them — they wrote a page.",
		glow: .4,
		accessoryBias: 1,
		metal: "#0e1014"
	}
};
var BANNER_META = {
	unbound: {
		name: "Unbound",
		blurb: "No Banner. Walks Gates for coin, spite, or a missing name.",
		tint: "#8b949e"
	},
	"ash-compact": {
		name: "Ash Compact",
		blurb: "Small, lethal, loyal. Prefers quiet contracts and quieter graves.",
		tint: "#9a8f82"
	},
	"white-veil": {
		name: "White Veil",
		blurb: "Healers, Lumens, and the people who bring you back from a wipe.",
		tint: "#c9d4dc"
	},
	"iron-choir": {
		name: "Iron Choir",
		blurb: "Walls with voices. Aegis doctrine: nobody behind you dies.",
		tint: "#8d959c"
	},
	"night-ledger": {
		name: "Night Ledger",
		blurb: "Shades and the paperwork that never happened. Information is a blade.",
		tint: "#6d7a88"
	},
	"spire-court": {
		name: "Spire Court",
		blurb: "Old money of the tower. Rankers who treat floors like property.",
		tint: "#a9b7c2"
	},
	"hollow-choir": {
		name: "Hollow Choir",
		blurb: "Wraith-adjacent. They collect Afterimages the way others collect medals.",
		tint: "#7a8894"
	}
};
var POSITION_PALETTES = {
	breaker: {
		joint: "#1a1b1e",
		limb: "#1c1d21",
		accent: "#b08968",
		cloth: "#3a332e",
		aura: "#c4a07a",
		eye: "#e8c9a4"
	},
	lance: {
		joint: "#181a1e",
		limb: "#1a1d22",
		accent: "#c5d0d8",
		cloth: "#2c333a",
		aura: "#d7e4ec",
		eye: "#e7eef2"
	},
	lumen: {
		joint: "#cfc8be",
		limb: "#d8d2c8",
		accent: "#d7e8f2",
		cloth: "#ece6dc",
		aura: "#f2f7fb",
		eye: "#f7fbff"
	},
	shade: {
		joint: "#121316",
		limb: "#141518",
		accent: "#6d7d90",
		cloth: "#1c2228",
		aura: "#4a5c70",
		eye: "#8eb8c9"
	},
	weaver: {
		joint: "#16181e",
		limb: "#181a22",
		accent: "#8aa3b8",
		cloth: "#242a36",
		aura: "#9bb4c8",
		eye: "#c5d8e6"
	},
	aegis: {
		joint: "#1c1e22",
		limb: "#222428",
		accent: "#9aa3ad",
		cloth: "#3a3e44",
		aura: "#c0c8d0",
		eye: "#dfe6ec"
	},
	wraith: {
		joint: "#0c0d10",
		limb: "#101114",
		accent: "#8eb8c9",
		cloth: "#16181c",
		aura: "#9fd0e4",
		eye: "#e8f6ff"
	}
};
var GEAR = [
	{
		id: "head-none",
		name: "Bare skull",
		slot: "head",
		mesh: "none",
		rarity: "common",
		tags: ["plain"],
		blurb: "The Mixamo head. No hat, no lies."
	},
	{
		id: "helm-iron",
		name: "Gate helm",
		slot: "head",
		mesh: "helm",
		rarity: "common",
		tags: ["armor"],
		positions: [
			"aegis",
			"breaker",
			"lance"
		],
		blurb: "A closed bowl. Keeps teeth in."
	},
	{
		id: "helm-visor",
		name: "Ash visor",
		slot: "head",
		mesh: "visor",
		rarity: "uncommon",
		tags: ["armor", "tech"],
		minRank: "iron",
		blurb: "A slit of dark glass. Rankers wear it to hide blinks."
	},
	{
		id: "hood-veil",
		name: "Veil hood",
		slot: "head",
		mesh: "hood",
		rarity: "common",
		tags: ["cloth"],
		positions: [
			"shade",
			"weaver",
			"lumen",
			"wraith"
		],
		blurb: "Cuts the Gate-glare. Makes you a silhouette."
	},
	{
		id: "circlet-drift",
		name: "Drift circlet",
		slot: "head",
		mesh: "circlet",
		rarity: "rare",
		tags: ["mage"],
		positions: ["weaver", "lumen"],
		minRank: "silver",
		blurb: "A thin ring that hums when a floor rule changes."
	},
	{
		id: "horns-void",
		name: "Void horns",
		slot: "head",
		mesh: "horns",
		rarity: "epic",
		tags: ["cursed"],
		positions: ["wraith", "shade"],
		minRank: "void",
		blurb: "Not grown. Parked. They drink leftover Afterimages."
	},
	{
		id: "crown-sovereign",
		name: "Black floor crown",
		slot: "head",
		mesh: "crown",
		rarity: "mythic",
		tags: ["unique"],
		positions: ["wraith", "shade"],
		minRank: "void",
		blurb: "A broken halo of plates. The Spire pretends not to see it."
	},
	{
		id: "mask-blank",
		name: "Blank mask",
		slot: "face",
		mesh: "mask",
		rarity: "uncommon",
		tags: ["stealth"],
		positions: ["shade", "wraith"],
		blurb: "No mouth. Conversations end faster."
	},
	{
		id: "mask-half",
		name: "Half plate",
		slot: "face",
		mesh: "halfmask",
		rarity: "common",
		tags: ["armor"],
		blurb: "Covers the jaw. Fashion of Bronze floors."
	},
	{
		id: "torso-wraps",
		name: "Field wraps",
		slot: "torso",
		mesh: "wraps",
		rarity: "common",
		tags: ["cloth"],
		blurb: "Tape, cloth, and a prayer. Ember standard issue."
	},
	{
		id: "torso-harness",
		name: "Rift harness",
		slot: "torso",
		mesh: "harness",
		rarity: "common",
		tags: ["kit"],
		blurb: "Straps for knives, vials, and the thing you do not name."
	},
	{
		id: "torso-vest",
		name: "Ash vest",
		slot: "torso",
		mesh: "vest",
		rarity: "uncommon",
		tags: ["armor"],
		blurb: "Light plates over the sternum. Still a stick, now a rude one."
	},
	{
		id: "torso-plate",
		name: "Choir plate",
		slot: "torso",
		mesh: "plate",
		rarity: "rare",
		tags: ["armor"],
		positions: [
			"aegis",
			"breaker",
			"lance"
		],
		minRank: "bronze",
		blurb: "A ribcage of steel. Makes the stick figure a fortress."
	},
	{
		id: "torso-robe",
		name: "Ledger robe",
		slot: "torso",
		mesh: "robe",
		rarity: "uncommon",
		tags: ["cloth", "mage"],
		positions: [
			"weaver",
			"lumen",
			"wraith"
		],
		blurb: "Open front, long drape. Drift beads along the hem."
	},
	{
		id: "back-cloak",
		name: "Night cloak",
		slot: "back",
		mesh: "cloak",
		rarity: "uncommon",
		tags: ["cloth"],
		blurb: "The silhouette people remember. Hides a second weapon."
	},
	{
		id: "back-cape",
		name: "Short cape",
		slot: "back",
		mesh: "cape",
		rarity: "common",
		tags: ["cloth"],
		blurb: "Banner colors at the shoulders. Parade-friendly."
	},
	{
		id: "back-tattered",
		name: "Tattered veil",
		slot: "back",
		mesh: "tattered",
		rarity: "rare",
		tags: ["cursed"],
		positions: [
			"wraith",
			"shade",
			"weaver"
		],
		minRank: "silver",
		blurb: "It used to be a cloak. The Gate chewed it into flags."
	},
	{
		id: "back-wings",
		name: "Afterimage vans",
		slot: "back",
		mesh: "wings",
		rarity: "mythic",
		tags: ["echo"],
		positions: ["wraith"],
		minRank: "void",
		blurb: "Not wings. Six frozen copies of a shoulder-blade."
	},
	{
		id: "back-quiver",
		name: "Javelin quiver",
		slot: "back",
		mesh: "quiver",
		rarity: "common",
		tags: ["kit"],
		positions: ["lance"],
		blurb: "Three extra answers for a distant problem."
	},
	{
		id: "back-lantern",
		name: "Lighthouse orb",
		slot: "back",
		mesh: "lantern",
		rarity: "rare",
		tags: ["light"],
		positions: ["lumen"],
		minRank: "iron",
		blurb: "A personal floor-map. Humming, loyal, slightly judgmental."
	},
	{
		id: "arms-bracers",
		name: "Gate bracers",
		slot: "arms",
		mesh: "bracers",
		rarity: "common",
		tags: ["armor"],
		blurb: "Forearm plates. Stop a slash that would have been embarrassing."
	},
	{
		id: "arms-pauldrons",
		name: "Choir pauldrons",
		slot: "arms",
		mesh: "pauldrons",
		rarity: "uncommon",
		tags: ["armor"],
		positions: [
			"aegis",
			"breaker",
			"lance"
		],
		minRank: "iron",
		blurb: "Shoulder houses. Announce you before you speak."
	},
	{
		id: "arms-wraps",
		name: "Hand wraps",
		slot: "arms",
		mesh: "armwraps",
		rarity: "common",
		tags: ["cloth"],
		positions: [
			"breaker",
			"shade",
			"wraith"
		],
		blurb: "Black tape to the elbow. Traditional for people who punch Gates."
	},
	{
		id: "legs-greaves",
		name: "Iron greaves",
		slot: "legs",
		mesh: "greaves",
		rarity: "common",
		tags: ["armor"],
		blurb: "Shin plates. The difference between a trip and a kneecap."
	},
	{
		id: "legs-boots",
		name: "Floor boots",
		slot: "legs",
		mesh: "boots",
		rarity: "common",
		tags: ["kit"],
		blurb: "Heavy soles. Spire stone is never clean."
	},
	{
		id: "waist-belt",
		name: "Utility belt",
		slot: "waist",
		mesh: "belt",
		rarity: "common",
		tags: ["kit"],
		blurb: "Pouches, a hook, a knife you swear you will not need."
	},
	{
		id: "waist-sash",
		name: "Rank sash",
		slot: "waist",
		mesh: "sash",
		rarity: "uncommon",
		tags: ["cloth"],
		minRank: "bronze",
		blurb: "Color of the last floor you cleared. Humblebrag as fabric."
	},
	{
		id: "wpn-dual",
		name: "Twin short blades",
		slot: "mainHand",
		mesh: "dual",
		rarity: "common",
		tags: ["weapon"],
		positions: ["breaker", "shade"],
		blurb: "A conversation in two parts."
	},
	{
		id: "wpn-sword",
		name: "Gate longsword",
		slot: "mainHand",
		mesh: "sword",
		rarity: "common",
		tags: ["weapon"],
		positions: [
			"breaker",
			"aegis",
			"lance"
		],
		blurb: "Honest steel. Works on most things that bleed Drift."
	},
	{
		id: "wpn-great",
		name: "Floor cleaver",
		slot: "mainHand",
		mesh: "greatsword",
		rarity: "uncommon",
		tags: ["weapon"],
		positions: ["breaker", "aegis"],
		minRank: "iron",
		blurb: "Too big. That is the point."
	},
	{
		id: "wpn-daggers",
		name: "Veil daggers",
		slot: "mainHand",
		mesh: "daggers",
		rarity: "common",
		tags: ["weapon"],
		positions: ["shade", "wraith"],
		blurb: "Meant to be forgotten in a rib."
	},
	{
		id: "wpn-spear",
		name: "Spire spear",
		slot: "mainHand",
		mesh: "spear",
		rarity: "common",
		tags: ["weapon"],
		positions: ["lance"],
		blurb: "A straight answer. Reach is a personality."
	},
	{
		id: "wpn-needle",
		name: "Needle",
		slot: "mainHand",
		mesh: "needle",
		rarity: "rare",
		tags: ["weapon"],
		positions: [
			"breaker",
			"lance",
			"shade"
		],
		minRank: "silver",
		blurb: "Tower-thin. Sounds like a tuning fork when it hits true."
	},
	{
		id: "wpn-staff",
		name: "Drift staff",
		slot: "mainHand",
		mesh: "staff",
		rarity: "common",
		tags: ["weapon", "mage"],
		positions: ["weaver", "lumen"],
		blurb: "A stick for people who already are one."
	},
	{
		id: "wpn-tome",
		name: "Pocket ledger",
		slot: "mainHand",
		mesh: "tome",
		rarity: "uncommon",
		tags: ["weapon", "mage"],
		positions: ["weaver", "lumen"],
		blurb: "Rules of the current floor, annotated in a hurry."
	},
	{
		id: "wpn-scythe",
		name: "Echo scythe",
		slot: "mainHand",
		mesh: "scythe",
		rarity: "epic",
		tags: ["weapon", "echo"],
		positions: ["wraith"],
		minRank: "gold",
		blurb: "Harvests Afterimages. Awkward in elevators."
	},
	{
		id: "wpn-gauntlets",
		name: "Breaker gauntlets",
		slot: "mainHand",
		mesh: "gauntlets",
		rarity: "uncommon",
		tags: ["weapon"],
		positions: ["breaker"],
		blurb: "The stick grows fists. Doors notice."
	},
	{
		id: "wpn-bow",
		name: "Folded bow",
		slot: "mainHand",
		mesh: "bow",
		rarity: "uncommon",
		tags: ["weapon"],
		positions: ["lance", "shade"],
		blurb: "Quiet, curved, and very far from polite."
	},
	{
		id: "off-shield",
		name: "Choir shield",
		slot: "offHand",
		mesh: "shield",
		rarity: "common",
		tags: ["weapon", "armor"],
		positions: ["aegis"],
		blurb: "A door you carry. The Iron Choir’s punctuation."
	},
	{
		id: "off-lantern",
		name: "Hand lantern",
		slot: "offHand",
		mesh: "handlantern",
		rarity: "uncommon",
		tags: ["light"],
		positions: ["lumen"],
		blurb: "Smaller lighthouse. For rooms the orb will not enter."
	},
	{
		id: "off-focus",
		name: "Drift focus",
		slot: "offHand",
		mesh: "orb",
		rarity: "uncommon",
		tags: ["mage"],
		positions: [
			"weaver",
			"lumen",
			"wraith"
		],
		blurb: "A cold sphere. It likes being looked at."
	}
];
var COSMETICS = [
	{
		id: "aura-none",
		name: "No aura",
		slot: "aura",
		mesh: "none",
		rarity: "common",
		tags: ["plain"],
		blurb: "What Embers have. Air."
	},
	{
		id: "aura-dust",
		name: "Ash motes",
		slot: "aura",
		mesh: "dust",
		rarity: "uncommon",
		tags: ["fx"],
		minRank: "iron",
		blurb: "Fine grit that never settles. Floor-scent of a closed Gate."
	},
	{
		id: "aura-ice",
		name: "Ledger frost",
		slot: "aura",
		mesh: "ice",
		rarity: "rare",
		tags: ["fx"],
		positions: [
			"lumen",
			"weaver",
			"lance"
		],
		minRank: "silver",
		blurb: "Breath shows even in a hot Trial."
	},
	{
		id: "aura-shadow",
		name: "Veil seep",
		slot: "aura",
		mesh: "shadow",
		rarity: "rare",
		tags: ["fx", "echo"],
		positions: ["shade", "wraith"],
		minRank: "gold",
		blurb: "The silhouette is larger than the body. On purpose."
	},
	{
		id: "aura-sovereign",
		name: "Black floor corona",
		slot: "aura",
		mesh: "corona",
		rarity: "mythic",
		tags: ["fx", "unique"],
		positions: ["wraith", "shade"],
		minRank: "void",
		blurb: "A quiet ring of inverted light. The System, if it had taste."
	},
	{
		id: "mark-none",
		name: "Clean joints",
		slot: "markings",
		mesh: "none",
		rarity: "common",
		tags: ["plain"],
		blurb: "Factory Mixamo. No stories."
	},
	{
		id: "mark-bands",
		name: "Rank bands",
		slot: "markings",
		mesh: "bands",
		rarity: "common",
		tags: ["ink"],
		blurb: "Painted rings on biceps and thighs. Banner colors."
	},
	{
		id: "mark-seams",
		name: "Seam glow",
		slot: "markings",
		mesh: "seams",
		rarity: "rare",
		tags: ["ink"],
		minRank: "silver",
		blurb: "Joints leak a thread of accent light. High-rank tell."
	},
	{
		id: "trail-none",
		name: "No trail",
		slot: "trail",
		mesh: "none",
		rarity: "common",
		tags: ["plain"],
		blurb: "Feet that do not editorialize."
	},
	{
		id: "trail-ash",
		name: "Ash prints",
		slot: "trail",
		mesh: "ash",
		rarity: "uncommon",
		tags: ["fx"],
		minRank: "bronze",
		blurb: "Steps leave a second of soot. Fades before evidence."
	},
	{
		id: "trail-echo",
		name: "Afterimage stutter",
		slot: "trail",
		mesh: "echo",
		rarity: "epic",
		tags: ["echo"],
		positions: ["wraith", "shade"],
		minRank: "platinum",
		blurb: "A delayed copy of the last pose. Creepy on purpose."
	}
];
function gearById(id) {
	if (!id) return void 0;
	return GEAR.find((g) => g.id === id);
}
function cosmeticById(id) {
	if (!id) return void 0;
	return COSMETICS.find((c) => c.id === id);
}
function rankIndex(rank) {
	return RANKS.indexOf(rank);
}
function allowedGear(item, position, rank) {
	if (item.positions && !item.positions.includes(position)) return false;
	if (item.minRank && rankIndex(rank) < rankIndex(item.minRank)) return false;
	return true;
}
function allowedCosmetic(item, position, rank) {
	if (item.positions && !item.positions.includes(position)) return false;
	if (item.minRank && rankIndex(rank) < rankIndex(item.minRank)) return false;
	return true;
}
//#endregion
export { cosmeticById as _, DEFAULT_LOCKS as a, GEAR as c, POSITION_PALETTES as d, RANKS as f, allowedGear as g, allowedCosmetic as h, COSMETIC_SLOTS as i, POSITIONS as l, SLOTS as m, BANNER_META as n, EMPTY_COSMETICS as o, RANK_META as p, COSMETICS as r, EMPTY_LOADOUT as s, BANNERS as t, POSITION_META as u, gearById as v, rankIndex as y };
