import { useFrame } from "@react-three/fiber";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";

import useSprites from "../hooks/sprites/useSprites";
import { memo, useRef } from "react";
import { Vector3 } from "three";

const Boss: React.FC = memo(() => {
    const bossRef = useRef<RapierRigidBody>(null);
    console.log(1);
    const position = [
        [
            { x: -2, y: 5 },
            { x: 0, y: 4 },
            { x: 2, y: 4.5 },
        ],
        [
            { x: -2, y: 0 },
            { x: 0, y: 0 },
            { x: 2, y: 0 },
        ],
    ];
    const Sprites = useSprites("trusov");
    function rndNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let canPosition = 1;
    let nowPosition = [0, 1];
    let newPosition = new Vector3();
    let distances = 0;
    useFrame(() => {
        if (!bossRef.current) return;

        let x;
        let y;
        if (canPosition) {
            if (rndNumber(0, 1)) {
                x = rndNumber(0, position.length - 1);
                y = nowPosition[1];
            } else {
                x = nowPosition[0];
                y = rndNumber(0, position[nowPosition[0]].length - 1);
            }
            canPosition = 0;
            nowPosition = [x, y];
            newPosition = new Vector3(position[x][y].x, position[x][y].y, 0);
        }
        const move = new Vector3();
        const bossSpeed = 4;
        const bossCoord = bossRef.current!.translation();
        const eps = 0.04;
        if (bossCoord.x <= newPosition.x) {
            move.x += bossSpeed;
        } else {
            move.x -= bossSpeed;
        }
        if (bossCoord.y <= newPosition.y) {
            move.y += bossSpeed;
        } else {
            move.y -= bossSpeed;
        }

        if (bossCoord.x + eps >= newPosition.x && bossCoord.x - eps <= newPosition.x) {
            move.x = 0;
        }
        if (bossCoord.y + eps >= newPosition.y && bossCoord.y - eps <= newPosition.y) {
            move.y = 0;
        }

        distances = Math.sqrt(Math.pow(bossCoord.x - newPosition.x, 2) + Math.pow(bossCoord.y - newPosition.y, 2));
        if (distances < 0.06) {
            canPosition = 1;
        }
        bossRef.current.setLinvel(move, true);
    });
    function CheckPosition() {
        return (
            <>
                {position[0].map((elem, key) =>
                    elem ? (
                        <mesh key={key} position={[elem.x, elem.y, 0]}>
                            <planeGeometry args={[1, 1]} />
                            <meshStandardMaterial color={"red"} />
                        </mesh>
                    ) : (
                        <></>
                    )
                )}
                {position[1].map((elem, key) =>
                    elem ? (
                        <mesh key={key} position={[elem.x, elem.y, 0]}>
                            <planeGeometry args={[1, 1]} />
                            <meshStandardMaterial color={"red"} />
                        </mesh>
                    ) : (
                        <></>
                    )
                )}
                {/* {position[2].map((elem, key) =>
                    elem ? (
                        <mesh key={key} position={[elem.x, elem.y, 0]}>
                            <planeGeometry args={[1, 1]} />
                            <meshStandardMaterial color={"red"} />
                        </mesh>
                    ) : (
                        <></>
                    )
                )}
                {position[3].map((elem, key) =>
                    elem ? (
                        <mesh key={key} position={[elem.x, elem.y, 0]}>
                            <planeGeometry args={[1, 1]} />
                            <meshStandardMaterial color={"red"} />
                        </mesh>
                    ) : (
                        <></>
                    )
                )} */}
            </>
        );
    }
    return (
        <>
            <CheckPosition />
            <RigidBody gravityScale={10} position={[-1, 2, 0]} ref={bossRef} lockRotations mass={50}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial map={Sprites[0][0]} transparent />
                </mesh>
            </RigidBody>
        </>
    );
});
export default Boss;
