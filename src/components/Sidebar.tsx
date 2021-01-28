/**
 * @description Left pane of application. Displays list of active/inactive servers and holds functionality to set active server in state
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentServerId } from '@/store/actions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, red } from '@material-ui/core/colors';

function Sidebar() {
  const dispatch = useDispatch();
  // @ts-ignore
  const servers = useSelector((store) => store.serversReducer.servers);

  const displayServers = Object.values(servers).map((server: any) => {
    const status = server.status === "RUNNING" ? green[500] : red[500];
    return (
      <div className="server" key={server.id} onClick={() => dispatch(setCurrentServerId(server.id))}>
        <div>
          <span className="name">{server.name}</span>
          <span className="port">:{server.port}</span>
        </div>
        <FiberManualRecordIcon style={{ color: status }} />
      </div>
    )
  });

  return (
    <div className="sidebar">
      <div className="buttons-display">
        <button
          className="button"
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
        socketcast.
      </div>
    </div>
  );
}

export default Sidebar;
