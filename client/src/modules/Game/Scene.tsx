import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import floor1 from "./image/floor1.jpg";

const Scene: React.FC = () => {
    const fon = useLoader(TextureLoader, floor1);
    return (
        <>
            <mesh position={[0, 0, -1]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial map={fon} transparent />
            </mesh>
        </>
    );
};

export default Scene;
