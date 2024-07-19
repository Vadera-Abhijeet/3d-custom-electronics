import * as THREE from "three";
import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GLTFAction } from "./interface";

type GLTFResult = GLTF & {
  nodes: {
    lightbulb_led: THREE.Mesh;
  };
  materials: {
    lightbulb_led: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};
export function Bulb({
  bulbColor,
  bulbTexture,
  ...props
}: JSX.IntrinsicElements["group"]) {
  console.log(" bulbTexture:", bulbTexture);
  const { nodes, materials } = useGLTF(
    "/bulb/lightbulb_led_4k.gltf"
  ) as GLTFResult;

  const bulbMaterial = useMemo(() => {
    const clonedMaterial = materials.lightbulb_led.clone();
    clonedMaterial.color.set(bulbColor);
    clonedMaterial.map = bulbTexture;
    clonedMaterial.needsUpdate = true;
    return clonedMaterial;
  }, [materials.lightbulb_led, bulbColor, bulbTexture]);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.lightbulb_led.geometry} material={bulbMaterial} />
    </group>
  );
}

useGLTF.preload("/bulb/lightbulb_led_4k.gltf");
