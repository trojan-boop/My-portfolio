import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "./Scene";

type BackgroundCanvasProps = {
  lowPower: boolean;
};

export default function BackgroundCanvas({ lowPower }: BackgroundCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, lowPower ? 1 : 1.75]}
      frameloop="always"
      gl={{
        antialias: !lowPower,
        alpha: true,
        powerPreference: lowPower ? "default" : "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <Scene lowPower={lowPower} />
      </Suspense>
    </Canvas>
  );
}
