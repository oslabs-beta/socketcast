import React from "react";

function Sidebar() {
  let onlineServers = [{ name: "Server1" }, { name: "Server2" }];
  let offlineServers = [
    { name: "Server3" },
    { name: "Server4" },
    { name: "Server5" },
  ];

  return (
    <div className="sidebar">
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
    </div>
  );
}

export default Sidebar;
