import React from "react";
import ServerForm from "./ServerForm";
import EventConfig from "./EventConfig";

function ServerConfig(props: any) {
  return (
    <div className="serverConfig">
      <ServerForm
        createServer={props.createServer}
        servers={props.servers}
        getServers={props.getServers}
      />

      {/* map over something and make EventConfig instances */}
      <EventConfig />
    </div>
  );
}

export default ServerConfig;
