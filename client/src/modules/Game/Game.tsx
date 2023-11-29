import React, { useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ServerContext, MediatorContext } from "../../App";
import { TScene } from "../Server/types";
import Player from "./Player";
import Scene from "./Scene";

const Game: React.FC = () => {
    const server = useContext(ServerContext);
    const mediator = useContext(MediatorContext);
    const { GET_SCENE } = mediator.getEventTypes();

    useEffect(() => {
        server.startGameInterval();

        const getSceneHandler = (scene: TScene) => {
            console.log(scene);
        }

        mediator.subscribe(GET_SCENE, getSceneHandler);

        return() => {
            // отписка!!!
            // mediator.unsubscribe(GET_SCENE, getSceneHandler);
        }
    });


    return (
        <Canvas
            camera={{
                position: [0, 0, 14],
                zoom: 2,
                near: 0.1,
                far: 1000,
            }}
        >
            <ambientLight intensity={2} position={[0, 0, 5]} />
            <Scene />
            <Player />
        </Canvas>
    );
};
export default Game;
