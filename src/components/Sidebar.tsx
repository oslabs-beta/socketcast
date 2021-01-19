import React, {useEffect} from "react";

function Sidebar(props: any) {
  let onlineServers = [{ name: "Server1" }, { name: "Server2" }];

  let offlineServers = [
    { name: "Server3" },
    { name: "Server4" },
    { name: "Server5" },
  ];

  return (
    <div className="sidebar">
      {/* how can i get this to update? use effect? */}

      
      {Object.values(props.servers).map((item: any) => (<div key = {item.name}>{JSON.stringify(item.name)}</div>))}







      <b>Running Servers</b>
      <div className="sidebar_container">
        {onlineServers.map((server) => (
          <div className="sidebar_server" key={server.name}>
            <b>{server.name}</b>
          </div>
        ))}
      </div>

      <b>Stopped Servers</b>
      <div className="sidebar_container">
        {offlineServers.map((server) => (
          <div className="sidebar_server" key={server.name}>
            <b>{server.name}</b>
          </div>
        ))}
      </div>
      <button onClick = {()=>{console.log(props.servers)}} >Log Servers</button>
    </div>
  );
}

export default Sidebar;
