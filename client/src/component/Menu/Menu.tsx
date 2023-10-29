import React from "react";
import logo from "./image/logo.png";
import { EPAGES } from "../../App"; 

import "./Menu.css"; 
 
interface IMenuProps {
  epages: Function;

}
 
const Menu: React.FC<IMenuProps> = ({ epages }) => {
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
