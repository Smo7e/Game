import React from "react";
import { LOBBY } from "../Lobby";
import "../Lobby.css";

interface ISportikLobbyProps {
    lobby: Function;
}

const SportikLobby: React.FC<ISportikLobbyProps> = ({ lobby }) => {
  return (
      <div>
        <button onClick={() => lobby(LOBBY.HUMANITARIAN)} className="arrow-2"></button>
        <button onClick={() => lobby(LOBBY.TECHGUY)} className="arrow-3"></button>
        
        <div className="image-Sportik">
            <button className="button">&lt;Спортик&gt;</button>    
        </div>


      </div>
    );
};

export default SportikLobby;







