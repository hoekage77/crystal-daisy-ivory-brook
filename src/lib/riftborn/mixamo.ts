import type { Build } from "./types";

/**
 * Mixamo-compatible rest proportions (Y-up, meters).
 * Bone names match Mixamo so later FBX idle/walk/attack clips can retarget.
 */
export const MIXAMO = {
  hipY: 0.94,
  spine: [0.1, 0.11, 0.14] as const,
  neck: 0.1,
  head: 0.12,
  headR: 0.09,
  shoulderX: 0.155,
  shoulderY: 0.12,
  upperArm: 0.255,
  forearm: 0.235,
  hand: 0.075,
  hipX: 0.09,
  upperLeg: 0.41,
  lowerLeg: 0.4,
  foot: 0.13,
  joint: 0.052,
  bone: 0.03,
  handR: 0.038,
} as const;

export function scaledFig(build: Build) {
  const h = build.height;
  const t = build.thickness;
  const s = build.shoulder;
  return {
    hipY: MIXAMO.hipY * h,
    spine: MIXAMO.spine.map((v) => v * h) as [number, number, number],
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
    handR: MIXAMO.handR * t,
  };
}

export type Fig = ReturnType<typeof scaledFig>;

export const BONE_NAMES = {
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
  rightToe: "mixamorigRightToeBase",
} as const;

export function stanceSpread(stance: Build["stance"]) {
  if (stance === "wide") return 1.22;
  if (stance === "closed") return 0.86;
  return 1;
}
