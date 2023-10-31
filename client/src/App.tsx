import React, { useState } from "react";
import { HOST, MEDIATOR } from "./config";
import { Server, Mediator, TError } from "./modules";
import SignUp from "./component/SignUp/SignUp";
import Game from "./modules/Game/Game";
import Menu from "./component/Menu/Menu";

import "./App.css";

export const ServerContext = React.createContext<Server>(null!);
export const MediatorContext = React.createContext<Mediator>(null!);

export enum EPAGES {
    SIGNUP,
    LOGIN,
    GAME,
    MENU,
}

const MainApp = () => {
    const [epages, setEpages] = useState<EPAGES>(EPAGES.SIGNUP);
    return (
        <>
            {epages === EPAGES.SIGNUP ? (
                <SignUp epages={setEpages} />
            ) : epages === EPAGES.MENU ? (
                <Menu epages={setEpages} />
            ) : epages === EPAGES.GAME ? (
                <Game />
            ) : (
                <></>
            )}
        </>
    );
};

const App: React.FC = () => {
    const mediator = new Mediator(MEDIATOR);
    const server = new Server(HOST, mediator);

    const { SERVER_ERROR } = mediator.getEventTypes();
    mediator.subscribe(SERVER_ERROR, (data: TError) => {
        console.log(data);
    });

    return (
        <MediatorContext.Provider value={mediator}>
            <ServerContext.Provider value={server}>
                <MainApp />
            </ServerContext.Provider>
        </MediatorContext.Provider>
    );
};

export default App;
