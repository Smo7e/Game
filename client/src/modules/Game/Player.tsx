import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { sportikDown, sportikRight, sportikLeft, sportikUp } from "./index";

const Player: React.FC = () => {
    const personRef = useRef<Mesh>(null);
    const [directionPlayer, setdirectionPlayer] = useState(sportikDown[0]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [controls, setControls] = useState({
        w: false,
        s: false,
        a: false,
        d: false,
    });
    useFrame(() => {
        const { w, a, s, d } = controls;
        if (w) {
            setCurrentFrame((frame) => (frame + 0.1) % sportikUp.length);
            setdirectionPlayer(sportikUp[Math.floor(currentFrame)]);
            personRef.current!.position.y += 0.03;
        }
        if (s) {
            setCurrentFrame((frame) => (frame + 0.1) % sportikDown.length);
            setdirectionPlayer(sportikDown[Math.floor(currentFrame)]);
            personRef.current!.position.y -= 0.03;
        }
        if (a) {
            setCurrentFrame((frame) => (frame + 0.1) % sportikLeft.length);
            setdirectionPlayer(sportikLeft[Math.floor(currentFrame)]);
            personRef.current!.position.x -= 0.03;
        }
        if (d) {
            setCurrentFrame((frame) => (frame + 0.1) % sportikRight.length);
            setdirectionPlayer(sportikRight[Math.floor(currentFrame)]);
            personRef.current!.position.x += 0.03;
        }
    });
    const keydownHangler = (e: any) => {
        const key = e.code[e.code.length - 1].toLowerCase();
        setControls((controls) => ({
            ...controls,
            [key]: true,
        }));
    };
    const keyUpHangler = (e: any) => {
        const key = e.code[e.code.length - 1].toLowerCase();
        setControls((controls) => ({
            ...controls,
            [key]: false,
        }));
    };

    useEffect(() => {
        window.addEventListener("keydown", keydownHangler);
        window.addEventListener("keyup", keyUpHangler);
        return () => {
            window.removeEventListener("keydown", keydownHangler);
            window.removeEventListener("keyup", keyUpHangler);
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
