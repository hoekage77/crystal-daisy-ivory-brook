import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import type { Riftborn } from "@/lib/riftborn/types";
import { StickFigure } from "./stick-figure";

function Ring() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]} receiveShadow>
        <circleGeometry args={[1.35, 48]} />
        <meshStandardMaterial color="#12141a" metalness={0.4} roughness={0.55} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.008, 0]}>
        <ringGeometry args={[0.72, 0.78, 48]} />
        <meshBasicMaterial color="#8eb8c9" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[1.08, 1.12, 48]} />
        <meshBasicMaterial color="#8eb8c9" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.28} color="#9aa6b2" />
      <directionalLight
        position={[-2.4, 4.2, 3.2]}
        intensity={2.1}
        color="#e8eef2"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[3.2, 1.8, -2.4]} intensity={1.15} color="#8eb8c9" />
      <pointLight position={[0, 2.2, 1.4]} intensity={0.45} color="#c5d4de" />
    </>
  );
}

function Scene({ character }: { character: Riftborn }) {
  return (
    <>
      <color attach="background" args={["#09090b"]} />
      <fog attach="fog" args={["#09090b", 7, 16]} />
      <Lights />
      <Ring />
      <StickFigure character={character} />
      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.45}
        scale={5}
        blur={2.4}
        far={2.5}
      />
      <OrbitControls
        makeDefault
        enablePan={false}
        target={[0, 0.95, 0]}
        minDistance={1.7}
        maxDistance={5.2}
        minPolarAngle={0.35}
        maxPolarAngle={Math.PI / 2 - 0.06}
      />
    </>
  );
}

export function Studio({ character }: { character: Riftborn }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) {
    return <div className="h-full w-full bg-bg" aria-hidden />;
  }
  return (
    <Canvas
      camera={{ position: [1.85, 1.4, 2.7], fov: 32 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false }}
      shadows
    >
      <Scene character={character} />
    </Canvas>
  );
}
