/**
 * @parentComponent ServerConfig
 * @description Holds functionality to create a new server and update server config
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverManagerCreateServer, serverManagerStopServer, serverManagerStartServer } from '@/store/actions/serversActions';
import InputText from './input/InputText';
import { RootState } from '@/store/reducers';

function ServerForm() {
  const [name, updateName] = useState('New Server');
  const [port, updatePort] = useState(3000);
  const [protocol, updateProtocol] = useState('websocket');
  const currentServerId = useSelector((store: RootState) => store.navigation.currentServerId);
  const servers = useSelector((store: RootState) => store.servers.servers)
  const dispatch = useDispatch();

  const createServerHandler = () => {
    dispatch(serverManagerCreateServer({ port: +port, name, protocol: protocol }));
    updateName('New Server');
    updatePort(3000);
  };

  const startServerHandler = () => {
    if (!currentServerId) return
    dispatch(serverManagerStartServer({ ...servers[currentServerId] }, currentServerId))
  }

  return (
    <div className="server-configuration">
      <form className="server-form">
        <InputText
          label="Name"
          value={currentServerId ? servers[currentServerId].name : name}
          onChange={(e: any) => updateName(e.target.value)}
        />
        <InputText
          label="Port"
          value={currentServerId ? servers[currentServerId].port : port}
          onChange={(e: any) => updatePort(e.target.value)}
        />
        <div className="radio-container">
          <span className="title">Protocol</span>
          <div className="radio">
            <input
              name="protocol" type="radio" id="websocket"
              checked={currentServerId ? servers[currentServerId].protocol === "websocket" : protocol === 'websocket'} onChange={() => updateProtocol('websocket')}
            />
            <label htmlFor="websocket">WebSocket</label>
          </div>
          <div className="radio">
            <input name="protocol" type="radio" id="sse"
              checked={currentServerId ? servers[currentServerId].protocol === "sse" : protocol === 'sse'}
              onChange={() => updateProtocol('sse')}
            />
            <label htmlFor="sse">Server Side Events (SSE)</label>
          </div>
        </div>
      </form>

      <div className="button-container">
        <button
          className="button button_special"
          onClick={createServerHandler}
          type="button"
        >
          Create Server
        </button>
        <button
          className="button button_special"
          onClick={() => { dispatch(serverManagerStopServer(currentServerId)) }}
        >
          Stop Server
        </button>
        <button className="button button_special" onClick={startServerHandler}>
          Start Server
        </button>
      </div>
    </div>
  );
}

export default ServerForm;
