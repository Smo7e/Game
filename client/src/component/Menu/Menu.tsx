import React from "react";
import "./Menu.css";

const Menu: React.FC = () => {
  

  return (
    
      
        <div className="mainMenu">
          <button className="photo-button"></button>

          <div className="profile-panel">
            <button className="new-profile-button"></button>
            <button className="text-button">Друзья</button>
        </div>
    
          <div className="buttons-container">
            <button className="button1">Играть</button>
            <button className="button2">Герои</button>
            <button className="button3">Параметры</button>
          </div>
        </div>
       
    
  );
};

export default Menu;