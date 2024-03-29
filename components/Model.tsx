import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from 'three/addons/loaders/GLTFLoader.js';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTheme } from "next-themes"; // Import the useTheme hook
import { useEffect, useState } from "react";


interface ModelProps {
  [key: string]: any;
}

const Model: React.FC<ModelProps> = (props) => {
  const gltf = useGLTF("/eth.gltf") as GLTF;

  const groupRef = useRef<THREE.Group>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  let time = 0;

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (Math.PI / 20) * delta;
      time += delta;
      const verticalOffset = Math.sin(time) * 0.1;
      groupRef.current.position.y = verticalOffset;
      groupRef.current.scale.set(1, 1, 1);
    }
  });

  // Function to traverse and find specific nodes by name
  const findNodeByName = (name: string): THREE.Mesh | undefined => {
    const scene = gltf.scene;
    let foundNode: THREE.Mesh | undefined;

    scene.traverse((node) => {
      if (node instanceof THREE.Mesh && node.name === name) {
        foundNode = node;
      }
    });

    return foundNode;
  };

  const plane = findNodeByName("Plane") as THREE.Mesh;
  const plane001 = findNodeByName("Plane001") as THREE.Mesh;

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    setIsDarkMode(theme === "dark"); // Update the dark mode based on the theme
  }, [theme]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {plane && (
        <mesh
          castShadow
          receiveShadow
          geometry={plane.geometry as THREE.BufferGeometry}
          material={new THREE.MeshBasicMaterial({ wireframe: true, color: isDarkMode ? "white" : "black", })}
          position={plane.position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
      )}

      {plane001 && (
        <mesh
          castShadow
          receiveShadow
          geometry={plane001.geometry as THREE.BufferGeometry}
          material={new THREE.MeshBasicMaterial({ wireframe: true, color: isDarkMode ? "white" : "black", })}
          position={plane001.position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
      )}
    </group>
  );
};

useGLTF.preload("/eth.gltf");

export default Model;