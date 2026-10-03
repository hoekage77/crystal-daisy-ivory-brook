//#region node_modules/.nitro/vite/services/ssr/assets/mixamo-BsNLNkTZ.js
/**
* Mixamo-compatible rest proportions (Y-up, meters).
* Bone names match Mixamo so later FBX idle/walk/attack clips can retarget.
*/
var MIXAMO = {
	hipY: .94,
	spine: [
		.1,
		.11,
		.14
	],
	neck: .1,
	head: .12,
	headR: .09,
	shoulderX: .155,
	shoulderY: .12,
	upperArm: .255,
	forearm: .235,
	hand: .075,
	hipX: .09,
	upperLeg: .41,
	lowerLeg: .4,
	foot: .13,
	joint: .052,
	bone: .03,
	handR: .038
};
function scaledFig(build) {
	const h = build.height;
	const t = build.thickness;
	const s = build.shoulder;
	return {
		hipY: MIXAMO.hipY * h,
		spine: MIXAMO.spine.map((v) => v * h),
		neck: MIXAMO.neck * h,
		head: MIXAMO.head * h,
		headR: MIXAMO.headR * t,
		shoulderX: MIXAMO.shoulderX * s,
		shoulderY: MIXAMO.shoulderY * h,
		upperArm: MIXAMO.upperArm * h,
		forearm: MIXAMO.forearm * h,
		hand: MIXAMO.hand * h,
		hipX: MIXAMO.hipX * s,
		upperLeg: MIXAMO.upperLeg * h,
		lowerLeg: MIXAMO.lowerLeg * h,
		foot: MIXAMO.foot * h,
		joint: MIXAMO.joint * t,
		bone: MIXAMO.bone * t,
		handR: MIXAMO.handR * t
	};
}
var BONE_NAMES = {
	hips: "mixamorigHips",
	spine: "mixamorigSpine",
	spine1: "mixamorigSpine1",
	spine2: "mixamorigSpine2",
	neck: "mixamorigNeck",
	head: "mixamorigHead",
	headTop: "mixamorigHeadTop_End",
	leftShoulder: "mixamorigLeftShoulder",
	leftArm: "mixamorigLeftArm",
	leftForeArm: "mixamorigLeftForeArm",
	leftHand: "mixamorigLeftHand",
	rightShoulder: "mixamorigRightShoulder",
	rightArm: "mixamorigRightArm",
	rightForeArm: "mixamorigRightForeArm",
	rightHand: "mixamorigRightHand",
	leftUpLeg: "mixamorigLeftUpLeg",
	leftLeg: "mixamorigLeftLeg",
	leftFoot: "mixamorigLeftFoot",
	leftToe: "mixamorigLeftToeBase",
	rightUpLeg: "mixamorigRightUpLeg",
	rightLeg: "mixamorigRightLeg",
	rightFoot: "mixamorigRightFoot",
	rightToe: "mixamorigRightToeBase"
};
function stanceSpread(stance) {
	if (stance === "wide") return 1.22;
	if (stance === "closed") return .86;
	return 1;
}
//#endregion
export { scaledFig as n, stanceSpread as r, BONE_NAMES as t };
