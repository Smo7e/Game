import React, { useContext, useEffect } from "react";
import { EPAGES, MediatorContext } from "../../App";
import { TMessage } from "../../modules/Server/types";

import logo from "./image/logo.png";

import "./Menu.css";

interface IMenuProps {
  epages: Function;
}

const Menu: React.FC<IMenuProps> = ({ epages }) => {
  const mediator = useContext(MediatorContext);
  const { GET_MESSAGES } = mediator.getEventTypes();

  useEffect(() => {

    const getMessagesHandler = (messages: Array<TMessage>) => {
      console.log(messages);
    };

    mediator.subscribe(GET_MESSAGES, getMessagesHandler);

    return () => {
      mediator.unsubscribe(GET_MESSAGES, getMessagesHandler);
    };
  });



  return ( 
    <div className="mainMenu"> 
         <img className="photo-button" src={logo} id="test-logo" /> 
         
         <div className="buttons-container"> 
             <div onClick={() => epages(EPAGES.GAME)} className="button1" id="test-play">
                  Играть
             </div> 
             <div onClick={() => epages(EPAGES.HEROES)} className="button2" id="test-heroes">Герои</div> 
             <div className="button3" id="test-settings">Параметры</div> 
         </div>
         
         <div className="profile-panel" id="test-profile"> 
             <div className="user-profile" id="test-user"></div> 
            <hr className="hr-user-profile1" id="test-hr1" /> 

            <div className="text-button" id="test-friends">Друзья</div> 
            <div className="your-friend-menu" id="test-friend-menu"></div> 
            <hr className="hr-user-profile2" id="test-hr2" /> 
            
            <div className="new-profile-button" id="test-new-profile"></div>
         </div>
         <button className="button-account" id="test-change-account">Сменить аккаунт</button>
    </div>
);
};

export default Menu;
