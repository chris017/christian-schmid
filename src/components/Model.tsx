import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "@/components/theme-provider";

const Model: React.FC = (props) => {
  const gltfResult = useGLTF("/eth.gltf");
  const nodes = gltfResult.nodes || {}; // Assert the correct type for nodes

  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  let time = 0;

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (Math.PI / 20) * delta;
      time += delta;
      const verticalOffset = Math.sin(time) * 0.1;
      if (groupRef.current.position) {
        groupRef.current.position.y = verticalOffset;
      }
    }
  });

  // Function to traverse and find specific nodes by name
  const findNodeByName = (name: string): THREE.Mesh | undefined => {
    for (const nodeName of Object.keys(nodes)) {
      const node = nodes[nodeName];
      if (node instanceof THREE.Mesh && node.name === name) {
        return node;
      }
    }
    return undefined;
  };

  const plane = findNodeByName("Plane");
  const plane001 = findNodeByName("Plane001");
  const wireframeColor = theme === "dark" ? "white" : "black";

  return (
    <group ref={groupRef} {...props}>
      {plane && (
        <mesh
          castShadow
          receiveShadow
          geometry={plane.geometry}
          material={new THREE.MeshBasicMaterial({
            wireframe: true,
            color: wireframeColor,
          })}
          position={plane.position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
      )}

      {plane001 && (
        <mesh
          castShadow
          receiveShadow
          geometry={plane001.geometry}
          material={new THREE.MeshBasicMaterial({
            wireframe: true,
            color: wireframeColor,
          })}
          position={plane001.position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
      )}
    </group>
  );
};

useGLTF.preload("/eth.gltf");

export default Model;
