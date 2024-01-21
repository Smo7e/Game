import React from "react";
import { FRIENDS2 } from "../../FriendsLobby2";


interface ITechguyLobbyFriends2 {
    friends2: Function;
}

const TechguyLobbyFriends2: React.FC<ITechguyLobbyFriends2> = ({ friends2 }) => {
  return (
      <div>
        <button onClick={() => friends2(FRIENDS2.SPORTIKFRIENDS2)} className="arrow-2-friends2"></button>
        <button onClick={() => friends2(FRIENDS2.HUMANITARIANFRIENDS2)} className="arrow-3-friends2"></button>
        
        <div className="image-techguy-friends2">
            <button className="button-friends2">&lt;Технарь&gt;</button>
            <button className="notready-friends2">Не готов</button>    
            <button className="ready-friends2">Готов</button>    
        </div>
      </div>
    );
};

export default TechguyLobbyFriends2;

