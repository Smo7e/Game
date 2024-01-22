import React, { useContext } from "react";

import { ELOBBY } from "../Lobby";
import "../Lobby.css";
import { ServerContext } from "../../../App";

interface IHumanitarianLobbyProps {
    lobby: Function;
    gamerNumber: number;
}

const HumanitarianLobby: React.FC<IHumanitarianLobbyProps> = ({ lobby, gamerNumber }) => {
    const server = useContext(ServerContext);

    const leftArrowHandler = async () => {
        await server.updatePersonId(0);
        lobby(ELOBBY.SPORTIK);
    };
    const rightArrowHandler = async () => {
        await server.updatePersonId(1);
        lobby(ELOBBY.TECHGUY);
    };
    return (
        <div>
            <button onClick={rightArrowHandler} className="arrow-2"></button>
            <button onClick={leftArrowHandler} className="arrow-3"></button>

            <div className="image-humanitarian">
                <button className="button">&lt;Гуманитарий&gt;</button>
            </div>
        </div>
    );
};

export default HumanitarianLobby;
