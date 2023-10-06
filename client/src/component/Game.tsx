import * as THREE from "three";
import React, { useEffect, useRef } from "react";
const Game: React.FC = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 10000);
  camera.position.z = 5;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      //antialias: true,
      // alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  });

  return <canvas ref={canvasRef} />;
};
export default Game;
