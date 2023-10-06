import React from "react";

import { HOST } from "./config";

import { Server } from "./modules";

import "./App.css";

export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
  const server = new Server(HOST);

  return (
    <ServerContext.Provider value={server}>
      <>Разметка!!!</>
    </ServerContext.Provider>
  );
};

export default App;
