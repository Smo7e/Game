import React from "react";
import "../Lobby.css";
interface Addafriend2LobbyProps {
    friends: any;
}
const Addafriend2Lobby: React.FC<Addafriend2LobbyProps> = ({ friends }) => {
    console.log(friends);
    return (
        <div>
            {/* <div className="addafriend2">
                <div className="plays">Player1</div>
                <button className="plus"></button>
            </div> */}

            <div className="addafriend2">
                {friends.map((friend: any, index: number) => (
                    <div style={{ display: "flex" }}>
                        <div className="plays">{friend.name}</div>
                        <button className="plus"></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Addafriend2Lobby;
