import React from "react";
import { FRIENDS } from "../../FriendsLobby";
import "../../FriendsLobby";

interface IHumanitarianLobbyFriends {
    friends: Function;
}

const HumanitarianLobbyFriends: React.FC<IHumanitarianLobbyFriends> = ({ friends }) => {
  return (
      <div>
        <button onClick={() => friends(FRIENDS.TECHGUYFRIENDS)} className="arrow-2-friends"></button>
        <button onClick={() => friends(FRIENDS.SPORTIKFRIENDS)} className="arrow-3-friends"></button>
        
        <div className="image-humanitarian-friends">
            <button className="button-friends">&lt;Гуманитарий&gt;</button>    
            <button className="notready-friends">Не готов</button>    
            <button className="ready-friends">Готов</button>    
        </div>

      </div>
    );
};

export default HumanitarianLobbyFriends;

