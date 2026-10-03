import type { Fig } from "@/lib/riftborn/mixamo";
import type { FigureStyle } from "./materials";

function Mat({
  spec,
}: {
  spec: {
    color: string;
    metalness: number;
    roughness: number;
    emissive: string;
    emissiveIntensity: number;
  };
}) {
  return (
    <meshStandardMaterial
      color={spec.color}
      metalness={spec.metalness}
      roughness={spec.roughness}
      emissive={spec.emissive}
      emissiveIntensity={spec.emissiveIntensity}
    />
  );
}

export function HeadGear({
  mesh,
  fig,
  style,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
}) {
  const r = fig.headR;
  if (mesh === "helm") {
    return (
      <group>
        <mesh position={[0, r * 0.35, 0]}>
          <sphereGeometry args={[r * 1.18, 18, 14]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[0, r * 0.15, r * 0.7]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[r * 0.22, r * 0.22, r * 0.35, 10]} />
          <Mat spec={style.joint} />
        </mesh>
      </group>
    );
  }
  if (mesh === "visor") {
    return (
      <mesh position={[0, r * 0.15, r * 0.72]}>
        <boxGeometry args={[r * 1.35, r * 0.45, r * 0.18]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "hood") {
    return (
      <group>
        <mesh position={[0, r * 0.35, -r * 0.05]}>
          <sphereGeometry args={[r * 1.28, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.72]} />
          <Mat spec={style.cloth} />
        </mesh>
        <mesh position={[0, -r * 0.15, -r * 0.55]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[r * 1.6, r * 1.1, r * 0.12]} />
          <Mat spec={style.cloth} />
        </mesh>
      </group>
    );
  }
  if (mesh === "circlet") {
    return (
      <mesh position={[0, r * 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[r * 0.82, r * 0.07, 8, 24]} />
        <Mat spec={style.accent} />
      </mesh>
    );
  }
  if (mesh === "horns") {
    return (
      <group>
        <mesh position={[-r * 0.7, r * 0.7, 0]} rotation={[0, 0, 0.7]}>
          <coneGeometry args={[r * 0.18, r * 1.1, 8]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[r * 0.7, r * 0.7, 0]} rotation={[0, 0, -0.7]}>
          <coneGeometry args={[r * 0.18, r * 1.1, 8]} />
          <Mat spec={style.metal} />
        </mesh>
      </group>
    );
  }
  if (mesh === "crown") {
    return (
      <group>
        <mesh position={[0, r * 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r * 0.78, r * 0.08, 8, 20]} />
          <Mat spec={style.metal} />
        </mesh>
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i / 5) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * r * 0.78, r * 0.95, Math.sin(a) * r * 0.78]}
            >
              <boxGeometry args={[r * 0.14, r * 0.55, r * 0.08]} />
              <Mat spec={style.accent} />
            </mesh>
          );
        })}
      </group>
    );
  }
  return null;
}

export function FaceGear({
  mesh,
  fig,
  style,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
}) {
  const r = fig.headR;
  if (mesh === "mask") {
    return (
      <mesh position={[0, 0.02, r * 0.78]}>
        <boxGeometry args={[r * 1.15, r * 1.15, r * 0.12]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "halfmask") {
    return (
      <mesh position={[0, -r * 0.25, r * 0.78]}>
        <boxGeometry args={[r * 1.05, r * 0.55, r * 0.1]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  return null;
}

export function TorsoGear({
  mesh,
  fig,
  style,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
}) {
  const w = fig.shoulderX * 2.1;
  if (mesh === "wraps") {
    return (
      <mesh>
        <cylinderGeometry args={[w * 0.42, w * 0.5, fig.spine[2] + fig.spine[1], 10]} />
        <Mat spec={style.cloth} />
      </mesh>
    );
  }
  if (mesh === "harness") {
    return (
      <group>
        <mesh rotation={[0, 0, 0.55]} position={[0, 0.02, 0.02]}>
          <boxGeometry args={[w * 0.12, fig.spine[2] + 0.12, 0.04]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh rotation={[0, 0, -0.55]} position={[0, 0.02, 0.02]}>
          <boxGeometry args={[w * 0.12, fig.spine[2] + 0.12, 0.04]} />
          <Mat spec={style.metal} />
        </mesh>
      </group>
    );
  }
  if (mesh === "vest") {
    return (
      <mesh>
        <boxGeometry args={[w * 0.95, fig.spine[2] + 0.08, 0.12]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "plate") {
    return (
      <group>
        <mesh>
          <boxGeometry args={[w * 1.05, fig.spine[2] + 0.14, 0.16]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[0, 0.02, 0.1]}>
          <boxGeometry args={[w * 0.45, fig.spine[2] * 0.55, 0.06]} />
          <Mat spec={style.accent} />
        </mesh>
      </group>
    );
  }
  if (mesh === "robe") {
    return (
      <mesh position={[0, -0.18, 0]} rotation={[0.08, 0, 0]}>
        <cylinderGeometry args={[w * 0.55, w * 0.72, 0.7, 10, 1, true]} />
        <Mat spec={style.cloth} />
      </mesh>
    );
  }
  return null;
}

export function BackGear({
  mesh,
  fig,
  style,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
}) {
  const w = fig.shoulderX * 2.2;
  if (mesh === "cloak") {
    return (
      <mesh position={[0, -0.22, -0.1]} rotation={[0.35, 0, 0]}>
        <coneGeometry args={[w * 0.62, 0.95, 8, 1, true]} />
        <Mat spec={style.cloth} />
      </mesh>
    );
  }
  if (mesh === "cape") {
    return (
      <mesh position={[0, -0.02, -0.08]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[w * 1.05, 0.42, 0.05]} />
        <Mat spec={style.cloth} />
      </mesh>
    );
  }
  if (mesh === "tattered") {
    return (
      <group position={[0, -0.1, -0.1]} rotation={[0.3, 0, 0]}>
        {[-0.16, -0.05, 0.08, 0.18].map((x, i) => (
          <mesh key={i} position={[x, -0.2, 0]}>
            <boxGeometry args={[0.08, 0.55 + (i % 2) * 0.12, 0.03]} />
            <Mat spec={style.cloth} />
          </mesh>
        ))}
      </group>
    );
  }
  if (mesh === "wings") {
    return (
      <group>
        {[-1, 1].map((side) => (
          <group key={side} position={[side * 0.12, 0.05, -0.08]} rotation={[0.2, side * 0.6, side * 0.2]}>
            <mesh>
              <boxGeometry args={[0.06, 0.55, 0.28]} />
              <Mat spec={style.aura} />
            </mesh>
            <mesh position={[0, 0.1, -0.18]}>
              <boxGeometry args={[0.04, 0.4, 0.22]} />
              <Mat spec={style.joint} />
            </mesh>
          </group>
        ))}
      </group>
    );
  }
  if (mesh === "quiver") {
    return (
      <group position={[0.14, 0.02, -0.12]} rotation={[0.4, 0, 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.035, 0.04, 0.38, 8]} />
          <Mat spec={style.cloth} />
        </mesh>
        <mesh position={[0, 0.24, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.28, 6]} />
          <Mat spec={style.metal} />
        </mesh>
      </group>
    );
  }
  if (mesh === "lantern") {
    return (
      <group position={[-0.22, 0.16, -0.08]}>
        <mesh>
          <octahedronGeometry args={[0.07, 0]} />
          <Mat spec={style.aura} />
        </mesh>
        <pointLight color={style.aura.color} intensity={1.4} distance={3} />
      </group>
    );
  }
  return null;
}

export function ArmsGear({
  mesh,
  fig,
  style,
  side,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
  side: "left" | "right";
}) {
  const dir = side === "left" ? 1 : -1;
  if (mesh === "bracers") {
    return (
      <mesh position={[0, -fig.forearm * 0.45, 0]}>
        <cylinderGeometry args={[fig.bone * 1.7, fig.bone * 1.7, fig.forearm * 0.45, 10]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "pauldrons") {
    return (
      <mesh position={[dir * 0.02, 0.02, 0]}>
        <sphereGeometry args={[fig.joint * 1.7, 12, 10, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "armwraps") {
    return (
      <mesh position={[0, -fig.upperArm * 0.45, 0]}>
        <cylinderGeometry args={[fig.bone * 1.45, fig.bone * 1.45, fig.upperArm * 0.7, 10]} />
        <Mat spec={style.cloth} />
      </mesh>
    );
  }
  return null;
}

export function LegsGear({
  mesh,
  fig,
  style,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
}) {
  if (mesh === "greaves") {
    return (
      <mesh position={[0, -fig.lowerLeg * 0.45, 0]}>
        <cylinderGeometry args={[fig.bone * 1.7, fig.bone * 1.55, fig.lowerLeg * 0.5, 10]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "boots") {
    return (
      <mesh position={[0, -fig.lowerLeg + 0.04, 0.04]}>
        <boxGeometry args={[fig.joint * 2.1, 0.08, fig.foot * 1.1]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  return null;
}

export function WaistGear({
  mesh,
  fig,
  style,
}: {
  mesh: string;
  fig: Fig;
  style: FigureStyle;
}) {
  if (mesh === "belt") {
    return (
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[fig.hipX * 1.35, 0.018, 8, 20]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "sash") {
    return (
      <mesh position={[0.08, -0.12, 0.02]} rotation={[0.15, 0, 0.4]}>
        <boxGeometry args={[0.08, 0.36, 0.03]} />
        <Mat spec={style.accent} />
      </mesh>
    );
  }
  return null;
}

export function Weapon({
  mesh,
  style,
  off,
}: {
  mesh: string;
  style: FigureStyle;
  off?: boolean;
}) {
  if (mesh === "sword" || mesh === "dual") {
    return (
      <group rotation={[0, 0, off ? 0.15 : -0.15]} position={[0, -0.02, 0.02]}>
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.025, 0.42, 0.01]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.08, 0.02, 0.02]} />
          <Mat spec={style.accent} />
        </mesh>
      </group>
    );
  }
  if (mesh === "greatsword") {
    return (
      <group>
        <mesh position={[0, 0.38, 0]}>
          <boxGeometry args={[0.045, 0.7, 0.014]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[0.12, 0.03, 0.03]} />
          <Mat spec={style.accent} />
        </mesh>
      </group>
    );
  }
  if (mesh === "daggers") {
    return (
      <group rotation={[0, 0, off ? 0.4 : -0.4]}>
        <mesh position={[0, 0.12, 0]}>
          <boxGeometry args={[0.018, 0.22, 0.008]} />
          <Mat spec={style.metal} />
        </mesh>
      </group>
    );
  }
  if (mesh === "spear") {
    return (
      <group>
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 1.15, 8]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[0, 1.14, 0]}>
          <coneGeometry args={[0.03, 0.14, 8]} />
          <Mat spec={style.accent} />
        </mesh>
      </group>
    );
  }
  if (mesh === "needle") {
    return (
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.008, 0.006, 0.85, 8]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "staff") {
    return (
      <group>
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.016, 0.016, 0.95, 8]} />
          <Mat spec={style.cloth} />
        </mesh>
        <mesh position={[0, 0.95, 0]}>
          <icosahedronGeometry args={[0.055, 0]} />
          <Mat spec={style.aura} />
        </mesh>
      </group>
    );
  }
  if (mesh === "tome") {
    return (
      <mesh position={[0.04, 0.08, 0.06]} rotation={[0.2, 0.4, 0.2]}>
        <boxGeometry args={[0.09, 0.12, 0.03]} />
        <Mat spec={style.cloth} />
      </mesh>
    );
  }
  if (mesh === "scythe") {
    return (
      <group>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.014, 0.014, 1.05, 8]} />
          <Mat spec={style.metal} />
        </mesh>
        <mesh position={[0.14, 0.98, 0]} rotation={[0, 0, 1.1]}>
          <boxGeometry args={[0.28, 0.06, 0.012]} />
          <Mat spec={style.accent} />
        </mesh>
      </group>
    );
  }
  if (mesh === "gauntlets") {
    return (
      <mesh>
        <boxGeometry args={[0.08, 0.08, 0.09]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "bow") {
    return (
      <group rotation={[0, 0, 0.2]}>
        <mesh rotation={[0, 0, 0.5]} position={[0, 0.16, 0]}>
          <torusGeometry args={[0.18, 0.01, 6, 12, Math.PI]} />
          <Mat spec={style.metal} />
        </mesh>
      </group>
    );
  }
  if (mesh === "shield") {
    return (
      <mesh position={[0.04, 0.06, 0.04]} rotation={[0.1, 0.4, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.03, 12]} />
        <Mat spec={style.metal} />
      </mesh>
    );
  }
  if (mesh === "handlantern") {
    return (
      <group position={[0.02, 0.08, 0.04]}>
        <mesh>
          <sphereGeometry args={[0.045, 12, 10]} />
          <Mat spec={style.aura} />
        </mesh>
        <pointLight color={style.aura.color} intensity={0.9} distance={2.2} />
      </group>
    );
  }
  if (mesh === "orb") {
    return (
      <mesh position={[0.03, 0.1, 0.05]}>
        <sphereGeometry args={[0.05, 12, 10]} />
        <Mat spec={style.aura} />
      </mesh>
    );
  }
  return null;
}
