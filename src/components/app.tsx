import React from "react";
import "./app.scss";

import Header from './Header';
import ServerConfig from './ServerConfig'
import Sidebar from './Sidebar';
import StreamDisplay from './StreamDisplay';


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app_container">
        <Sidebar />
        <ServerConfig />
        <StreamDisplay />
      </div>
    </div>
  );
};

export default App;
