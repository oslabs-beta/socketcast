/**
 * @description Left pane of application. Displays list of active/inactive servers and holds functionality to set active server in state 
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentServerId } from "@/store/actions";

function Sidebar() {
  const dispatch = useDispatch();
  // @ts-ignore
  const servers = useSelector((store) => store.serversReducer.servers);

  return (
    <div className="sidebar">
      <b>Servers</b>
      <div className="sidebar_container">
        {Object.values(servers).map((item: any) => (
          <div
            onClick={() => {
              dispatch(setCurrentServerId(item.id));
            }}
            className="sidebar_server"
            key={item.name}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className = "sidebar_server" onClick = {()=> {
        dispatch(setCurrentServerId(''))
      }} >+New Server</div>
    </div>
  );
}

export default Sidebar;
