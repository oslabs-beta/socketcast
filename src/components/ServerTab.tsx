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
    <div className="serverTab">
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
