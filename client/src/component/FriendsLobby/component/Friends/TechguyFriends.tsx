import React from "react";
import { FRIENDS } from "../../FriendsLobby";


interface ITechguyLobbyFriends {
    friends: Function;
}

const TechguyLobbyFriends: React.FC<ITechguyLobbyFriends> = ({ friends }) => {
  return (
      <div>
        <button onClick={() => friends(FRIENDS.SPORTIKFRIENDS)} className="arrow-2-friends"></button>
        <button onClick={() => friends(FRIENDS.HUMANITARIANFRIENDS)} className="arrow-3-friends"></button>
        
        <div className="image-techguy-friends">
            <button className="button-friends">&lt;Технарь&gt;</button>
            <button className="notready-friends">Не готов</button>    
            <button className="ready-friends">Готов</button>    
        </div>
      </div>
    );
};

export default TechguyLobbyFriends;

