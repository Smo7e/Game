import React from "react";
import { Canvas } from "@react-three/fiber";
const Game: React.FC = () => {
  return (
    <Canvas
      className="canvas"
      camera={{
        position: [0, 0, 14],
        zoom: 10,
        near: 0.1,
        far: 1000,
      }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </Canvas>
  );
};
export default Game;
