import React, { useContext } from "react";
import { LOBBY } from "../Lobby";
import "../Lobby.css";
import { ServerContext } from "../../../App";

interface ISportikLobbyProps {
    lobby: Function;
}

const SportikLobby: React.FC<ISportikLobbyProps> = ({ lobby }) => {
    const server = useContext(ServerContext);

    const leftArrowHandler = async () => {
        await server.updatePersonId(1);
        lobby(LOBBY.TECHGUY);
    };
    const rightArrowHandler = async () => {
        await server.updatePersonId(2);
        lobby(LOBBY.HUMANITARIAN);
    };
    return (
        <div>
            <button onClick={rightArrowHandler} className="arrow-2"></button>
            <button onClick={leftArrowHandler} className="arrow-3"></button>

            <div className="image-Sportik">
                <button className="button">&lt;Спортик&gt;</button>
            </div>
        </div>
    );
};

export default SportikLobby;
