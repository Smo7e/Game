import React from "react";
import { FRIENDS2 } from "../../FriendsLobby2";

interface ISportikLobbyFriends2 {
    friends2: Function;
}

const SportikLobbyFriends2: React.FC<ISportikLobbyFriends2> = ({ friends2 }) => {
  return (
      <div>
        <button onClick={() => friends2(FRIENDS2.HUMANITARIANFRIENDS2)} className="arrow-2-friends2"></button>
        <button onClick={() => friends2(FRIENDS2.TECHGUYFRIENDS2)} className="arrow-3-friends2"></button>
        
        <div className="image-Sportik-friends2">
            <button className="button-friends2">&lt;Спортик&gt;</button> 
            <button className="notready-friends2">Не готов</button>    
            <button className="ready-friends2">Готов</button>       
        </div>


      </div>
    );
};

export default SportikLobbyFriends2;







