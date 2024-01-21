import React from "react";
import { FRIENDS2 } from "../../FriendsLobby2";
import "../../FriendsLobby2";

interface IHumanitarianLobbyFriends2 {
    friends2: Function;
}

const HumanitarianLobbyFriends2: React.FC<IHumanitarianLobbyFriends2> = ({ friends2 }) => {
  return (
      <div>
        <button onClick={() => friends2(FRIENDS2.TECHGUYFRIENDS2)} className="arrow-2-friends2"></button>
        <button onClick={() => friends2(FRIENDS2.SPORTIKFRIENDS2)} className="arrow-3-friends2"></button>
        
        <div className="image-humanitarian-friends2">
            <button className="button-friends2">&lt;Гуманитарий&gt;</button>    
            <button className="notready-friends2">Не готов</button>    
            <button className="ready-friends2">Готов</button>    
        </div>

      </div>
    );
};

export default HumanitarianLobbyFriends2;

