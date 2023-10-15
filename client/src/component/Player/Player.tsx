import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import trus from "./Trus.png";
import trusGif from "./trus.gif";

const Player: React.FC = () => {
    const colorMap = useLoader(TextureLoader, trusGif);
    const personRef = useRef<Mesh>(null);
    const [controls, setControls] = useState({
        w: false,
        s: false,
        a: false,
        d: false,
    });
    useFrame(() => {
        if (controls.w) personRef.current!.position.y += 0.01;
        if (controls.s) personRef.current!.position.y -= 0.01;
        if (controls.a) personRef.current!.position.x -= 0.01;
        if (controls.d) personRef.current!.position.x += 0.01;
    });
    const keyUpHangler = (e: any) => {
        setControls((controls) => ({
            ...controls,
            [e.key]: true,
        }));
    };
    const keydownHangler = (e: any) => {
        setControls((controls) => ({
            ...controls,
            [e.key]: false,
        }));
    };

    useEffect(() => {
        window.addEventListener("keydown", keyUpHangler);
        window.addEventListener("keyup", keydownHangler);
        return () => {
            window.removeEventListener("keydown", keyUpHangler);
            window.removeEventListener("keyup", keydownHangler);
        };
    });
    return (
        <>
            <mesh ref={personRef}>
                <planeGeometry />
                <meshStandardMaterial map={colorMap} transparent />
            </mesh>
        </>
    );
};
export default Player;
