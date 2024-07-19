import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface GLTFAction extends THREE.AnimationClip {
  name: string;
}

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
  };
  materials: {
    island_tree_02: THREE.MeshStandardMaterial;
    island_tree_02_leaves: THREE.MeshStandardMaterial;
    island_tree_02_branches: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const groupRef = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "/tree/island_tree_02_4k.gltf"
  ) as GLTFResult;

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.mesh.geometry}
        material={materials.island_tree_02}
      />
      <mesh
        geometry={nodes.mesh_1.geometry}
        material={materials.island_tree_02_leaves}
      />
      <mesh
        geometry={nodes.mesh_2.geometry}
        material={materials.island_tree_02_branches}
      />
    </group>
  );
}

useGLTF.preload("/tree/island_tree_02_4k.gltf");
