import React from "react";
import { LOBBY } from "../Lobby";
import "../Lobby.css";

interface IHumanitarianLobbyProps {
    lobby: Function;
}

const HumanitarianLobby: React.FC<IHumanitarianLobbyProps> = ({ lobby }) => {
  return (
      <div>
        <button onClick={() => lobby(LOBBY.TECHGUY)} className="arrow-2"></button>
        <button onClick={() => lobby(LOBBY.SPORTIK)} className="arrow-3"></button>
        
        <div className="image-humanitarian">
            <button className="button">&lt;Гуманитарий&gt;</button>    
        </div>

      </div>
    );
};

export default HumanitarianLobby;

