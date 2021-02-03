/**
 * @parentComponent app
 * @description Holds functionality to create a new server and update server config
**/

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverManagerCreateServer, serverManagerStopServer, serverManagerStartServer, removeServer } from '@/store/actions/serversActions';
import InputText from './input/InputText';
import { RootState } from '@/store/reducers';

function ServerForm() {
  const [name, updateName] = useState('New Server');
  const [port, updatePort] = useState(3000);
  const [protocol, updateProtocol] = useState('websocket');
  const currentServerId = useSelector((store: RootState) => store.navigation.currentServerId);
  // @ts-ignore
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

  const buttonDisplay: any = [];
  if (!currentServerId) {
    buttonDisplay.push(
      <button
        type="button"
        className="button button_special"
        key = '5'
        onClick={createServerHandler}>
        Create Server
      </button>
    )
  } else {
    if (servers[currentServerId].status === "RUNNING") {
      buttonDisplay.push(
        <button
          className="button button_special"
          key = '6'
          onClick={() => { dispatch(serverManagerStopServer(currentServerId)) }}
        >
          Stop Server
        </button>
      )
    } else {
      buttonDisplay.push(
        <button className="button button_special" key = '7' onClick={startServerHandler}>
          Start Server
        </button>
      )
      buttonDisplay.push(
        <button className="button remove" key = '8' onClick={() => { dispatch(removeServer(currentServerId)) }}>
          Remove Server
      </button>)
    }
  }

  return (
    <div className="server-configuration">
      <form className="server-form">
        <InputText
          key = '1'
          label="Name"
          value={currentServerId ? servers[currentServerId].name : name}
          onChange={(e: any) => updateName(e.target.value)}
        />
        <InputText
          key = '2'
          label="Port"
          value={currentServerId ? servers[currentServerId].port : port}
          onChange={(e: any) => updatePort(e.target.value)}
        />
        <div className="radio-container">
          <span className="title">Protocol</span>
          <div className="radio" key = '3' >
            <input
              name="protocol" type="radio" id="websocket"
              checked={currentServerId ? servers[currentServerId].protocol === "websocket" : protocol === 'websocket'} onChange={() => updateProtocol('websocket')}
            />
            <label htmlFor="websocket">WebSocket</label>
          </div>
          <div className="radio" key = '4' >
            <input name="protocol" type="radio" id="sse"
              checked={currentServerId ? servers[currentServerId].protocol === "sse" : protocol === 'sse'}
              onChange={() => updateProtocol('sse')}
            />
            <label htmlFor="sse">Server Side Events (SSE)</label>
          </div>
        </div>
      </form>

      <div className="button-container">
        {buttonDisplay}
      </div>
    </div>
  );
}

export default ServerForm;
