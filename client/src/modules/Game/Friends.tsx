import { useFrame } from "@react-three/fiber";
import { TGamer } from "../Server/types";
import { memo } from "react";
interface IPropsFriends {
    infoFriends: TGamer[] | null;
}
const Friends: React.FC<IPropsFriends> = memo(({ infoFriends }) => {
    if (!infoFriends) return <></>;

    return (
        <>
            {infoFriends!.length === 2 ? (
                <>
                    <mesh position={[infoFriends[1].x, infoFriends[1].y, 0]}>
                        <planeGeometry args={[1, 1]} />
                        <meshStandardMaterial color={"blue"} />
                    </mesh>
                    <mesh position={[infoFriends[0].x, infoFriends[0].y, 0]}>
                        <planeGeometry args={[1, 1]} />
                        <meshStandardMaterial color={"red"} />
                    </mesh>
                </>
            ) : infoFriends!.length === 1 ? (
                <mesh position={[infoFriends[0].x, infoFriends[0].y, 0]}>
                    <planeGeometry args={[1, 1]} />
                    <meshStandardMaterial color={"red"} />
                </mesh>
            ) : (
                <></>
            )}
        </>
    );
});
export default Friends;
