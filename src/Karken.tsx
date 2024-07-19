/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/karken/karken.gltf -t -r ./public 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
interface GLTFAction extends THREE.AnimationClip {
  name: string;
}
type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Band_cushon: THREE.Mesh;
    Body: THREE.Mesh;
    Cap_1: THREE.Mesh;
    Cap_1_1: THREE.Mesh;
    Cap_1_2: THREE.Mesh;
    Cap_2: THREE.Mesh;
    Cap_2_1: THREE.Mesh;
    Cap_2_2: THREE.Mesh;
    Center_part_rim: THREE.Mesh;
    Central_part: THREE.Mesh;
    Cushon_1: THREE.Mesh;
    Cushon_2: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Inner_part: THREE.Mesh;
    Left: THREE.Mesh;
    Left_1: THREE.Mesh;
    Logo: THREE.Mesh;
    logo: THREE.Mesh;
    Mesh: THREE.Mesh;
    Mesh_base: THREE.Mesh;
    Mesh_plain: THREE.Mesh;
    Mic_body: THREE.Mesh;
    Mic_tip: THREE.Mesh;
    Polygon: THREE.Mesh;
    Right: THREE.Mesh;
    Right_1: THREE.Mesh;
    Rounding_1: THREE.Mesh;
    Rounding_2: THREE.Mesh;
    Spring: THREE.Mesh;
    Stand_mesh: THREE.Mesh;
    Top_band: THREE.Mesh;
    Top_wire: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Carbon_weave.1"]: THREE.MeshStandardMaterial;
    ["Plastic Shiny Procedural"]: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    ["Mat.3"]: THREE.MeshStandardMaterial;
    ["Mat.6"]: THREE.MeshStandardMaterial;
    ["Mat.3_1"]: THREE.MeshStandardMaterial;
    Coarse_leather: THREE.MeshStandardMaterial;
    ["Plastic Clear Procedural"]: THREE.MeshPhysicalMaterial;
    Carbon_weave: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["Mat.5"]: THREE.MeshStandardMaterial;
    ["Mat.4"]: THREE.MeshStandardMaterial;
    ["Plastic Shiny Procedural"]: THREE.MeshStandardMaterial;
    ["Mat.3"]: THREE.MeshStandardMaterial;
    ["Fabric - Brocade"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Karken({
  logoColor,
  ...props
}: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/karken/karken.gltf") as GLTFResult;
  materials["Mat.6"].color.set(logoColor);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh
        geometry={nodes.Band_cushon.geometry}
        material={materials["Carbon_weave.1"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Body.geometry}
        material={materials["Plastic Shiny Procedural"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cap_1.geometry}
        material={materials.Chrome}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cap_1_1.geometry}
        material={materials["Mat.3"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cap_1_2.geometry}
        material={materials["Mat.6"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cap_2.geometry}
        material={materials.Chrome}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cap_2_1.geometry}
        material={materials["Mat.3"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cap_2_2.geometry}
        material={materials["Mat.6"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Center_part_rim.geometry}
        material={materials["Mat.3_1"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Central_part.geometry}
        material={materials["Mat.3"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cushon_1.geometry}
        material={materials.Coarse_leather}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cushon_2.geometry}
        material={materials.Coarse_leather}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Plastic Clear Procedural"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Inner_part.geometry}
        material={materials.Carbon_weave}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Left.geometry}
        material={materials["Plastic Shiny Procedural"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Left_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Logo.geometry}
        material={materials["Mat.6"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.logo.geometry}
        material={materials.Chrome}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Mesh.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Mesh_base.geometry}
        material={materials["Mat.5"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Mesh_plain.geometry}
        material={materials["Mat.4"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Mic_body.geometry}
        material={materials["Plastic Shiny Procedural"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Mic_tip.geometry}
        material={materials["Mat.3_1"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Polygon.geometry}
        material={materials["Plastic Shiny Procedural"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Right.geometry}
        material={materials["Plastic Shiny Procedural"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Right_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Rounding_1.geometry}
        material={materials["Mat.6"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Rounding_2.geometry}
        material={materials["Mat.6"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Spring.geometry}
        material={materials["Mat.3"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Stand_mesh.geometry}
        material={materials["Mat.3"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Top_band.geometry}
        material={materials.Coarse_leather}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Top_wire.geometry}
        material={materials["Fabric - Brocade"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/karken/karken.gltf");
