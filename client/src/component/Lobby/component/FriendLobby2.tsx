import { useContext, useState } from "react";
import { ELOBBY, EPANEL } from "../Lobby";
import { MediatorContext } from "../../../App";
import SportikLobby from "./SportikLobby";
import HumanitarianLobby from "./HumanitarianLobby";
import TechguyLobby from "./TechguyLobby";
interface IFriendLobby2Props {
    setPanel: Function;
    gamers: any;
}
const FriendLobby2: React.FC<IFriendLobby2Props> = ({ setPanel, gamers }) => {
    const mediator = useContext(MediatorContext);
    const [lobbyFriend1, setLobbyFriend2] = useState<ELOBBY>(ELOBBY.SPORTIK);

    if (!gamers) return <></>;

    return (
        <>
            {gamers.length === 1 ? (
                <div id="test-image-rack2" className="image-rack2">
                    <div onClick={() => setPanel(EPANEL.ADDAFRIEND1)} id="test-friend" className="friend"></div>
                </div>
            ) : gamers.length === 3 &&
              mediator.user.name === mediator.gamers[2].name &&
              lobbyFriend1 === ELOBBY.SPORTIK ? (
                <SportikLobby lobby={setLobbyFriend2} gamerNumber={2} />
            ) : gamers.length === 3 &&
              mediator.user.name === mediator.gamers[2].name &&
              lobbyFriend1 === ELOBBY.HUMANITARIAN ? (
                <HumanitarianLobby lobby={setLobbyFriend2} gamerNumber={2} />
            ) : gamers.length === 3 &&
              mediator.user.name === mediator.gamers[2].name &&
              lobbyFriend1 === ELOBBY.TECHGUY ? (
                <TechguyLobby lobby={setLobbyFriend2} gamerNumber={2} />
            ) : (
                <div id="test-image-rack2" className="image-rack2"></div>
            )}
        </>
    );
};
export default FriendLobby2;
