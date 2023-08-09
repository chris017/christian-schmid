import React from "react";
import { useGLTF } from "@react-three/drei";
import { useColorMode } from "@chakra-ui/react";
import * as THREE from "three"; // Import THREE from three package

interface ModelProps {
  [key: string]: any;
}

const Model: React.FC<ModelProps> = (props) => {
  const { nodes } = useGLTF("/eth.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={new THREE.MeshNormalMaterial()}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={new THREE.MeshNormalMaterial()}
        position={[0, -1.345, 0]}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
      >
      </mesh>
    </group>
  );
};

useGLTF.preload("/eth.gltf");

export default Model;
