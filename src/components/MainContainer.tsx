import React from "react";
import ServerConfig from "./ServerConfig";
import StreamDisplay from "./StreamDisplay";

function MainContainer() {
  return (
    <div className="mainContainer">
      
      <ServerConfig />
      <StreamDisplay />
    </div>
  );
}

export default MainContainer;
