import React, { useContext, useEffect, useRef, useState } from "react";
import { EPAGES, MediatorContext, ServerContext } from "../../App";
import logo from "./image/logo.png";
import "./Menu.css";
import { TFriend } from "../../modules/Server/types";
interface IMenuProps {
    epages: Function;
}
const Menu: React.FC<IMenuProps> = ({ epages }) => {
    const server = useContext(ServerContext);
    const mediator = useContext(MediatorContext);

    const idRef = useRef<HTMLInputElement>(null);
    const [friends, setFriends] = useState<number[]>([]);
    const [friend, setFriend] = useState<TFriend[]>([{ id: 0, name: "У Вас нету друзей,пхахахахахха!" }]);

    const clickHandler = async () => {
        const id = idRef.current!.value;
        const result = await server.addFriend(id);

        if (result) {
            const updatedFriends = await server.getFriends();
            if (updatedFriends) {
                setFriends(updatedFriends);
            }
        }
    };

    useEffect(() => {
        const fetchFriends = async () => {
            const loadedFriends = await server.getFriends();
            if (loadedFriends) {
                const updatedFriends = await Promise.all(
                    loadedFriends.map(async (friendId) => {
                        const user = await server.getUserById(friendId);
                        if (user && typeof user === "object" && "id" in user && "name" in user) {
                            return { id: user.id, name: user.name };
                        }
                    })
                );
                mediator.friends = updatedFriends;
                setFriend(updatedFriends as TFriend[]);
            }
        };
        fetchFriends();
    }, [friends]);
    const lobbyHandler = async () => {
        await server.deleteGamers();
        await server.addGamers();
        epages(EPAGES.LOBBY);
    };
    const userSave = async () => {
        await server.getUserByToken().then((result): any => {
            mediator.user = result;
        });
    };
    userSave();

    const logoutHandler = async () => {
        await server.logout();
        epages(EPAGES.LOGIN);
    };

    return (
        <div className="mainMenu" id="test-mainMemu">
            <img className="photo-button" src={logo} id="test-logo" />

            <div className="buttons-container">
                <div onClick={lobbyHandler} className="button1" id="test-play">
                    Играть
                </div>
                <div onClick={() => epages(EPAGES.HEROES)} className="button2" id="test-heroes">
                    Герои
                </div>
                <div className="button3" id="test-settings">
                    Параметры
                </div>
            </div>

            <div className="profile-panel" id="test-profile">
                <div className="user-profile" id="test-user"></div>
                <hr className="hr-user-profile1" id="test-hr1" />

                <div className="text-button" id="test-friends">
                    Друзья
                </div>
                <div className="your-friend-menu" id="test-friend-menu">
                    {friend.map((friend, index) => (
                        <div className="your-friend" key={index}>
                            {`${friend.id}: ${friend.name}`}
                        </div>
                    ))}
                </div>
                <hr className="hr-user-profile2" id="test-hr2" />

                <div id="test-new-profile">
                    <input ref={idRef} type="text" placeholder="Введите ID друга" />
                    <button className="add-friend-button" onClick={clickHandler}>
                        Добавить друга
                    </button>
                </div>
            </div>
            <button className="button-account" id="test-change-account" onClick={logoutHandler}>
                Сменить аккаунт
            </button>
        </div>
    );
};

export default Menu;
