import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import fonImage from "./image/fon.jpg";
const Scene: React.FC = () => {
    const fon = useLoader(TextureLoader, fonImage);
    return (
        <>
            <mesh position={[0, 0, -1]}>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial map={fon} transparent />
            </mesh>
        </>
    );
};

export default Scene;
