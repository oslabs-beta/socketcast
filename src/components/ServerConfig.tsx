import React from "react";
import ServerForm from "./ServerForm";
import EventConfig from "./EventConfig";

function ServerConfig(){
  return(<div>
    <ServerForm />


    {/* map over something and make EventConfig instances */}
    <EventConfig />

  </div>)
}


export default ServerConfig;