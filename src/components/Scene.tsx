import { useEffect, useMemo, useRef, useState } from "react";
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
  const [active, setActive] = useState(true);

  useEffect(() => {
    const onVis = () => setActive(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (lowPower) {
      target.current = { x: 0, y: 0 };
      return;
    }
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.current.x = (e.clientX / window.innerWidth - 0.5) * 2 * 0.28;
        target.current.y = -(e.clientY / window.innerHeight - 0.5) * 2 * 0.2;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [lowPower]);

  useFrame((state) => {
    if (!active) return;
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const tx = lowPower ? 0 : target.current.x;
    const ty = lowPower ? 0 : target.current.y;
    parallax.current.x = THREE.MathUtils.lerp(parallax.current.x, tx, 0.05);
    parallax.current.y = THREE.MathUtils.lerp(parallax.current.y, ty, 0.05);
    g.position.x = parallax.current.x;
    g.position.y = parallax.current.y;
    g.rotation.y = t * (lowPower ? 0.04 : 0.06);
    g.rotation.x = Math.sin(t * 0.1) * (lowPower ? 0.03 : 0.05);
  });

  const starCount = useMemo(() => (lowPower ? 1200 : 2800), [lowPower]);
  const knotSegments = lowPower ? [1.15, 0.32, 64, 16] as const : [1.15, 0.32, 100, 20] as const;

  return (
    <>
      <color attach="background" args={["#05070a"]} />
      <fog attach="fog" args={["#05070a", 12, 28]} />

      <ambientLight intensity={0.25} />
      <spotLight position={[8, 8, 6]} angle={0.35} penumbra={0.9} intensity={1.2} color="#a8dfff" />

      {!lowPower ? <Environment preset="city" environmentIntensity={0.4} /> : null}

      <group ref={group}>
        <Float speed={lowPower ? 0.6 : 1} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh>
            <torusKnotGeometry args={knotSegments} />
            <MeshDistortMaterial
              color="#1a3a52"
              metalness={0.9}
              roughness={0.2}
              distort={lowPower ? 0.15 : 0.26}
              speed={lowPower ? 1 : 1.8}
              emissive="#0a1a28"
              emissiveIntensity={0.35}
            />
          </mesh>
        </Float>

        {!lowPower ? (
          <Float speed={0.85} rotationIntensity={0.3} floatIntensity={0.3} position={[2.4, 0.9, -1.2]}>
            <mesh>
              <icosahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial
                color="#7ee0ff"
                metalness={0.85}
                roughness={0.2}
                emissive="#2a6a88"
                emissiveIntensity={0.3}
              />
            </mesh>
          </Float>
        ) : null}
      </group>

      {!lowPower ? (
        <Sparkles count={28} scale={11} size={1.6} speed={0.22} opacity={0.22} color="#9fdfff" />
      ) : null}

      <Stars radius={80} depth={40} count={starCount} factor={2.5} saturation={0} fade speed={lowPower ? 0.2 : 0.35} />
    </>
  );
}
