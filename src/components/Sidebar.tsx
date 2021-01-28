/**
 * @description Left pane of application. Displays list of active/inactive servers and holds functionality to set active server in state
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentServerId } from '@/store/actions';

function Sidebar() {
  const dispatch = useDispatch();
  // @ts-ignore
  const servers = useSelector((store) => store.serversReducer.servers);

  return (
    <div className="sidebar-container">
      <div className="top">
        <div className="sidebar-buttons">
          <button
            className="button secondary"
            onClick={() => {
              dispatch(setCurrentServerId(''));
            }}
          >
            + New Server
          </button>
        </div>
        <div className="server-container">
          <div className="filter-container">
            <div className="filter-name">Running</div>
            {
              Object.values(servers).length
                ? Object.values(servers).filter((item: any) => item.status === 'RUNNING').map((item: any) => (
                  <div
                    className="server-info"
                    role="button"
                    tabIndex={0}
                    title={item.name}
                    key={item.id}
                    onClick={() => { dispatch(setCurrentServerId(item.id)); }}
                  >
                    <span className="display-name">{item.name}</span>
                    <span className="port">{item.port}</span>
                  </div>
                )) : <span className="muted-info">You have no running servers.</span>
            }
          </div>
          <div className="filter-container">
            <div className="filter-name">Stopped</div>
            {
              Object.values(servers).length
                ? Object.values(servers).filter((item: any) => item.status === 'STOPPED').map((item: any) => (
                  <div
                    className="server-info"
                    role="button"
                    tabIndex={0}
                    title={item.name}
                    key={item.id}
                    onClick={() => { dispatch(setCurrentServerId(item.id)); }}
                  >
                    <span className="display-name">{item.name}</span>
                    <span className="port">{item.port}</span>
                  </div>
                )) : <span className="muted-info">You have no stopped servers.</span>

            }
            {/* <div
              className="server-info"
              role="button"
              tabIndex={0}
              title="ws://localhost/testing-a-really-long-path"
            >
              <span className="display-name">ws://localhost/testing-a-really-long-path</span>
              <span className="port">3000</span>
            </div> */}
          </div>

        </div>
      </div>

      <div className="bottom">
        <div className="brand">
          socketcast.
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
