import React from "react";
import ServerForm from "./ServerForm";
import ServerConfig from "./ServerConfig"
import EventForm from "./EventForm"
import EventConfig from "./EventConfig";
import { useSelector } from "react-redux";

function ServerTab() {
  // @ts-ignore
  const currentServerId = useSelector((store) => store.serversReducer.currentServerId);
  return (
    <div className="server-column">
      {currentServerId === "" ? (
        <>
          <ServerForm />
          <EventForm />
        </>
      ) : (
        <>
          <ServerConfig />
          <EventConfig />
        </>
      )}
    </div>
  );
}

export default ServerTab;
