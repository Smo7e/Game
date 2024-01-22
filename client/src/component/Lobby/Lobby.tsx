import React, { useState, useEffect, useRef, useContext } from "react";
import { EPAGES, MediatorContext, ServerContext } from "../../App";
import SportikLobby from "./component/SportikLobby";
import HumanitarianLobby from "./component/HumanitarianLobby";
import TechguyLobby from "./component/TechguyLobby";
import ShopLobby from "./component/Shop";

import Addafriend1 from "./panel/Addafriend1";
import Addafriend2 from "./panel/Addafriend2";

import "./Lobby.css";
import FriendLobby1 from "./component/FriendLobby1";
import FriendLobby2 from "./component/FriendLobby2";

interface ILobbyProps {
    epages: Function;
}

export enum ELOBBY {
    SPORTIK,
    HUMANITARIAN,
    TECHGUY,
}

export enum EPANEL {
    ADDAFRIEND1,
    ADDAFRIEND2,
}

const Lobby: React.FC<ILobbyProps> = ({ epages }) => {
    const server = useContext(ServerContext);
    const mediator = useContext(MediatorContext);

    const [lobby, setLobby] = useState<ELOBBY>(ELOBBY.SPORTIK);
    const [panel, setPanel] = useState<EPANEL>();
    const [gamers, setGamers] = useState<any>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    const gameHadler = async () => {
        await server.getGamerById(mediator.user.id).then((result): any => {
            mediator.gamer = result;
        });

        epages(EPAGES.GAME);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setPanel(undefined);
            }
        };
        const interval = setInterval(async () => {
            await server.getGamers().then((result): any => {
                mediator.gamers = result;
                if (mediator.gamer != gamers) {
                    setGamers(result);
                }
            });
            // console.log(mediator.gamers);
        }, 800);

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            return clearInterval(interval);
        };
    }, []);

    return (
        <div id="test-container-Lobby" className="container-Lobby">
            <button onClick={() => epages(EPAGES.MENU)} id="test-arrow-1" className="arrow-1"></button>

            <ShopLobby />

            <FriendLobby1 gamers={gamers} setPanel={setPanel} />
            <FriendLobby2 gamers={gamers} setPanel={setPanel} />
            {lobby === ELOBBY.SPORTIK ? (
                <SportikLobby lobby={setLobby} gamerNumber={0} />
            ) : lobby === ELOBBY.HUMANITARIAN ? (
                <HumanitarianLobby lobby={setLobby} gamerNumber={0} />
            ) : lobby === ELOBBY.TECHGUY ? (
                <TechguyLobby lobby={setLobby} gamerNumber={0} />
            ) : (
                <></>
            )}

            {panel === EPANEL.ADDAFRIEND1 ? (
                <div ref={panelRef} id="test-Addafriend1">
                    <Addafriend1 friends={mediator.friends} />
                </div>
            ) : panel === EPANEL.ADDAFRIEND2 ? (
                <div ref={panelRef} id="test-Addafriend2">
                    <Addafriend2 friends={mediator.friends} />
                </div>
            ) : (
                <></>
            )}

            <button onClick={gameHadler} id="test-play" className="play">
                ИГРАТЬ
            </button>
        </div>
    );
};

export default Lobby;
