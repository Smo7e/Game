import React from "react";

import { HOST } from "./config";

import { Server } from "./modules";

import "./App.css";
import Game from "./component/Game/Game";

export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
    const server = new Server(HOST);

    return <ServerContext.Provider value={server}></ServerContext.Provider>;
};

export default App;
