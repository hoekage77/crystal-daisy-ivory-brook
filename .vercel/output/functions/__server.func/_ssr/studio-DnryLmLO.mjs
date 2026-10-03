import { i as __toESM } from "../_runtime.mjs";
import { _ as cosmeticById, p as RANK_META, v as gearById } from "./catalog-B1Ee27tO.mjs";
import { i as useFrame, n as OrbitControls, r as Canvas, s as require_jsx_runtime, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as scaledFig, r as stanceSpread, t as BONE_NAMES } from "./mixamo-BsNLNkTZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-DnryLmLO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function figureStyle(c) {
	const glow = RANK_META[c.rank].glow;
	return {
		glow,
		joint: {
			color: c.palette.joint,
			metalness: .62,
			roughness: .28,
			emissive: c.palette.eye,
			emissiveIntensity: glow
		},
		limb: {
			color: c.palette.limb,
			metalness: .45,
			roughness: .42,
			emissive: c.palette.accent,
			emissiveIntensity: glow * .35
		},
		metal: {
			color: c.palette.metal,
			metalness: .82,
			roughness: .28,
			emissive: c.palette.metal,
			emissiveIntensity: glow * .2
		},
		cloth: {
			color: c.palette.cloth,
			metalness: .08,
			roughness: .78,
			emissive: c.palette.accent,
			emissiveIntensity: glow * .12
		},
		accent: {
			color: c.palette.accent,
			metalness: .4,
			roughness: .35,
			emissive: c.palette.accent,
			emissiveIntensity: .25 + glow
		},
		aura: {
			color: c.palette.aura,
			metalness: 0,
			roughness: 1,
			emissive: c.palette.aura,
			emissiveIntensity: .8 + glow
		},
		eye: {
			color: c.palette.eye,
			metalness: 0,
			roughness: .2,
			emissive: c.palette.eye,
			emissiveIntensity: .9 + glow * 2
		}
	};
}
function Mat({ spec }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: spec.color,
		metalness: spec.metalness,
		roughness: spec.roughness,
		emissive: spec.emissive,
		emissiveIntensity: spec.emissiveIntensity
	});
}
function HeadGear({ mesh, fig, style }) {
	const r = fig.headR;
	if (mesh === "helm") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			r * .35,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			r * 1.18,
			18,
			14
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			r * .15,
			r * .7
		],
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			r * .22,
			r * .22,
			r * .35,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.joint })]
	})] });
	if (mesh === "visor") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			r * .15,
			r * .72
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			r * 1.35,
			r * .45,
			r * .18
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "hood") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			r * .35,
			-r * .05
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			r * 1.28,
			16,
			12,
			0,
			Math.PI * 2,
			0,
			Math.PI * .72
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-r * .15,
			-r * .55
		],
		rotation: [
			.4,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			r * 1.6,
			r * 1.1,
			r * .12
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	})] });
	if (mesh === "circlet") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			r * .55,
			0
		],
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
			r * .82,
			r * .07,
			8,
			24
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
	});
	if (mesh === "horns") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			-r * .7,
			r * .7,
			0
		],
		rotation: [
			0,
			0,
			.7
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			r * .18,
			r * 1.1,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			r * .7,
			r * .7,
			0
		],
		rotation: [
			0,
			0,
			-.7
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			r * .18,
			r * 1.1,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	})] });
	if (mesh === "crown") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			r * .55,
			0
		],
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
			r * .78,
			r * .08,
			8,
			20
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), [
		0,
		1,
		2,
		3,
		4
	].map((i) => {
		const a = i / 5 * Math.PI * 2;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				Math.cos(a) * r * .78,
				r * .95,
				Math.sin(a) * r * .78
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				r * .14,
				r * .55,
				r * .08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
		}, i);
	})] });
	return null;
}
function FaceGear({ mesh, fig, style }) {
	const r = fig.headR;
	if (mesh === "mask") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.02,
			r * .78
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			r * 1.15,
			r * 1.15,
			r * .12
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "halfmask") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-r * .25,
			r * .78
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			r * 1.05,
			r * .55,
			r * .1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	return null;
}
function TorsoGear({ mesh, fig, style }) {
	const w = fig.shoulderX * 2.1;
	if (mesh === "wraps") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
		w * .42,
		w * .5,
		fig.spine[2] + fig.spine[1],
		10
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })] });
	if (mesh === "harness") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			0,
			0,
			.55
		],
		position: [
			0,
			.02,
			.02
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			w * .12,
			fig.spine[2] + .12,
			.04
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			0,
			0,
			-.55
		],
		position: [
			0,
			.02,
			.02
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			w * .12,
			fig.spine[2] + .12,
			.04
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	})] });
	if (mesh === "vest") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
		w * .95,
		fig.spine[2] + .08,
		.12
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })] });
	if (mesh === "plate") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
		w * 1.05,
		fig.spine[2] + .14,
		.16
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.02,
			.1
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			w * .45,
			fig.spine[2] * .55,
			.06
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
	})] });
	if (mesh === "robe") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-.18,
			0
		],
		rotation: [
			.08,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			w * .55,
			w * .72,
			.7,
			10,
			1,
			true
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	});
	return null;
}
function BackGear({ mesh, fig, style }) {
	const w = fig.shoulderX * 2.2;
	if (mesh === "cloak") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-.22,
			-.1
		],
		rotation: [
			.35,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			w * .62,
			.95,
			8,
			1,
			true
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	});
	if (mesh === "cape") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-.02,
			-.08
		],
		rotation: [
			.4,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			w * 1.05,
			.42,
			.05
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	});
	if (mesh === "tattered") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		position: [
			0,
			-.1,
			-.1
		],
		rotation: [
			.3,
			0,
			0
		],
		children: [
			-.16,
			-.05,
			.08,
			.18
		].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				x,
				-.2,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.08,
				.55 + i % 2 * .12,
				.03
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
		}, i))
	});
	if (mesh === "wings") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: [-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			side * .12,
			.05,
			-.08
		],
		rotation: [
			.2,
			side * .6,
			side * .2
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.06,
			.55,
			.28
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.aura })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.1,
				-.18
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.04,
				.4,
				.22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.joint })]
		})]
	}, side)) });
	if (mesh === "quiver") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.14,
			.02,
			-.12
		],
		rotation: [
			.4,
			0,
			.3
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.035,
			.04,
			.38,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.24,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.01,
				.01,
				.28,
				6
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
		})]
	});
	if (mesh === "lantern") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			-.22,
			.16,
			-.08
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.07, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.aura })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			color: style.aura.color,
			intensity: 1.4,
			distance: 3
		})]
	});
	return null;
}
function ArmsGear({ mesh, fig, style, side }) {
	const dir = side === "left" ? 1 : -1;
	if (mesh === "bracers") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-fig.forearm * .45,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			fig.bone * 1.7,
			fig.bone * 1.7,
			fig.forearm * .45,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "pauldrons") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			dir * .02,
			.02,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			fig.joint * 1.7,
			12,
			10,
			0,
			Math.PI * 2,
			0,
			Math.PI / 2
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "armwraps") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-fig.upperArm * .45,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			fig.bone * 1.45,
			fig.bone * 1.45,
			fig.upperArm * .7,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	});
	return null;
}
function LegsGear({ mesh, fig, style }) {
	if (mesh === "greaves") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-fig.lowerLeg * .45,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			fig.bone * 1.7,
			fig.bone * 1.55,
			fig.lowerLeg * .5,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "boots") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			-fig.lowerLeg + .04,
			.04
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			fig.joint * 2.1,
			.08,
			fig.foot * 1.1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	return null;
}
function WaistGear({ mesh, fig, style }) {
	if (mesh === "belt") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
			fig.hipX * 1.35,
			.018,
			8,
			20
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "sash") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			.08,
			-.12,
			.02
		],
		rotation: [
			.15,
			0,
			.4
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.08,
			.36,
			.03
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
	});
	return null;
}
function Weapon({ mesh, style, off }) {
	if (mesh === "sword" || mesh === "dual") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		rotation: [
			0,
			0,
			off ? .15 : -.15
		],
		position: [
			0,
			-.02,
			.02
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.22,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.025,
				.42,
				.01
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.02,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.08,
				.02,
				.02
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
		})]
	});
	if (mesh === "greatsword") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.38,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.045,
			.7,
			.014
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.04,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.12,
			.03,
			.03
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
	})] });
	if (mesh === "daggers") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		rotation: [
			0,
			0,
			off ? .4 : -.4
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.12,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.018,
				.22,
				.008
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
		})
	});
	if (mesh === "spear") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.55,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.012,
			.012,
			1.15,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			1.14,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			.03,
			.14,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
	})] });
	if (mesh === "needle") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.42,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.008,
			.006,
			.85,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "staff") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.45,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.016,
			.016,
			.95,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.95,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [.055, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.aura })]
	})] });
	if (mesh === "tome") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			.04,
			.08,
			.06
		],
		rotation: [
			.2,
			.4,
			.2
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.09,
			.12,
			.03
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.cloth })]
	});
	if (mesh === "scythe") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.5,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.014,
			.014,
			1.05,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			.14,
			.98,
			0
		],
		rotation: [
			0,
			0,
			1.1
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.28,
			.06,
			.012
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.accent })]
	})] });
	if (mesh === "gauntlets") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
		.08,
		.08,
		.09
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })] });
	if (mesh === "bow") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		rotation: [
			0,
			0,
			.2
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				0,
				0,
				.5
			],
			position: [
				0,
				.16,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.18,
				.01,
				6,
				12,
				Math.PI
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
		})
	});
	if (mesh === "shield") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			.04,
			.06,
			.04
		],
		rotation: [
			.1,
			.4,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.16,
			.16,
			.03,
			12
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.metal })]
	});
	if (mesh === "handlantern") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.02,
			.08,
			.04
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.045,
			12,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.aura })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			color: style.aura.color,
			intensity: .9,
			distance: 2.2
		})]
	});
	if (mesh === "orb") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			.03,
			.1,
			.05
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.05,
			12,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mat, { spec: style.aura })]
	});
	return null;
}
function Joint({ r, color, emissive, glow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
		r,
		18,
		14
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color,
		metalness: .62,
		roughness: .28,
		emissive,
		emissiveIntensity: glow
	})] });
}
function BoneY({ length, radius, color, emissive, glow, dir = -1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			dir * (length / 2),
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
			radius,
			Math.max(length - radius * 2, .02),
			4,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color,
			metalness: .45,
			roughness: .42,
			emissive,
			emissiveIntensity: glow
		})]
	});
}
function AuraField({ kind, color }) {
	const ref = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		if (ref.current) ref.current.rotation.y += dt * .35;
	});
	if (!kind || kind === "none") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.02,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				.32,
				kind === "corona" ? .5 : .42,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color,
				transparent: true,
				opacity: kind === "corona" ? .55 : .32,
				depthWrite: false
			})]
		}), kind === "shadow" || kind === "corona" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.95,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.55,
				16,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color,
				transparent: true,
				opacity: .07,
				depthWrite: false
			})]
		}) : null]
	});
}
function HandWeapon({ mesh, style, off }) {
	if (!mesh || mesh === "none") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weapon, {
			mesh,
			style,
			off
		})
	});
}
function StickFigure({ character }) {
	const fig = (0, import_react.useMemo)(() => scaledFig(character.build), [character.build]);
	const style = (0, import_react.useMemo)(() => figureStyle(character), [character]);
	const spread = stanceSpread(character.build.stance);
	const spine2 = (0, import_react.useRef)(null);
	const hips = (0, import_react.useRef)(null);
	const head = gearById(character.loadout.head)?.mesh ?? "none";
	const face = gearById(character.loadout.face)?.mesh ?? "none";
	const torso = gearById(character.loadout.torso)?.mesh ?? "none";
	const back = gearById(character.loadout.back)?.mesh ?? "none";
	const arms = gearById(character.loadout.arms)?.mesh ?? "none";
	const legs = gearById(character.loadout.legs)?.mesh ?? "none";
	const waist = gearById(character.loadout.waist)?.mesh ?? "none";
	const main = gearById(character.loadout.mainHand)?.mesh ?? "none";
	const off = gearById(character.loadout.offHand)?.mesh ?? "none";
	const aura = cosmeticById(character.cosmetics.aura)?.mesh ?? "none";
	const marks = cosmeticById(character.cosmetics.markings)?.mesh ?? "none";
	const dual = main === "dual" || main === "daggers" || main === "gauntlets";
	const aPose = .34;
	useFrame((state) => {
		const t = state.clock.elapsedTime;
		if (hips.current) {
			hips.current.position.y = fig.hipY + Math.sin(t * 1.5) * .012;
			hips.current.rotation.y = Math.sin(t * .6) * .04;
		}
		if (spine2.current) spine2.current.rotation.x = Math.sin(t * 1.5) * .035;
	});
	const J = {
		r: fig.joint,
		color: style.joint.color,
		emissive: style.joint.emissive,
		glow: style.joint.emissiveIntensity
	};
	const L = {
		color: style.limb.color,
		emissive: style.limb.emissive,
		glow: style.limb.emissiveIntensity
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuraField, {
		kind: aura,
		color: character.palette.aura
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: hips,
		name: BONE_NAMES.hips,
		position: [
			0,
			fig.hipY,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
				...J,
				r: fig.joint * 1.15
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaistGear, {
				mesh: waist,
				fig,
				style
			}),
			marks === "bands" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					fig.hipX * 1.2,
					.012,
					6,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: character.palette.accent,
					emissive: character.palette.accent,
					emissiveIntensity: .4
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				name: BONE_NAMES.spine,
				position: [
					0,
					fig.spine[0],
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
						length: fig.spine[0],
						radius: fig.bone * 1.1,
						...L,
						dir: -1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
						...J,
						r: fig.joint * .9
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
						name: BONE_NAMES.spine1,
						position: [
							0,
							fig.spine[1],
							0
						],
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
								length: fig.spine[1],
								radius: fig.bone * 1.15,
								...L,
								dir: -1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
								...J,
								r: fig.joint * .92
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
								ref: spine2,
								name: BONE_NAMES.spine2,
								position: [
									0,
									fig.spine[2],
									0
								],
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
										length: fig.spine[2],
										radius: fig.bone * 1.2,
										...L,
										dir: -1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
										...J,
										r: fig.joint * 1.05
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TorsoGear, {
										mesh: torso,
										fig,
										style
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackGear, {
										mesh: back,
										fig,
										style
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
										name: BONE_NAMES.neck,
										position: [
											0,
											fig.neck,
											0
										],
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
												length: fig.neck,
												radius: fig.bone * .85,
												...L,
												dir: -1
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
												...J,
												r: fig.joint * .72
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
												name: BONE_NAMES.head,
												position: [
													0,
													fig.head,
													0
												],
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
														r: fig.headR,
														color: style.joint.color,
														emissive: style.eye.emissive,
														glow: style.eye.emissiveIntensity * .25
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
														position: [
															-fig.headR * .32,
															fig.headR * .12,
															fig.headR * .72
														],
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
															.012,
															8,
															8
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
															color: character.palette.eye,
															emissive: character.palette.eye,
															emissiveIntensity: 1.4
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
														position: [
															fig.headR * .32,
															fig.headR * .12,
															fig.headR * .72
														],
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
															.012,
															8,
															8
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
															color: character.palette.eye,
															emissive: character.palette.eye,
															emissiveIntensity: 1.4
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadGear, {
														mesh: head,
														fig,
														style
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaceGear, {
														mesh: face,
														fig,
														style
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
														name: BONE_NAMES.headTop,
														position: [
															0,
															fig.headR,
															0
														]
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
										name: BONE_NAMES.leftShoulder,
										position: [
											fig.shoulderX,
											fig.shoulderY * .15,
											0
										],
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
												...J,
												r: fig.joint * .85
											}),
											arms === "pauldrons" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmsGear, {
												mesh: arms,
												fig,
												style,
												side: "left"
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
												name: BONE_NAMES.leftArm,
												position: [
													0,
													0,
													0
												],
												rotation: [
													.08,
													0,
													aPose
												],
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
														length: fig.upperArm,
														radius: fig.bone,
														...L,
														dir: -1
													}),
													arms === "armwraps" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmsGear, {
														mesh: arms,
														fig,
														style,
														side: "left"
													}) : null,
													marks === "seams" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
														position: [
															0,
															-fig.upperArm * .5,
															0
														],
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
															fig.bone * 1.1,
															8,
															8
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
															color: character.palette.accent,
															emissive: character.palette.accent,
															emissiveIntensity: .8
														})]
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
														name: BONE_NAMES.leftForeArm,
														position: [
															0,
															-fig.upperArm,
															0
														],
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
																...J,
																r: fig.joint * .78
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
																length: fig.forearm,
																radius: fig.bone * .9,
																...L,
																dir: -1
															}),
															arms === "bracers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmsGear, {
																mesh: arms,
																fig,
																style,
																side: "left"
															}) : null,
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
																name: BONE_NAMES.leftHand,
																position: [
																	0,
																	-fig.forearm,
																	0
																],
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
																		...J,
																		r: fig.handR
																	}),
																	dual ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandWeapon, {
																		mesh: main,
																		style,
																		off: true
																	}) : null,
																	!dual ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandWeapon, {
																		mesh: off,
																		style,
																		off: true
																	}) : null
																]
															})
														]
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
										name: BONE_NAMES.rightShoulder,
										position: [
											-fig.shoulderX,
											fig.shoulderY * .15,
											0
										],
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
												...J,
												r: fig.joint * .85
											}),
											arms === "pauldrons" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmsGear, {
												mesh: arms,
												fig,
												style,
												side: "right"
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
												name: BONE_NAMES.rightArm,
												position: [
													0,
													0,
													0
												],
												rotation: [
													.08,
													0,
													-.34
												],
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
														length: fig.upperArm,
														radius: fig.bone,
														...L,
														dir: -1
													}),
													arms === "armwraps" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmsGear, {
														mesh: arms,
														fig,
														style,
														side: "right"
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
														name: BONE_NAMES.rightForeArm,
														position: [
															0,
															-fig.upperArm,
															0
														],
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
																...J,
																r: fig.joint * .78
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
																length: fig.forearm,
																radius: fig.bone * .9,
																...L,
																dir: -1
															}),
															arms === "bracers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArmsGear, {
																mesh: arms,
																fig,
																style,
																side: "right"
															}) : null,
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
																name: BONE_NAMES.rightHand,
																position: [
																	0,
																	-fig.forearm,
																	0
																],
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
																	...J,
																	r: fig.handR
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandWeapon, {
																	mesh: main,
																	style
																})]
															})
														]
													})
												]
											})
										]
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				name: BONE_NAMES.leftUpLeg,
				position: [
					fig.hipX * spread,
					0,
					0
				],
				rotation: [
					.04,
					0,
					.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
					length: fig.upperLeg,
					radius: fig.bone * 1.1,
					...L,
					dir: -1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					name: BONE_NAMES.leftLeg,
					position: [
						0,
						-fig.upperLeg,
						0
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
							...J,
							r: fig.joint * .85
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
							length: fig.lowerLeg,
							radius: fig.bone,
							...L,
							dir: -1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegsGear, {
							mesh: legs,
							fig,
							style
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
							name: BONE_NAMES.leftFoot,
							position: [
								0,
								-fig.lowerLeg,
								.02
							],
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
									...J,
									r: fig.joint * .7
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
									position: [
										0,
										-.02,
										fig.foot * .35
									],
									rotation: [
										Math.PI / 2,
										0,
										0
									],
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
										fig.bone * .9,
										fig.foot * .55,
										4,
										8
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
										color: style.limb.color,
										metalness: .4,
										roughness: .45
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
									name: BONE_NAMES.leftToe,
									position: [
										0,
										0,
										fig.foot
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				name: BONE_NAMES.rightUpLeg,
				position: [
					-fig.hipX * spread,
					0,
					0
				],
				rotation: [
					.04,
					0,
					-.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
					length: fig.upperLeg,
					radius: fig.bone * 1.1,
					...L,
					dir: -1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					name: BONE_NAMES.rightLeg,
					position: [
						0,
						-fig.upperLeg,
						0
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
							...J,
							r: fig.joint * .85
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneY, {
							length: fig.lowerLeg,
							radius: fig.bone,
							...L,
							dir: -1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegsGear, {
							mesh: legs,
							fig,
							style
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
							name: BONE_NAMES.rightFoot,
							position: [
								0,
								-fig.lowerLeg,
								.02
							],
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joint, {
									...J,
									r: fig.joint * .7
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
									position: [
										0,
										-.02,
										fig.foot * .35
									],
									rotation: [
										Math.PI / 2,
										0,
										0
									],
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
										fig.bone * .9,
										fig.foot * .55,
										4,
										8
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
										color: style.limb.color,
										metalness: .4,
										roughness: .45
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
									name: BONE_NAMES.rightToe,
									position: [
										0,
										0,
										fig.foot
									]
								})
							]
						})
					]
				})]
			})
		]
	})] });
}
function Ring() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.002,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [1.35, 48] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#12141a",
				metalness: .4,
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.008,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				.72,
				.78,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#8eb8c9",
				transparent: true,
				opacity: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.01,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				1.08,
				1.12,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#8eb8c9",
				transparent: true,
				opacity: .22
			})]
		})
	] });
}
function Lights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .28,
			color: "#9aa6b2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-2.4,
				4.2,
				3.2
			],
			intensity: 2.1,
			color: "#e8eef2",
			castShadow: true,
			"shadow-mapSize-width": 1024,
			"shadow-mapSize-height": 1024
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				3.2,
				1.8,
				-2.4
			],
			intensity: 1.15,
			color: "#8eb8c9"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				2.2,
				1.4
			],
			intensity: .45,
			color: "#c5d4de"
		})
	] });
}
function Scene({ character }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#09090b"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#09090b",
				7,
				16
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lights, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickFigure, { character }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				0,
				.001,
				0
			],
			opacity: .45,
			scale: 5,
			blur: 2.4,
			far: 2.5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			makeDefault: true,
			enablePan: false,
			target: [
				0,
				.95,
				0
			],
			minDistance: 1.7,
			maxDistance: 5.2,
			minPolarAngle: .35,
			maxPolarAngle: Math.PI / 2 - .06
		})
	] });
}
function Studio({ character }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full w-full bg-bg",
		"aria-hidden": true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		camera: {
			position: [
				1.85,
				1.4,
				2.7
			],
			fov: 32
		},
		dpr: [1, 2],
		gl: {
			antialias: true,
			alpha: false
		},
		shadows: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { character })
	});
}
//#endregion
export { Studio };
