import React from "react";

import { HOST } from "./config";

import { Server } from "./modules";

import Login from "./Login/Login";

import "./App.css";

export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
  const server = new Server(HOST);

  return (
    <ServerContext.Provider value={server}>
      <div>
        <Login />
        </div>
    </ServerContext.Provider>
  );
};

export default App;
