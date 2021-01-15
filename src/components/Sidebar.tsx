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
          <p className="sidebar_server">
            <b>{server.name}</b>
          </p>
        ))}
      </div>


      <b>Stopped Servers</b>
      <div className="sidebar_container">
        {servers.map((server) => {
          return (
            <p className="sidebar_server">
              <b>{server.name}</b>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
