import React from "react";

function Sidebar() {
  let servers = [
    { name: "Server1" },
    { name: "Server2" },
    { name: "Server3" },
    { name: "Server4" },
    { name: "Server5" },
  ];
  return (
    <div className="sidebar">


      <b>Running Servers</b>
      <div className="sidebar_container">
        {servers.map((server) => (
          <div className="sidebar_server" id = 'server.name'>
            <b>{server.name}</b>
          </div>
        ))}
      </div>


      <b>Stopped Servers</b>
      <div className="sidebar_container">
        {servers.map((server) => {
          return (
            <div className="sidebar_server" id = 'server.name'>
              <b>{server.name}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
