import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { RigidBody } from "@react-three/rapier";
import Wall from "./Wall";
import floor1 from "./image/floor1.jpg";

const Scene: React.FC = () => {
    const fon = useLoader(TextureLoader, floor1);
    return (
        <>
            <RigidBody>
                <mesh position={[0, 0, -1]}>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial map={fon} transparent />
                </mesh>
            </RigidBody>

            {/* Правая стена коридор */}
            <Wall position={[4, 14.4, 0]} args={[0.5, 17, 1]} />
            <Wall position={[4, 0.8, 0]} args={[0.5, 6.2, 1]} />
            <Wall position={[4, -13.7, 0]} args={[0.5, 19, 1]} />

            {/* Левая стена коридор */}
            <Wall position={[-4, 2.2, 0]} args={[0.5, 42, 1]} />
            <Wall position={[-4, -21.8, 0]} args={[0.5, 2.5, 1]} />

            {/* Верхняя и нижняя стена коридор */}
            <Wall position={[0.3, 23, 0]} args={[7, 0.5, 1]} />
            <Wall position={[0.2, -23.6, 0]} args={[7, 0.5, 1]} />

            {/* Правая Верхняя Комната */}
            {/* Стены */}
            <Wall position={[13, 17, 0]} args={[17, 0.5, 1]} />
            <Wall position={[24, 10, 0]} args={[0.5, 15, 1]} />
            <Wall position={[14, 2.2, 0]} args={[18, 0.5, 1]} />

            {/* Парты */}
            {/* верхний ряд */}
            <Wall position={[6.5, 14, 0]} args={[1, 2.4, 1]} />
            <Wall position={[5.5, 14, 0]} args={[0.5, 2, 1]} />

            <Wall position={[9.5, 14.1, 0]} args={[1, 2.4, 1]} />
            <Wall position={[8.5, 14.1, 0]} args={[0.5, 2, 1]} />

            <Wall position={[12.2, 14.2, 0]} args={[1, 2.4, 1]} />
            <Wall position={[11.2, 14.2, 0]} args={[0.5, 2, 1]} />

            <Wall position={[15.2, 14.2, 0]} args={[1, 2.4, 1]} />
            <Wall position={[14.2, 14.2, 0]} args={[0.5, 2, 1]} />

            <Wall position={[18.2, 14.2, 0]} args={[1, 2.4, 1]} />
            <Wall position={[17.2, 14.2, 0]} args={[0.5, 2, 1]} />
            {/* средний ряд */}

            <Wall position={[6.5, 9.5, 0]} args={[1, 2.4, 1]} />
            <Wall position={[5.5, 9.5, 0]} args={[0.5, 2, 1]} />

            <Wall position={[9.5, 9.6, 0]} args={[1, 2.4, 1]} />
            <Wall position={[8.5, 9.6, 0]} args={[0.5, 2, 1]} />

            <Wall position={[12.2, 9.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[11.2, 9.7, 0]} args={[0.5, 2, 1]} />

            <Wall position={[15.2, 9.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[14.2, 9.7, 0]} args={[0.5, 2, 1]} />

            <Wall position={[18.2, 9.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[17.2, 9.7, 0]} args={[0.5, 2, 1]} />

            <Wall position={[19.5, 9.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[20.5, 9.2, 0]} args={[0.5, 0.7, 1]} />

            {/* нижний ряд */}

            <Wall position={[9.5, 5.6, 0]} args={[1, 2.4, 1]} />
            <Wall position={[8.5, 5.6, 0]} args={[0.5, 2, 1]} />

            <Wall position={[12.2, 5.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[11.2, 5.7, 0]} args={[0.5, 2, 1]} />

            <Wall position={[15.2, 5.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[14.2, 5.7, 0]} args={[0.5, 2, 1]} />

            <Wall position={[18.2, 5.7, 0]} args={[1, 2.4, 1]} />
            <Wall position={[17.2, 5.7, 0]} args={[0.5, 2, 1]} />

            {/* Декор */}
            <Wall position={[22.6, 16.5, 0]} args={[2, 2, 1]} />
            <Wall position={[4.7, 3.2, 0]} args={[0.5, 0.5, 1]} />

            {/* Правая Нижняя Комната */}
            {/* Стены */}
            <Wall position={[10.4, -1.2, 0]} args={[12, 0.5, 1]} />
            <Wall position={[16.6, -12.4, 0]} args={[0.5, 22, 1]} />
            <Wall position={[10.4, -23.6, 0]} args={[12, 0.5, 1]} />

            {/* Парты */}
            {/* Левый Ряд */}
            <Wall position={[5.4, -5.2, 0]} args={[2.4, 1.3, 1]} />
            <Wall position={[5.4, -7.75, 0]} args={[2.4, 1.3, 1]} />
            <Wall position={[5.4, -10.45, 0]} args={[2.4, 1.3, 1]} />
            <Wall position={[5.4, -13.35, 0]} args={[2.4, 1.3, 1]} />
            <Wall position={[5.4, -16.35, 0]} args={[2.4, 1.3, 1]} />
            <Wall position={[5.4, -19.7, 0]} args={[2.4, 1.3, 1]} />

            {/* Средний Ряд */}
            <Wall position={[9.95, -4.2, 0]} args={[0.5, 0.5, 1]} />

            <Wall position={[10, -5.9, 0]} args={[2.3, 2.2, 1]} />
            <Wall position={[9.95, -8.85, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[9.95, -11.45, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[9.95, -13.9, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[10.06, -16.65, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[10.11, -19.3, 0]} args={[2.3, 1.3, 1]} />

            {/* Правый Ряд */}

            <Wall position={[14, -4.1, 0]} args={[0.5, 0.5, 1]} />

            <Wall position={[14, -5.85, 0]} args={[2.2, 2.2, 1]} />
            <Wall position={[14.1, -8.75, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[14.1, -11.3, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[14.1, -13.7, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[14, -16.4, 0]} args={[2.3, 1.3, 1]} />
            <Wall position={[14, -19.2, 0]} args={[2.3, 1.3, 1]} />

            {/* Декор */}
            <Wall position={[4.75, -1.9, 0]} args={[0.5, 0.5, 1]} />

            {/* Левая Нижняя Комната */}
            {/* Стены */}
            <Wall position={[-14, -21.7, 0]} args={[20, 0.5, 1]} />
            <Wall position={[-14, -7, 0]} args={[20, 0.5, 1]} />
            <Wall position={[-24.1, -14.3, 0]} args={[0.5, 14, 1]} />

            {/* Парты */}
            {/* Верхний Ряд */}
            <Wall position={[-6.5, -9.9, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-9.3, -9.9, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-12.3, -9.9, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-15.3, -9.9, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-19.2, -9.9, 0]} args={[2.9, 2.4, 1]} />

            {/* Средний Ряд */}
            <Wall position={[-6.5, -14, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-9.3, -14, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-12.3, -14, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-15.3, -14, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-18.9, -14, 0]} args={[2.5, 2.4, 1]} />

            {/* Нижний Ряд */}
            <Wall position={[-9.5, -18.15, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-12.3, -18.15, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-15.3, -18.25, 0]} args={[1.5, 2.4, 1]} />
            <Wall position={[-18.3, -18.25, 0]} args={[1.5, 2.4, 1]} />
            {/* Декор */}
            <Wall position={[-22, -7.5, 0]} args={[1.5, 1, 1]} />
        </>
    );
};

export default Scene;
