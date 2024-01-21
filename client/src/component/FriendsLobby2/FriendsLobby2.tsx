import React, { useState, useEffect, useRef } from "react";
import { EPAGES } from "../../App";
import SportikLobbyFriends2 from "./component/Friends2/SportikFriends2";
import HumanitarianLobbyFriends2 from "./component/Friends2/HumanitarianFriends2";
import TechguyLobbyFriends2 from "./component/Friends2/TechguyFriends2";
import SportikLobby from "./component/Sportik";
import ShopLobby from "./component/Shop";
import Addafriend1 from "./panel/Addafriend1";
import Addafriend2 from "./panel/Addafriend2";
import "./FriendsLobby2.css";

interface IFriendsLobby {
  epages: Function;
}
export enum FRIENDS2 {
  SPORTIKFRIENDS2,
  HUMANITARIANFRIENDS2,
  TECHGUYFRIENDS2,
}

export enum PANEL {
  ADDAFRIEND1,
  ADDAFRIEND2,
}

const FriendsLobby: React.FC<IFriendsLobby> = ({ epages }) => {
  const [panel, setPanel] = useState<PANEL>();
  const [friends2, setFriends2] = useState<FRIENDS2>(FRIENDS2.SPORTIKFRIENDS2);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setPanel(undefined);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container-Lobby">
      <button
        onClick={() => epages(EPAGES.MENU)}
        className="arrow-1"
      ></button>

      <ShopLobby />

      <div className="image-rack1">
                <div
                    onClick={() => setPanel(PANEL.ADDAFRIEND1)}
                    className="friend"
                ></div>
      </div>

        <SportikLobby  />

      {panel === PANEL.ADDAFRIEND1 ? (
        <div ref={panelRef}>
          <Addafriend1 />
        </div>
      ) : panel === PANEL.ADDAFRIEND2 ? (
        <div ref={panelRef}>
          <Addafriend2 />
        </div>
      ) : null}
      {friends2 === FRIENDS2.SPORTIKFRIENDS2 ? (
        <SportikLobbyFriends2 friends2={setFriends2} />
      ) : friends2 === FRIENDS2.HUMANITARIANFRIENDS2 ? (
        <HumanitarianLobbyFriends2 friends2={setFriends2} />
      ) : friends2 === FRIENDS2.TECHGUYFRIENDS2 ? (
        <TechguyLobbyFriends2 friends2={setFriends2} />
      ) : null}


      <button onClick={() => epages(EPAGES.GAME)} className="play">
        ИГРАТЬ
      </button>
      <button className="ready">
        Готов
      </button>
    </div>
  );
};

export default FriendsLobby;
