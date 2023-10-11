import React from "react";
import { Canvas } from "@react-three/fiber";
import Player from "../Player/Player";
const Game: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Player />
    </Canvas>
  );
};
export default Game;
