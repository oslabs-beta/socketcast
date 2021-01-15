import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      Running Servers
      <div className="sidebar_container">
        <p>server</p>
        <p>server</p>
        <p>server</p>
      </div>
      Stopped Servers
      <div className="sidebar_container">
        <p>server</p>
        <p>server</p>
        <p>server</p>
      </div>
    </div>
  );
}

export default Sidebar;
