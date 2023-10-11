import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Scene } from "three";
const Player: React.FC = () => {
  const boxRef = useRef(null);
  const { scene } = useThree();
  console.log(scene);
  const handleKeyDown = (event: any) => {
    console.log(event);
  };
  useFrame(() => {
    // Добавляем обработчик событий на нажатие клавиш
    scene.addEventListener("keydown", handleKeyDown);
  });
  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
export default Player;
