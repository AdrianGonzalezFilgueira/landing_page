import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { GradientTexture } from "@react-three/drei";

export default function Lava({ colors }: any) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.005;
  });

  return (
    <mesh ref={ref} scale={4}>
      <sphereBufferGeometry args={[0.5, 50, 80]} attach="geometry" />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={colors} // Colors need to match the number of stops
        />
      </meshBasicMaterial>
    </mesh>
  );
}
