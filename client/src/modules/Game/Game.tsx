import React, { useCallback, useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ServerContext, MediatorContext } from "../../App";
import { TGamer, TMobs, TScene } from "../Server/types";
import Player from "./Player";
import Scene from "./Scene";
import { Physics } from "@react-three/rapier";
import Friends from "./Friends";
import Boss from "./Boss";
import Bullets from "./Bullets";
const Game: React.FC = () => {
    const server = useContext(ServerContext);
    const mediator = useContext(MediatorContext);
    const { GET_SCENE } = mediator.getEventTypes();
    const [infoFriends, setInfoFriends] = useState<TGamer[] | null>(null);
    const [infoMobs, setInfoMobs] = useState<TMobs[] | null>(null);

    useEffect(() => {
        server.startGameInterval();
        const getSceneHandler = (scene: TScene) => {
            if (scene.gamers != null) {
                setInfoFriends(scene.gamers);
            }
            if (scene.mobs != null) {
                setInfoMobs(scene.mobs);
            }
        };
        mediator.subscribe(GET_SCENE, getSceneHandler);

        return () => {
            mediator.unsubscribe(GET_SCENE, getSceneHandler);
            server.stopGameInterval();
        };
    });
    return (
        <Canvas
            camera={{
                position: [0, 0, 14],
                zoom: 65,
                near: 0.1,
                far: 1000,
            }}
            orthographic
        >
            <ambientLight intensity={2} position={[0, 0, 5]} />
            <Physics gravity={[0, 0, -10]}>
                <Scene />
                <Player />
                {infoFriends && infoFriends.length === 2 ? <Friends infoFriends={infoFriends} /> : <></>}

                <Boss />

                <Bullets infoFriends={infoFriends} infoMobs={infoMobs} />
            </Physics>
        </Canvas>
    );
};
export default Game;
