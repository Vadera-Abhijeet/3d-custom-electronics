import { Canvas, useThree } from "@react-three/fiber";
import Lamp from "./Lamp";
import { ContactShadows, OrbitControls, useProgress } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";
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
  { value: "lamp", label: "Lamp" },
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

const Loader = ({ progress }) => {
  if (progress === 100) return null;
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner"></div>
        <div className="progress-text">Loading... {Math.round(progress)}%</div>
      </div>
    </div>
  );
};

const colors = [
  { color: "#E7C780", texturePath: "/Toggle/textures/6.png" },
  { color: "#A78251", texturePath: "/Toggle/textures/2.png" },
  { color: "#896838", texturePath: "/Toggle/textures/3.png" },
  { color: "#665232", texturePath: "/Toggle/textures/4.png" },
  { color: "#332314", texturePath: "/Toggle/textures/5.png" },
];

export default function App() {
  const [glassColor, setGlassColor] = useState(colors[0].color);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [text, setText] = useState("");

  const { progress } = useProgress();

  const dataMapper = useMemo(() => {
    return {
      toggle: (
        <Toggle
          position={[0, 0, 0]}
          scale={20}
          color={glassColor}
          texturePath={selectedColor.texturePath}
        />
      ),
      lamp: <Lamp position={[0, -1, 0]} glassColor={glassColor} />,
      // bulb: (
      //   <Bulb
      //     scale={30}
      //     position={[0, -0.5, 0]}
      //     bulbColor={glassColor}
      //     bulbTexture={selectedTexture.texture}
      //   />
      // ),
      // waterManholeCover: (
      //   <WaterManholeCover
      //     scale={5}
      //     position={[0, -0.5, 0]}
      //     bulbColor={glassColor}
      //   />
      // ),
      // tree: <Tree position={[0, -2.5, 0]} bulbColor={glassColor} />,
      // karken: (
      //   <Karken scale={0.1} position={[0, -0.7, 0]} logoColor={glassColor} />
      // ),
      // car: <Car position={[0, -0.5, 0]} logoColor={glassColor} />,
      // saske: <Saske />,
    };
  }, [glassColor, selectedColor]);

  // const handleGlassColorChange = (color: ColorResult) => {
  //   setGlassColor(color.hex);
  // };

  return (
    <div className="wrapper">
      <div className="configurator">
        <h1>Configurator </h1>
        <hr />
        <h3>Select Model:</h3>
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />

        {/* {selectedOption.value === "bulb" && (
          <>
            <label htmlFor="text-input">Text on Bulb:</label>
            <br />
            <input
              type="text"
              id="text-input"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
          </>
        )} */}
        <div>
          <h3>Select Color:</h3>
          <div className="color-btn-wrapper">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={`color-btn${
                    glassColor === color.color ? "-active" : ""
                  }`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => {
                    setGlassColor(color.color);
                    setSelectedColor(color);
                  }}
                ></button>
              );
            })}
          </div>
          {/* <ChromePicker color={glassColor} onChange={handleGlassColorChange} /> */}
        </div>
      </div>
      <div style={{ width: "70%", position: "relative" }}>
        <Loader progress={progress} />
        <Canvas style={{ height: "100vh", width: "100%" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={4} />
          <directionalLight position={[-5, 5, 5]} intensity={4} />
          <directionalLight position={[5, -5, 5]} intensity={4} />
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <directionalLight position={[5, 5, -5]} intensity={4} />
          <directionalLight position={[-5, 5, -5]} intensity={4} />
          <pointLight position={[0, 0, 0]} intensity={0.5} />
          <hemisphereLight
            skyColor={"white"}
            groundColor={"black"}
            intensity={0.5}
          />

          <Suspense fallback={null}>
            {dataMapper[selectedOption.value]}
          </Suspense>
          <OrbitControls />
          {/* <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
        </Float> */}
          <ContactShadows position={[0, -2.5, 0]} blur={3} scale={10} far={5} />
        </Canvas>
      </div>
    </div>
  );
}
