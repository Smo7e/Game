import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Mesh, MeshStandardMaterial, Texture, Vector3 } from "three";
import useSprites from "../hooks/sprites/useSprites";
import { useFrame } from "@react-three/fiber";
interface BossFriendsProps {
    infoMobs: any;
}
const BossFriends: React.FC<BossFriendsProps> = ({ infoMobs }) => {
    const bossRef = useRef<RapierRigidBody>(null);
    const bossPositionRef = useRef<Mesh>(null);
    const spriteRef = useRef<MeshStandardMaterial>(null);
    const [death, moveDown, moveRight, moveUp, moveLeft] = useSprites("trusov");
    const [currentFrame, setCurrentFrame] = useState(0);
    var frameSpeed = 0.1;
    var frameLength = 9;
    const bossSpeed = 4;
    const eps = 0.04;
    const [directionPlayer, setDirectionPlayer] = useState<Texture>(moveDown[0]);
    useFrame(() => {
        if (!bossRef.current || !infoMobs) return;
        const bossCoord = bossRef.current!.translation();
        const move = new Vector3();
        //console.log(bossCoord.x, bossCoord.y, "     ", .x-0, infoMobs.y);
        if (bossCoord.x <= infoMobs[0].x - 0) {
            move.x += bossSpeed;
        } else {
            move.x -= bossSpeed;
        }
        if (bossCoord.y <= infoMobs[0].y - 0) {
            move.y += bossSpeed;
        } else {
            move.y -= bossSpeed;
        }
        if (bossCoord.x + eps >= infoMobs[0].x - 0 && bossCoord.x - eps <= infoMobs[0].x - 0) {
            move.x = 0;
        }
        if (bossCoord.y + eps >= infoMobs[0].y - 0 && bossCoord.y - eps <= infoMobs[0].y - 0) {
            move.y = 0;
        }
        let direction = moveDown;

        if (Math.abs(infoMobs[0].y - 0 - bossCoord.y) > Math.abs(infoMobs[0].x - 0 - bossCoord.x)) {
            if (infoMobs[0].y - 0 > bossCoord.y) {
                direction = moveUp;
            } else {
                direction = moveDown;
            }
        } else {
            if (infoMobs[0].x - 0 > bossCoord.x) {
                direction = moveRight;
            } else {
                direction = moveLeft;
            }
        }
        bossRef.current.setLinvel(move, true);
        bossPositionRef.current?.position.set(bossCoord.x, bossCoord.y, 1);
        setCurrentFrame((currentFrame + frameSpeed) % frameLength);
        setDirectionPlayer(direction[Math.floor(currentFrame)]);
    });
    return (
        <>
            <RigidBody gravityScale={10} position={[8, -3, 0]} ref={bossRef} lockRotations mass={50}>
                <mesh>
                    <boxGeometry args={[0.8, 0.8, 1]} />
                    <meshStandardMaterial transparent opacity={0} />
                </mesh>
            </RigidBody>
            <mesh ref={bossPositionRef}>
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial ref={spriteRef} map={directionPlayer} transparent />
            </mesh>
        </>
    );
};
export default BossFriends;
