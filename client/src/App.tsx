import React, { useState } from "react";

import { HOST } from "./config";

import { Server } from "./modules";

import "./App.css";
import SignUp from "./component/SignUp/SignUp";
import Game from "./component/Game/Game";
export const ServerContext = React.createContext<Server>(null!);
export enum EPAGES {
    SIGNUP,
    LOGIN,
    GAME,
}

const App: React.FC = () => {
    const server = new Server(HOST);
    const [epages, setEpages] = useState<EPAGES>(EPAGES.SIGNUP);

    return (
        <ServerContext.Provider value={server}>
            {epages === EPAGES.SIGNUP ? <SignUp epages={setEpages} /> : epages === EPAGES.GAME ? <Game /> : <></>}
        </ServerContext.Provider>
    );
};

export default App;
