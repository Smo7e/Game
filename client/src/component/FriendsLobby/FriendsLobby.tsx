import React, { useState, useEffect, useRef } from "react";
import { EPAGES } from "../../App";
import SportikLobbyFriends from "./component/Friends/SportikFriends";
import HumanitarianLobbyFriends from "./component/Friends/HumanitarianFriends";
import TechguyLobbyFriends from "./component/Friends/TechguyFriends";
import SportikLobby from "./component/Sportik";
import ShopLobby from "./component/Shop";
import Addafriend1 from "./panel/Addafriend1";
import Addafriend2 from "./panel/Addafriend2";
import "./FriendsLobby.css";

interface IFriendsLobby {
  epages: Function;
}
export enum FRIENDS {
  SPORTIKFRIENDS,
  HUMANITARIANFRIENDS,
  TECHGUYFRIENDS,
}

export enum PANEL {
  ADDAFRIEND1,
  ADDAFRIEND2,
}

const FriendsLobby: React.FC<IFriendsLobby> = ({ epages }) => {
  const [panel, setPanel] = useState<PANEL>();
  const [friends, setFriends] = useState<FRIENDS>(FRIENDS.SPORTIKFRIENDS);
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

      {friends === FRIENDS.SPORTIKFRIENDS ? (
        <SportikLobbyFriends friends={setFriends} />
      ) : friends === FRIENDS.HUMANITARIANFRIENDS ? (
        <HumanitarianLobbyFriends friends={setFriends} />
      ) : friends === FRIENDS.TECHGUYFRIENDS ? (
        <TechguyLobbyFriends friends={setFriends} />
      ) : null}

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

      <div className="image-rack2">
        <div
          onClick={() => setPanel(PANEL.ADDAFRIEND2)}
          className="friend-2"
        ></div>
      </div>

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
