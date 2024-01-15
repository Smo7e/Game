import { useFrame } from "@react-three/fiber";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { useRef } from "react";

import useSprites from "../hooks/Sprites/useSprites";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { Vector3 } from "three";
import { ServerContext } from "../../App";
const Player: React.FC = () => {
    const moveSprite = useMemo(() => useSprites("thetechguy"), []);
    const moveUp = moveSprite[3];
    const moveDown = moveSprite[1];
    const moveLeft = moveSprite[4];
    const moveRight = moveSprite[2];

    const server = useContext(ServerContext);
    const personRef = useRef<RapierRigidBody>(null);
    const [directionPlayer, setdirectionPlayer] = useState(moveDown[0]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [controls, setControls] = useState({
        w: false,
        s: false,
        a: false,
        d: false,
    });
    const [cameraPosition, setCameraPosition] = useState(new Vector3(0, 0, 14));
    const playerSpeed = 5;
    const frameSpeed = 0.1;
    useFrame((state) => {
        if (!personRef.current) return;
        const { w, a, s, d } = controls;
        if (w || a || s || d) {
            const move = new Vector3();
            if (w) {
                setCurrentFrame((frame) => (frame + frameSpeed) % moveUp.length);
                setdirectionPlayer(moveUp[Math.floor(currentFrame)]);
                move.y += playerSpeed;
            }
            if (s) {
                setCurrentFrame((frame) => (frame + frameSpeed) % moveDown.length);
                setdirectionPlayer(moveDown[Math.floor(currentFrame)]);
                move.y -= playerSpeed;
            }
            if (a) {
                setCurrentFrame((frame) => (frame + frameSpeed) % moveLeft.length);
                setdirectionPlayer(moveLeft[Math.floor(currentFrame)]);
                move.x -= playerSpeed;
            }
            if (d) {
                setCurrentFrame((frame) => (frame + frameSpeed) % moveRight.length);
                setdirectionPlayer(moveRight[Math.floor(currentFrame)]);
                personRef.current?.setLinvel(new Vector3(playerSpeed, 0, 0), true);
                move.x += playerSpeed;
            }
            personRef.current?.setLinvel(move, true);
            const cameraMove = new Vector3(personRef.current!.translation().x, personRef.current!.translation().y, 14);
            const newPosition = cameraPosition.lerp(cameraMove, 0.1);
            setCameraPosition(newPosition);
            state.camera.position.copy(newPosition);
            server.move("walk", personRef.current!.translation().x, personRef.current!.translation().y);
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
            <RigidBody gravityScale={10} position={[0, 0, 0]} ref={personRef} lockRotations mass={50}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial map={directionPlayer} transparent />
                </mesh>
            </RigidBody>
        </>
    );
};
export default Player;
