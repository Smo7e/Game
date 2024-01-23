import { useContext, useState } from "react";
import { ELOBBY, EPANEL } from "../Lobby";
import { MediatorContext } from "../../../App";
import SportikLobby from "./SportikLobby";
import HumanitarianLobby from "./HumanitarianLobby";
import TechguyLobby from "./TechguyLobby";
interface IFriendLobby1Props {
    setPanel: Function;
    gamers: any;
}
const FriendLobby1: React.FC<IFriendLobby1Props> = ({ setPanel, gamers }) => {
    const mediator = useContext(MediatorContext);
    const [lobbyFriend1, setLobbyFriend1] = useState<ELOBBY>(ELOBBY.SPORTIK);
    if (!gamers) return <></>;
    return (
        <>
            {gamers.length === 1 ? (
                <div id="test-image-rack1" className="image-rack1">
                    <div onClick={() => setPanel(EPANEL.ADDAFRIEND1)} id="test-friend" className="friend"></div>
                </div>
            ) : gamers.length === 2 &&
              mediator.user.name === mediator.gamers[1].name &&
              lobbyFriend1 === ELOBBY.SPORTIK ? (
                <SportikLobby lobby={setLobbyFriend1} gamerNumber={1} />
            ) : gamers.length === 3 &&
              mediator.user.name === mediator.gamers[1].name &&
              lobbyFriend1 === ELOBBY.HUMANITARIAN ? (
                <HumanitarianLobby lobby={setLobbyFriend1} gamerNumber={1} />
            ) : gamers.length === 3 &&
              mediator.user.name === mediator.gamers[1].name &&
              lobbyFriend1 === ELOBBY.TECHGUY ? (
                <TechguyLobby lobby={setLobbyFriend1} gamerNumber={1} />
            ) : (
                <div id="test-image-rack1" className="image-rack1"></div>
            )}
        </>
    );
};
export default FriendLobby1;
