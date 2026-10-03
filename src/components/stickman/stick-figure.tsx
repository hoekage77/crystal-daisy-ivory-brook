import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { gearById, cosmeticById } from "@/lib/riftborn/catalog";
import { BONE_NAMES, scaledFig, stanceSpread } from "@/lib/riftborn/mixamo";
import type { Riftborn } from "@/lib/riftborn/types";
import { figureStyle } from "./materials";
import {
  ArmsGear,
  BackGear,
  FaceGear,
  HeadGear,
  LegsGear,
  TorsoGear,
  WaistGear,
  Weapon,
} from "./gear";

function Joint({
  r,
  color,
  emissive,
  glow,
}: {
  r: number;
  color: string;
  emissive: string;
  glow: number;
}) {
  return (
    <mesh>
      <sphereGeometry args={[r, 18, 14]} />
      <meshStandardMaterial
        color={color}
        metalness={0.62}
        roughness={0.28}
        emissive={emissive}
        emissiveIntensity={glow}
      />
    </mesh>
  );
}

function BoneY({
  length,
  radius,
  color,
  emissive,
  glow,
  dir = -1,
}: {
  length: number;
  radius: number;
  color: string;
  emissive: string;
  glow: number;
  dir?: 1 | -1;
}) {
  return (
    <mesh position={[0, dir * (length / 2), 0]}>
      <capsuleGeometry args={[radius, Math.max(length - radius * 2, 0.02), 4, 10]} />
      <meshStandardMaterial
        color={color}
        metalness={0.45}
        roughness={0.42}
        emissive={emissive}
        emissiveIntensity={glow}
      />
    </mesh>
  );
}

function AuraField({ kind, color }: { kind: string; color: string }) {
  const ref = useRef<Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.35;
  });
  if (!kind || kind === "none") return null;
  const opacity = kind === "corona" ? 0.55 : 0.32;
  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[0.32, kind === "corona" ? 0.5 : 0.42, 48]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} depthWrite={false} />
      </mesh>
      {kind === "shadow" || kind === "corona" ? (
        <mesh position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.55, 16, 12]} />
          <meshBasicMaterial color={color} transparent opacity={0.07} depthWrite={false} />
        </mesh>
      ) : null}
    </group>
  );
}

function HandWeapon({ mesh, style, off }: { mesh: string; style: ReturnType<typeof figureStyle>; off?: boolean }) {
  if (!mesh || mesh === "none") return null;
  return (
    <group rotation={[0.95, 0.2, 0.15]}>
      <Weapon mesh={mesh} style={style} off={off} />
    </group>
  );
}

export function StickFigure({ character }: { character: Riftborn }) {
  const fig = useMemo(() => scaledFig(character.build), [character.build]);
  const style = useMemo(() => figureStyle(character), [character]);
  const spread = stanceSpread(character.build.stance);
  const spine2 = useRef<Group>(null);
  const hips = useRef<Group>(null);

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
  const aPose = 0.34;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (hips.current) {
      hips.current.position.y = fig.hipY + Math.sin(t * 1.5) * 0.012;
      hips.current.rotation.y = Math.sin(t * 0.6) * 0.04;
    }
    if (spine2.current) {
      spine2.current.rotation.x = Math.sin(t * 1.5) * 0.035;
    }
  });

  const J = {
    r: fig.joint,
    color: style.joint.color,
    emissive: style.joint.emissive,
    glow: style.joint.emissiveIntensity,
  };
  const L = {
    color: style.limb.color,
    emissive: style.limb.emissive,
    glow: style.limb.emissiveIntensity,
  };

  return (
    <group>
      <AuraField kind={aura} color={character.palette.aura} />
      <group ref={hips} name={BONE_NAMES.hips} position={[0, fig.hipY, 0]}>
        <Joint {...J} r={fig.joint * 1.15} />
        <WaistGear mesh={waist} fig={fig} style={style} />
        {marks === "bands" ? (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[fig.hipX * 1.2, 0.012, 6, 16]} />
            <meshStandardMaterial
              color={character.palette.accent}
              emissive={character.palette.accent}
              emissiveIntensity={0.4}
            />
          </mesh>
        ) : null}

        <group name={BONE_NAMES.spine} position={[0, fig.spine[0], 0]}>
          <BoneY length={fig.spine[0]} radius={fig.bone * 1.1} {...L} dir={-1} />
          <Joint {...J} r={fig.joint * 0.9} />
          <group name={BONE_NAMES.spine1} position={[0, fig.spine[1], 0]}>
            <BoneY length={fig.spine[1]} radius={fig.bone * 1.15} {...L} dir={-1} />
            <Joint {...J} r={fig.joint * 0.92} />
            <group ref={spine2} name={BONE_NAMES.spine2} position={[0, fig.spine[2], 0]}>
              <BoneY length={fig.spine[2]} radius={fig.bone * 1.2} {...L} dir={-1} />
              <Joint {...J} r={fig.joint * 1.05} />
              <TorsoGear mesh={torso} fig={fig} style={style} />
              <BackGear mesh={back} fig={fig} style={style} />

              <group name={BONE_NAMES.neck} position={[0, fig.neck, 0]}>
                <BoneY length={fig.neck} radius={fig.bone * 0.85} {...L} dir={-1} />
                <Joint {...J} r={fig.joint * 0.72} />
                <group name={BONE_NAMES.head} position={[0, fig.head, 0]}>
                  <Joint
                    r={fig.headR}
                    color={style.joint.color}
                    emissive={style.eye.emissive}
                    glow={style.eye.emissiveIntensity * 0.25}
                  />
                  <mesh position={[-fig.headR * 0.32, fig.headR * 0.12, fig.headR * 0.72]}>
                    <sphereGeometry args={[0.012, 8, 8]} />
                    <meshStandardMaterial
                      color={character.palette.eye}
                      emissive={character.palette.eye}
                      emissiveIntensity={1.4}
                    />
                  </mesh>
                  <mesh position={[fig.headR * 0.32, fig.headR * 0.12, fig.headR * 0.72]}>
                    <sphereGeometry args={[0.012, 8, 8]} />
                    <meshStandardMaterial
                      color={character.palette.eye}
                      emissive={character.palette.eye}
                      emissiveIntensity={1.4}
                    />
                  </mesh>
                  <HeadGear mesh={head} fig={fig} style={style} />
                  <FaceGear mesh={face} fig={fig} style={style} />
                  <group name={BONE_NAMES.headTop} position={[0, fig.headR, 0]} />
                </group>
              </group>

              <group
                name={BONE_NAMES.leftShoulder}
                position={[fig.shoulderX, fig.shoulderY * 0.15, 0]}
              >
                <Joint {...J} r={fig.joint * 0.85} />
                {arms === "pauldrons" ? (
                  <ArmsGear mesh={arms} fig={fig} style={style} side="left" />
                ) : null}
                <group
                  name={BONE_NAMES.leftArm}
                  position={[0, 0, 0]}
                  rotation={[0.08, 0, aPose]}
                >
                  <BoneY length={fig.upperArm} radius={fig.bone} {...L} dir={-1} />
                  {arms === "armwraps" ? (
                    <ArmsGear mesh={arms} fig={fig} style={style} side="left" />
                  ) : null}
                  {marks === "seams" ? (
                    <mesh position={[0, -fig.upperArm * 0.5, 0]}>
                      <sphereGeometry args={[fig.bone * 1.1, 8, 8]} />
                      <meshStandardMaterial
                        color={character.palette.accent}
                        emissive={character.palette.accent}
                        emissiveIntensity={0.8}
                      />
                    </mesh>
                  ) : null}
                  <group name={BONE_NAMES.leftForeArm} position={[0, -fig.upperArm, 0]}>
                    <Joint {...J} r={fig.joint * 0.78} />
                    <BoneY length={fig.forearm} radius={fig.bone * 0.9} {...L} dir={-1} />
                    {arms === "bracers" ? (
                      <ArmsGear mesh={arms} fig={fig} style={style} side="left" />
                    ) : null}
                    <group name={BONE_NAMES.leftHand} position={[0, -fig.forearm, 0]}>
                      <Joint {...J} r={fig.handR} />
                      {dual ? <HandWeapon mesh={main} style={style} off /> : null}
                      {!dual ? <HandWeapon mesh={off} style={style} off /> : null}
                    </group>
                  </group>
                </group>
              </group>

              <group
                name={BONE_NAMES.rightShoulder}
                position={[-fig.shoulderX, fig.shoulderY * 0.15, 0]}
              >
                <Joint {...J} r={fig.joint * 0.85} />
                {arms === "pauldrons" ? (
                  <ArmsGear mesh={arms} fig={fig} style={style} side="right" />
                ) : null}
                <group
                  name={BONE_NAMES.rightArm}
                  position={[0, 0, 0]}
                  rotation={[0.08, 0, -aPose]}
                >
                  <BoneY length={fig.upperArm} radius={fig.bone} {...L} dir={-1} />
                  {arms === "armwraps" ? (
                    <ArmsGear mesh={arms} fig={fig} style={style} side="right" />
                  ) : null}
                  <group name={BONE_NAMES.rightForeArm} position={[0, -fig.upperArm, 0]}>
                    <Joint {...J} r={fig.joint * 0.78} />
                    <BoneY length={fig.forearm} radius={fig.bone * 0.9} {...L} dir={-1} />
                    {arms === "bracers" ? (
                      <ArmsGear mesh={arms} fig={fig} style={style} side="right" />
                    ) : null}
                    <group name={BONE_NAMES.rightHand} position={[0, -fig.forearm, 0]}>
                      <Joint {...J} r={fig.handR} />
                      <HandWeapon mesh={main} style={style} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>

        <group
          name={BONE_NAMES.leftUpLeg}
          position={[fig.hipX * spread, 0, 0]}
          rotation={[0.04, 0, 0.06]}
        >
          <BoneY length={fig.upperLeg} radius={fig.bone * 1.1} {...L} dir={-1} />
          <group name={BONE_NAMES.leftLeg} position={[0, -fig.upperLeg, 0]}>
            <Joint {...J} r={fig.joint * 0.85} />
            <BoneY length={fig.lowerLeg} radius={fig.bone} {...L} dir={-1} />
            <LegsGear mesh={legs} fig={fig} style={style} />
            <group name={BONE_NAMES.leftFoot} position={[0, -fig.lowerLeg, 0.02]}>
              <Joint {...J} r={fig.joint * 0.7} />
              <mesh position={[0, -0.02, fig.foot * 0.35]} rotation={[Math.PI / 2, 0, 0]}>
                <capsuleGeometry args={[fig.bone * 0.9, fig.foot * 0.55, 4, 8]} />
                <meshStandardMaterial color={style.limb.color} metalness={0.4} roughness={0.45} />
              </mesh>
              <group name={BONE_NAMES.leftToe} position={[0, 0, fig.foot]} />
            </group>
          </group>
        </group>

        <group
          name={BONE_NAMES.rightUpLeg}
          position={[-fig.hipX * spread, 0, 0]}
          rotation={[0.04, 0, -0.06]}
        >
          <BoneY length={fig.upperLeg} radius={fig.bone * 1.1} {...L} dir={-1} />
          <group name={BONE_NAMES.rightLeg} position={[0, -fig.upperLeg, 0]}>
            <Joint {...J} r={fig.joint * 0.85} />
            <BoneY length={fig.lowerLeg} radius={fig.bone} {...L} dir={-1} />
            <LegsGear mesh={legs} fig={fig} style={style} />
            <group name={BONE_NAMES.rightFoot} position={[0, -fig.lowerLeg, 0.02]}>
              <Joint {...J} r={fig.joint * 0.7} />
              <mesh position={[0, -0.02, fig.foot * 0.35]} rotation={[Math.PI / 2, 0, 0]}>
                <capsuleGeometry args={[fig.bone * 0.9, fig.foot * 0.55, 4, 8]} />
                <meshStandardMaterial color={style.limb.color} metalness={0.4} roughness={0.45} />
              </mesh>
              <group name={BONE_NAMES.rightToe} position={[0, 0, fig.foot]} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
