import React, { useContext } from "react";

import { ELOBBY } from "../Lobby";
import "../Lobby.css";
import { ServerContext } from "../../../App";

interface ITechguyLobbyProps {
    lobby: Function;
    gamerNumber: number;
}

const TechguyLobby: React.FC<ITechguyLobbyProps> = ({ lobby, gamerNumber }) => {
    const server = useContext(ServerContext);

    const leftArrowHandler = async () => {
        await server.updatePersonId(2);
        lobby(ELOBBY.HUMANITARIAN);
    };
    const rightArrowHandler = async () => {
        await server.updatePersonId(0);
        lobby(ELOBBY.SPORTIK);
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
