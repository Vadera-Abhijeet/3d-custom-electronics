import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface GLTFAction extends THREE.AnimationClip {
  name: string;
}

type GLTFResult = GLTF & {
  nodes: {
    Cylinder003: THREE.Mesh;
    Cylinder003_1: THREE.Mesh;
    Cylinder003_2: THREE.Mesh;
  };
  materials: {
    modern_ceiling_lamp_01_glass: THREE.MeshStandardMaterial;
    modern_ceiling_lamp_01: THREE.MeshStandardMaterial;
    modern_ceiling_globe: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export default function Lamp({
  glassColor,
  ...props
}: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/lamp/modern_ceiling_lamp_01_4k.gltf"
  ) as GLTFResult;
  // Set static colors
  materials.modern_ceiling_lamp_01_glass.color.set(glassColor);
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials.modern_ceiling_lamp_01_glass}
      />
      <mesh
        geometry={nodes.Cylinder003_1.geometry}
        material={materials.modern_ceiling_lamp_01}
      />
    </group>
  );
}

useGLTF.preload("/lamp/modern_ceiling_lamp_01_4k.gltf");
