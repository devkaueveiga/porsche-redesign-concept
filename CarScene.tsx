import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { CarModel } from "./CarModel";
import * as THREE from "three";

interface CarSceneProps {
  modelPath: string;
  onLoad: () => void;
}

export function CarScene({ modelPath, onLoad }: CarSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Slow automatic rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[4, 2, 6]} fov={50} />

      {/* Lighting Setup - Studio Quality */}
      {/* Key Light - Main light source */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill Light - Softens shadows */}
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.5}
        color="#a8c5ff"
      />

      {/* Rim Light - Creates edge definition */}
      <directionalLight
        position={[0, 5, -8]}
        intensity={0.8}
        color="#ffd4a8"
      />

      {/* Ambient Light - Base illumination */}
      <ambientLight intensity={0.3} color="#ffffff" />

      {/* Hemisphere Light - Sky/Ground lighting */}
      <hemisphereLight
        intensity={0.4}
        color="#ffffff"
        groundColor="#080820"
      />

      {/* Spotlight for dramatic effect */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
        color="#ffffff"
      />

      {/* Environment map for reflections */}
      <Environment
        preset="city"
        background={false}
        blur={0.8}
      />

      {/* Floating car model with rotation */}
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <group ref={groupRef}>
          <CarModel modelPath={modelPath} onLoad={onLoad} />
        </group>
      </Float>

      {/* Ground contact shadows */}
      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.5}
        scale={10}
        blur={2}
        far={4}
        resolution={256}
        color="#000000"
      />

      {/* Fog for depth */}
      <fog attach="fog" args={["#000000", 10, 30]} />
    </>
  );
}
