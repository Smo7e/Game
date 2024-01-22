import React from "react";
import "../Lobby.css";
interface Addafriend1LobbyProps {
    friends: any;
}
const Addafriend1Lobby: React.FC<Addafriend1LobbyProps> = ({ friends }) => {
    return (
        <div>
            <div className="addafriend">
                <div className="plays">Player1</div>
                <button className="plus"></button>
            </div>
        </div>
    );
};

export default Addafriend1Lobby;
