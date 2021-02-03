/**
 * @parentComponent app
 * @description Left pane of application. Displays list of active/inactive servers and holds functionality to set active server in state
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentServerId } from '../store/actions/navigationActions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, red } from '@material-ui/core/colors';

function Sidebar() {
  const dispatch = useDispatch();
  // @ts-ignore
  const servers = useSelector((store) => store.servers.servers);
  // @ts-ignore
  const currentServerId = useSelector((store: RootState) => store.navigation.currentServerId);
  
  // Don't delete
  // @ts-ignore
  const store = useSelector(store => store)

  const displayServers = Object.values(servers).map((server: any) => {
    const status = server.status === "RUNNING" ? green[500] : red[500];
    return (
      <div className={"server" + (server.id === currentServerId ? " selected_server" : '')} key={server.id} onClick={() => dispatch(setCurrentServerId(server.id))}>
        <div>
          <span className="name">{server.name}</span>
          <span className="port">:{server.port}</span>
        </div>
        <FiberManualRecordIcon style={{ color: status }} />
      </div>
    );
  });

  return (
    <div className="sidebar">
      <div className="buttons-display">
        <button
          className="button_newServer"
          onClick={() => {
            dispatch(setCurrentServerId(''));
          }}
        >
          + New Server
        </button>
      </div>
      <div className="servers-display">
        <div className="title">Servers</div>
        {
          displayServers.length
            ? displayServers
            : <div className="message"><span>No configured servers</span></div>
        }
      </div>
      <div className="brand">
        <img src = '../assets/socketcast_logo.png' className = 'logo'/>
      </div>
    </div>
  );
}

export default Sidebar;
