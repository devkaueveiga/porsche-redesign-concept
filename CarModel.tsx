import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CarModelProps {
  modelPath: string;
  onLoad: () => void;
}

export function CarModel({ modelPath, onLoad }: CarModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load the GLTF model
  const { scene, error: gltfError } = useGLTF(modelPath, true, true, (loader) => {
    loader.manager.onLoad = () => {
      if (!hasLoaded) {
        setHasLoaded(true);
        onLoad();
      }
    };
    loader.manager.onError = (url) => {
      setError(`Failed to load model: ${url}`);
    };
  });

  useEffect(() => {
    if (gltfError) {
      setError("Model file not found. Using fallback.");
      onLoad(); // Still call onLoad to remove loading screen
    }
  }, [gltfError, onLoad]);

  useEffect(() => {
    if (scene) {
      // Traverse the scene and apply materials enhancements
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          
          // Enable shadows
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          // Enhance materials
          if (mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial;
            
            // Make materials more reflective
            if (material.isMeshStandardMaterial) {
              material.metalness = Math.max(material.metalness || 0, 0.7);
              material.roughness = Math.min(material.roughness || 1, 0.3);
              material.envMapIntensity = 1.5;
              material.needsUpdate = true;
            }
          }
        }
      });

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;

      scene.position.x = -center.x * scale;
      scene.position.y = -center.y * scale;
      scene.position.z = -center.z * scale;
      scene.scale.setScalar(scale);
    }
  }, [scene]);

  // Add subtle hover effect
  useFrame((state) => {
    if (groupRef.current && !error) {
      const t = state.clock.elapsedTime;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
    }
  });

  // Fallback geometry if model fails to load
  if (error) {
    return (
      <group ref={groupRef}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 0.8, 4]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[1.6, 0.6, 2]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.5}
            roughness={0.3}
            opacity={0.8}
            transparent
          />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload("/models/car.glb");
