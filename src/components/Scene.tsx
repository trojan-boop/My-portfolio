import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

type SceneProps = {
  lowPower: boolean;
};

export function Scene({ lowPower }: SceneProps) {
  const group = useRef<Group>(null);
  const parallax = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (lowPower) {
      target.current = { x: 0, y: 0 };
      return;
    }
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2 * 0.45;
      target.current.y = -(e.clientY / window.innerHeight - 0.5) * 2 * 0.32;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [lowPower]);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const tx = lowPower ? 0 : target.current.x;
    const ty = lowPower ? 0 : target.current.y;
    parallax.current.x = THREE.MathUtils.lerp(parallax.current.x, tx, 0.07);
    parallax.current.y = THREE.MathUtils.lerp(parallax.current.y, ty, 0.07);
    g.position.x = parallax.current.x;
    g.position.y = parallax.current.y;
    g.rotation.y = t * 0.08;
    g.rotation.x = Math.sin(t * 0.12) * 0.06;
  });

  const distortSpeed = lowPower ? 1.5 : 3.5;

  const starCount = useMemo(() => (lowPower ? 3000 : 8000), [lowPower]);

  return (
    <>
      <color attach="background" args={["#05070a"]} />
      <fog attach="fog" args={["#05070a", 12, 28]} />

      <ambientLight intensity={0.25} />
      <spotLight position={[8, 8, 6]} angle={0.35} penumbra={0.9} intensity={1.2} color="#a8dfff" />
      <spotLight position={[-10, -4, -2]} angle={0.5} penumbra={1} intensity={0.55} color="#4a6fa5" />

      <Environment preset="city" environmentIntensity={lowPower ? 0.35 : 0.55} />

      <group ref={group}>
        <Float speed={lowPower ? 0.8 : 1.6} rotationIntensity={0.35} floatIntensity={0.55}>
          <mesh>
            <torusKnotGeometry args={[1.15, 0.32, 196, 32]} />
            <MeshDistortMaterial
              color="#1a3a52"
              metalness={0.92}
              roughness={0.18}
              distort={lowPower ? 0.22 : 0.42}
              speed={distortSpeed}
              emissive="#0a1a28"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>

        <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.4} position={[2.4, 0.9, -1.2]}>
          <mesh>
            <icosahedronGeometry args={[0.42, 0]} />
            <meshStandardMaterial
              color="#7ee0ff"
              metalness={0.85}
              roughness={0.2}
              emissive="#2a6a88"
              emissiveIntensity={0.35}
            />
          </mesh>
        </Float>

        <Float speed={0.9} rotationIntensity={0.45} floatIntensity={0.35} position={[-2.1, -0.6, 0.4]}>
          <mesh>
            <octahedronGeometry args={[0.38, 0]} />
            <meshStandardMaterial
              color="#4d8fb8"
              metalness={0.75}
              roughness={0.28}
            />
          </mesh>
        </Float>
      </group>

      {!lowPower && (
        <Sparkles count={90} scale={14} size={2.2} speed={0.35} opacity={0.35} color="#9fdfff" />
      )}

      <Stars radius={80} depth={40} count={starCount} factor={3} saturation={0} fade speed={lowPower ? 0.3 : 0.6} />
    </>
  );
}
