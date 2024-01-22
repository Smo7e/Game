import React, { useContext } from "react";

import { LOBBY } from "../Lobby";
import "../Lobby.css";
import { ServerContext } from "../../../App";

interface ITechguyLobbyProps {
    lobby: Function;
}

const TechguyLobby: React.FC<ITechguyLobbyProps> = ({ lobby }) => {
    const server = useContext(ServerContext);

    const leftArrowHandler = async () => {
        await server.updatePersonId(2);
        lobby(LOBBY.HUMANITARIAN);
    };
    const rightArrowHandler = async () => {
        await server.updatePersonId(0);
        lobby(LOBBY.SPORTIK);
    };
    return (
        <div>
            <button onClick={rightArrowHandler} className="arrow-2"></button>
            <button onClick={leftArrowHandler} className="arrow-3"></button>

            <div className="image-techguy">
                <button className="button">&lt;Технарь&gt;</button>
            </div>
        </div>
    );
};

export default TechguyLobby;
