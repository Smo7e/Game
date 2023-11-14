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
      <img className="photo-button" src={logo} />

      <div className="buttons-container">
        <div onClick={() => epages(EPAGES.GAME)} className="button1">
          Играть
        </div>
        <div className="button2">Герои</div>
        <div className="button3">Параметры</div>
      </div>

      <div className="profile-panel">
        <div className="user-profile"></div>
        <hr className="hr-user-profile1" />

        <div className="text-button">Друзья</div>
        <div className="your-friend-menu"></div>
        <hr className="hr-user-profile2" />

        <div className="new-profile-button"></div>
      </div>
      <button className="button-account">Сменить аккаунт</button>
    </div>
  );
};

export default Menu;
