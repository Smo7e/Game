import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import Player from "../Player/Player";
import Scene from "../Scene/Scene";
const Game: React.FC = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 14],
                zoom: 2,
                near: 0.1,
                far: 1000,
            }}
        >
            <ambientLight intensity={2} position={[0, 0, 5]} />
            <Scene />
            <Player />
        </Canvas>
    );
};
export default Game;
