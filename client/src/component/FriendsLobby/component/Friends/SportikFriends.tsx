import React from "react";
import { FRIENDS } from "../../FriendsLobby";

interface ISportikLobbyFriends {
    friends: Function;
}

const SportikLobbyFriends: React.FC<ISportikLobbyFriends> = ({ friends }) => {
  return (
      <div>
        <button onClick={() => friends(FRIENDS.HUMANITARIANFRIENDS)} className="arrow-2-friends"></button>
        <button onClick={() => friends(FRIENDS.TECHGUYFRIENDS)} className="arrow-3-friends"></button>
        
        <div className="image-Sportik-friends">
            <button className="button-friends">&lt;Спортик&gt;</button> 
            <button className="notready-friends">Не готов</button>    
            <button className="ready-friends">Готов</button>       
        </div>


      </div>
    );
};

export default SportikLobbyFriends;







