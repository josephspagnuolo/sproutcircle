"use client";

import { PresentationControls, OrbitControls, RoundedBox, Torus, Environment } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh, TextureLoader } from "three";

export default function Kords() {
  const inputRef = useRef<any>(null);
  const [image, setImage] = useState<any>(null);
  const [imageURL, setImageURL] = useState<any>(null);
  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file)
      setImageURL(URL.createObjectURL(file));
    }
  };

  function KordsObject() {
    const meshRef1 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef1.current.rotation.x = 0.6;
    });
    const meshRef2 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef2.current.rotation.x = 0.6;
    });
    const meshRef3 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef3.current.rotation.x = 0.6;
    });
    const meshRef4 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef4.current.rotation.x = 0.6;
      meshRef4.current.position.z = 0.75;
      meshRef4.current.position.y = -0.55;
      meshRef4.current.position.x = 14;
    });
    const meshRef5 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef5.current.rotation.x = 0.6;
      meshRef5.current.position.z = -0.75;
      meshRef5.current.position.y = 0.55;
      meshRef5.current.position.x = 14;
    });
    const meshRef6 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef6.current.rotation.x = 0.6;
      meshRef6.current.rotation.z = 1.57;
      meshRef6.current.position.x = -3.455;
      meshRef6.current.position.y = -0.55;
      meshRef6.current.position.z = 0.75;
    });
    const meshRef7 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef7.current.rotation.x = 0.6;
      meshRef7.current.rotation.z = 1.57;
      meshRef7.current.position.x = -3.455;
      meshRef7.current.position.y = 0.55;
      meshRef7.current.position.z = -0.75;
    });
    const meshRef8 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef8.current.rotation.x = 0.6;
      meshRef8.current.rotation.z = 1.57;
      meshRef8.current.position.x = -2.5;
      meshRef8.current.position.y = 0.55;
      meshRef8.current.position.z = -0.75;
    });
    const meshRef9 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef9.current.rotation.x = 0.6;
      meshRef9.current.rotation.z = 1.57;
      meshRef9.current.position.x = -2.5;
      meshRef9.current.position.y = -0.55;
      meshRef9.current.position.z = 0.75;
    });
    const meshRef10 = useRef<Mesh>(null!);
    useFrame((state, delta) => {
      meshRef10.current.rotation.x = 2.17;
      meshRef10.current.position.z = 0.355;
      meshRef10.current.position.y = 0.52;
    });
    const texture1 = useLoader(TextureLoader, (imageURL ? imageURL : "/logo.jpg") as string);
    return (
      <group dispose={null}>
        <mesh ref={meshRef1}>
          <cylinderGeometry args={[1.5, 1.5, 1.191]} />
          <meshStandardMaterial color="white" attach="material-0" />
          <meshStandardMaterial color="white" attach="material-2" />
          <meshStandardMaterial map={texture1} attach="material-1" />
        </mesh>
        <mesh ref={meshRef2}>
          <cylinderGeometry args={[1.68, 1.68, 1.189]} />
          <meshStandardMaterial color="#c4c4c4" />
        </mesh>
        <mesh ref={meshRef3}>
          <cylinderGeometry args={[1.525, 1.525, 1.19]} />
          <meshStandardMaterial color="grey" />
        </mesh>
        <mesh ref={meshRef4}>
          <RoundedBox
            args={[33, 0.3, 0.9]}
            radius={0.1}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
          >
            <meshPhongMaterial color="black" />
          </RoundedBox>
        </mesh>
        <mesh ref={meshRef5}>
          <RoundedBox
            args={[33, 0.3, 0.9]}
            radius={0.1}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
          >
            <meshPhongMaterial color="black" />
          </RoundedBox>
        </mesh>
        <mesh ref={meshRef6}>
          <cylinderGeometry args={[0.42, 0.42, 1.9]} />
          <meshStandardMaterial color="#white" metalness={1} roughness={0.2} />
        </mesh>
        <mesh ref={meshRef7}>
          <cylinderGeometry args={[0.42, 0.42, 1.9]} />
          <meshStandardMaterial color="#white" metalness={1} roughness={0.2} />
        </mesh>
        <mesh ref={meshRef8}>
          <sphereGeometry args={[0.37]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh ref={meshRef9}>
          <sphereGeometry args={[0.37]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh ref={meshRef10}>
          <torusGeometry args={[1.59, 0.1, 3, 500]} />
          <meshStandardMaterial color="#c4c4c4" />
        </mesh>
      </group>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center border-2 border-black rounded-xl w-full md:w-1/2'>
      <div className="h-[560px] w-full md:w-1/2">
        <Canvas shadows className="touch-none">
          <Environment preset="forest" />
          <ambientLight intensity={2} />
          <directionalLight intensity={2} position={[2, 1, 1]} />
          <PresentationControls enabled={false} global rotation={[1.57, 1.57, 0]}>
            <KordsObject />
          </PresentationControls>
          <OrbitControls enableZoom={false} enablePan={false} rotation={[1.57, 1.57, 0]}
            minAzimuthAngle={-Math.PI / 3 + 0.6}
            maxAzimuthAngle={Math.PI / 3 + 0.6}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 4} />
        </Canvas>
      </div >
      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current?.click()}
        className="my-3 h-12 rounded-md bg-[#799e29] hover:bg-[#556b2f] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-center">
        Select Image
      </button>
    </div>
  );
}
