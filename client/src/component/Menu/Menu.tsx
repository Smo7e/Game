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
      <img className="photo-button" src={logo}/>

      <div className="profile-panel"> 
        <button className="new-profile-button"></button> 
        <button className="text-button">Друзья</button> 
      </div> 

      <div className="buttons-container"> 
      <button onClick={() => epages(EPAGES.GAME)} className="button1">Играть</button>
        <button onClick={() => epages()} className="button2">Герои</button> 
        <button onClick={() => epages()} className="button3">Параметры</button> 
        <button onClick={() => epages()} className="button-account">Сменить аккаунт</button> 
      </div> 
    </div> 
  ); 
}; 
 
export default Menu;
