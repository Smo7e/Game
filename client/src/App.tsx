import React from "react";

import { HOST } from "./config";

import { Server } from "./modules";

import "./App.css";
import SignUp from "./component/SignUp/SignUp";
export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
    const server = new Server(HOST);

    return (
        <ServerContext.Provider value={server}>
            <SignUp />
        </ServerContext.Provider>
    );
};

export default App;
