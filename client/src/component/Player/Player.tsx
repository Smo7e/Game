import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import trusLeft from "./image/trusLeft.gif";
import trusRight from "./image/trusRight.gif";
import trusUp from "./image/trusUp.gif";
import trusDown from "./image/trusDown.gif";

const Player: React.FC = () => {
    const personRef = useRef<Mesh>(null);
    const [directionPlayer, setdirectionPlayer] = useState(trusDown);
    const [controls, setControls] = useState({
        w: false,
        s: false,
        a: false,
        d: false,
    });

    useFrame(() => {
        if (controls.w) personRef.current!.position.y += 0.03;
        if (controls.s) personRef.current!.position.y -= 0.03;
        if (controls.a) personRef.current!.position.x -= 0.03;
        if (controls.d) personRef.current!.position.x += 0.03;
    });
    const keyUpHangler = (e: any) => {
        const key = e.key.toLowerCase();
        setControls((controls) => ({
            ...controls,
            [key]: true,
        }));
        if (key === "w") setdirectionPlayer(trusUp);
        if (key === "s") setdirectionPlayer(trusDown);
        if (key === "a") setdirectionPlayer(trusLeft);
        if (key === "d") setdirectionPlayer(trusRight);
    };
    const keydownHangler = (e: any) => {
        const key = e.key.toLowerCase();
        setControls((controls) => ({
            ...controls,
            [key]: false,
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
                <meshStandardMaterial map={useLoader(TextureLoader, directionPlayer)} transparent />
            </mesh>
        </>
    );
};
export default Player;
