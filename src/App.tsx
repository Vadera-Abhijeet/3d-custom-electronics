import { Canvas, useThree } from "@react-three/fiber";
import Lamp from "./Lamp";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { ChromePicker, ColorResult } from "react-color";
import { useMemo, useState } from "react";
import * as THREE from "three";
import Select from "react-select";
import { Bulb } from "./Bulb";
import { WaterManholeCover } from "./WaterManholeCover";
import { Tree } from "./tree";
import { Karken } from "./Karken";
import { Car } from "./Car";
import { Saske } from "./Saske";
import { Toggle } from "./Toggle";

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}

const options = [
  { value: "toggle", label: "Toggle" },
  // { value: "lamp", label: "Lamp" },
  // { value: "bulb", label: "Bulb" },
  // { value: "waterManholeCover", label: "Water Manhole Cover" },
  // { value: "tree", label: "Tree" },
  // { value: "karken", label: "Karken" },
  // { value: "car", label: "Car" },
  // { value: "saske", label: "Saske" },
];

function createSolidColorTexture(color) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Fill with solid color
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
}

function createGradientTexture(colorTop, colorBottom) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, colorTop);
  gradient.addColorStop(1, colorBottom);

  // Fill with gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
}

function createPatternTexture(text: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Draw pattern
  ctx.fillStyle = "#ffffff"; // Background color (white)
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffcc00"; // Rectangle color (yellow)
  const rectX = 50;
  const rectY = 50;
  const rectWidth = 100;
  const rectHeight = 100;
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  // Transform the context to fix text mirroring
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);

  // Draw text
  ctx.fillStyle = "#ffffff"; // Text color (white)
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"; // Center text vertically

  // Calculate the center of the rectangle
  const textX = canvas.width - (rectX + rectWidth / 2); // Adjust X position due to transformation
  const textY = rectY + rectHeight / 2;
  ctx.fillText(text, textX, textY);

  return new THREE.CanvasTexture(canvas);
}

export default function App() {
  const [glassColor, setGlassColor] = useState("#ffffff");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [text, setText] = useState("");

  const textureOptions = useMemo(() => {
    return [
      {
        label: "Solid Color (Yellow)",
        value: "yellow",
        texture: createSolidColorTexture("#ffcc00"),
      },
      {
        label: "Gradient (Yellow to Orange)",
        value: "gradient",
        texture: createGradientTexture("#ffcc00", "#ff5500"),
      },
      {
        label: "Pattern",
        value: "pattern",
        texture: createPatternTexture(text),
      },
      // Add more texture options as needed
    ];
  }, [text]);
  const [selectedTexture, setSelectedTexture] = useState(textureOptions[0]); // Default texture

  const dataMapper = useMemo(() => {
    return {
      toggle: <Toggle position={[0, 0, 0]} scale={20} color={glassColor} />,
      lamp: <Lamp position={[0, -1, 0]} glassColor={glassColor} />,
      bulb: (
        <Bulb
          scale={30}
          position={[0, -0.5, 0]}
          bulbColor={glassColor}
          bulbTexture={selectedTexture.texture}
        />
      ),
      waterManholeCover: (
        <WaterManholeCover
          scale={5}
          position={[0, -0.5, 0]}
          bulbColor={glassColor}
        />
      ),
      tree: <Tree position={[0, -2.5, 0]} bulbColor={glassColor} />,
      karken: (
        <Karken scale={0.1} position={[0, -0.7, 0]} logoColor={glassColor} />
      ),
      car: <Car position={[0, -0.5, 0]} logoColor={glassColor} />,
      saske: <Saske />,
    };
  }, [glassColor, selectedTexture]);

  const handleGlassColorChange = (color: ColorResult) => {
    setGlassColor(color.hex);
  };

  return (
    <div className="wrapper">
      <div className="configurator">
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />

        {selectedOption.value === "bulb" && (
          <>
            <h3>Select Texture:</h3>
            <Select
              value={selectedTexture}
              options={textureOptions}
              onChange={setSelectedTexture}
            />
            <br />
            <label htmlFor="text-input">Text on Bulb:</label>
            <br />
            <input
              type="text"
              id="text-input"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
          </>
        )}
        <div>
          <p>Color</p>
          <ChromePicker color={glassColor} onChange={handleGlassColorChange} />
        </div>
      </div>
      <Canvas style={{ height: "100vh", width: "70%" }}>
        <ambientLight />
        <pointLight position={[-3, -2, 3]} intensity={150} />
        {/* <pointLight position={[-3, -3, 2]} /> */}
        <Controls />

        {dataMapper[selectedOption.value]}
        {/* <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
        </Float> */}
        <ContactShadows position={[0, -2.5, 0]} blur={3} scale={30} far={5} />
      </Canvas>
    </div>
  );
}
