import React, { useState, useEffect, useRef } from "react";
import { EPAGES } from "../../App";
import SportikLobby from "./component/Sportik";
import HumanitarianLobby from "./component/Humanitarian";
import TechguyLobby from "./component/Techguy";
import ShopLobby from "./component/Shop";

import Addafriend1 from "./panel/Addafriend1";
import Addafriend2 from "./panel/Addafriend2";

import "./Lobby.css";

interface ILobbyProps {
    epages: Function;
}

export enum LOBBY {
    SPORTIK,
    HUMANITARIAN,
    TECHGUY,
}

export enum PANEL {
    ADDAFRIEND1,
    ADDAFRIEND2,
}

const Lobby: React.FC<ILobbyProps> = ({ epages }) => {
    const [lobby, setLobby] = useState<LOBBY>(LOBBY.SPORTIK);
    const [panel, setPanel] = useState<PANEL>();
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setPanel(undefined);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div id="test-container-Lobby" className="container-Lobby">
            <button
                onClick={() => epages(EPAGES.MENU)}
                id="test-arrow-1"
                className="arrow-1"
            ></button>

            <ShopLobby />

            <div id="test-image-rack1" className="image-rack1">
                <div
                    onClick={() => setPanel(PANEL.ADDAFRIEND1)}
                    id="test-friend"
                    className="friend"
                ></div>
            </div>

            {lobby === LOBBY.SPORTIK ? (
                <SportikLobby lobby={setLobby} />
            ) : lobby === LOBBY.HUMANITARIAN ? (
                <HumanitarianLobby lobby={setLobby} />
            ) : lobby === LOBBY.TECHGUY ? (
                <TechguyLobby lobby={setLobby} />
            ) : null}

            {panel === PANEL.ADDAFRIEND1 ? (
                <div ref={panelRef} id="test-Addafriend1">
                    <Addafriend1 />
                </div>
            ) : panel === PANEL.ADDAFRIEND2 ? (
                <div ref={panelRef} id="test-Addafriend2">
                    <Addafriend2 />
                </div>
            ) : null}

            <div id="test-image-rack2" className="image-rack2">
                <div
                    onClick={() => setPanel(PANEL.ADDAFRIEND2)}
                    id="test-friend-2"
                    className="friend-2"
                ></div>
            </div>

            <button onClick={() => epages(EPAGES.GAME)} id="test-play" className="play">
                ИГРАТЬ
            </button>
        </div>
    );
};

export default Lobby;
