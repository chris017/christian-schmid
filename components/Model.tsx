import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"; // Import the GLTF type

// Define the extended GLTF interface
interface ExtendedGLTF extends GLTF {
  nodes: {
    [key: string]: THREE.Object3D;
  };
}

interface ModelProps {
  [key: string]: any;
}

const Model: React.FC<ModelProps> = (props) => {
  const { nodes } = useGLTF("/eth.gltf") as ExtendedGLTF; // Cast the useGLTF result to ExtendedGLTF
  
  return (
    <group {...props} dispose={null}>
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

useGLTF.preload("/eth.gltf");

export default Model;
