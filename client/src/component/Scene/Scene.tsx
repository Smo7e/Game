import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import fonImage from "./image/fon.jpg";
const Scene: React.FC = () => {
    const fon = useLoader(TextureLoader, fonImage);
    let a = new Array(100).fill(0);
    let x = -12;
    let y = 8;
    return (
        <>
            {a.map(() => {
                {
                    y -= 2;
                    if (y === -8) {
                        y = 6;
                        x += 2;
                    }
                    return (
                        <mesh position={[x, y, -1]}>
                            <planeGeometry args={[2, 2]} />
                            <meshStandardMaterial map={fon} transparent />
                        </mesh>
                    );
                }
            })}
            {/* <mesh position={[0, 0, -1]}>
                <planeGeometry args={[2, 2]} />
                <meshStandardMaterial map={fon} transparent />
            </mesh>
            <mesh position={[2, 2, -1]}>
                <planeGeometry args={[2, 2]} />
                <meshStandardMaterial map={fon} transparent />
            </mesh> */}
        </>
    );
};

export default Scene;
