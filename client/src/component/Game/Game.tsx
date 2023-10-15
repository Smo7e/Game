import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
const Game: React.FC = () => {
    const colorMap = useLoader(TextureLoader, "texture.jpg");
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
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            <mesh position={[0, 4, 0]}>
                <boxGeometry />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </Canvas>
    );
};
export default Game;
