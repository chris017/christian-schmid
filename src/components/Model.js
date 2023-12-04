import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Model = (props) => {
  const { nodes } = useGLTF("/eth.gltf");

  const groupRef = useRef(); // Initialize the ref with null

  let time = 0; // Initialize time variable

  useFrame((_state, delta) => {
    if (groupRef.current) {
      // Rotate the model around the Y-axis
      groupRef.current.rotation.y += (Math.PI / 20) * delta; // Adjust the rotation speed as needed
      time += delta;
      const verticalOffset = Math.sin(time) * 0.1; // Adjust the amplitude (0.5 in this case)
      groupRef.current.position.y = verticalOffset;
      groupRef.current.scale.set(1, 1, 1);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {nodes && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={new THREE.MeshNormalMaterial()}
            rotation={[-Math.PI / 2, Math.PI / 4, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={new THREE.MeshNormalMaterial()}
            position={[0, -1.345, 0]}
            rotation={[-Math.PI / 2, Math.PI / 4, 0]}
          />
        </>
      )}
    </group>
  );
};

export default Model;
