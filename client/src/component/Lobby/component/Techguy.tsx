import React from "react";
import { LOBBY } from "../Lobby";
import "../Lobby.css";


interface ITechguyLobbyProps {
    lobby: Function;
}

const TechguyLobby: React.FC<ITechguyLobbyProps> = ({ lobby }) => {
  return (
      <div>
        <button onClick={() => lobby(LOBBY.SPORTIK)} className="arrow-2"></button>
        <button onClick={() => lobby(LOBBY.HUMANITARIAN)} className="arrow-3"></button>
        
        <div className="image-techguy">
            <button className="button">&lt;Технарь&gt;</button>    
        </div>
      </div>
    );
};

export default TechguyLobby;

