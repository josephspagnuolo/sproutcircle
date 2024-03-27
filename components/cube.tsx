"use client";

import { ContactShadows, PresentationControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh, TextureLoader } from "three";

export default function Cube() {
  return (
    <>
      <div className="h-[600px] w-full -mt-10">
        <Canvas shadows className="touch-none">
          <ambientLight intensity={2} />
          <directionalLight intensity={3} position={[2, 1, 1]} />
          <PresentationControls enabled global rotation={[0, 0.3, 0]} polar={[-Math.PI / 2, Math.PI / 2]}>
            <CubeObject />
          </PresentationControls>
          <ContactShadows position={[0, -2.1, 0]} opacity={0.5} scale={8} blur={3} far={10} resolution={256} color="#000000" />
        </Canvas>
      </div>
    </>
  );
}

function CubeObject() {
  const meshRef = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.z += delta * 0.1;
  });
  const texture1 = useLoader(TextureLoader, "/logo.jpg");
  return (
    <group dispose={null}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.3, 2.3, 2.3]} />
        <meshStandardMaterial map={texture1} />
      </mesh>
    </group>
  );
}

