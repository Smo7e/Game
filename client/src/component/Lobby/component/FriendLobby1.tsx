import { useContext } from "react";
import { EPANEL } from "../Lobby";
import { MediatorContext } from "../../../App";
interface IFriendLobby1Props {
    setPanel: Function;
    gamers: any;
}
const FriendLobby1: React.FC<IFriendLobby1Props> = ({ setPanel, gamers }) => {
    const mediator = useContext(MediatorContext);

    if (!gamers) return <></>;
    return (
        <>
            {gamers.length === 1 ? (
                <div id="test-image-rack1" className="image-rack1">
                    <div onClick={() => setPanel(EPANEL.ADDAFRIEND1)} id="test-friend" className="friend"></div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
export default FriendLobby1;
