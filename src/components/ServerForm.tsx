/**
 * @parentComponent ServerConfig
 * @description Holds functionality to create a new server and update server config
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverManagerCreateServer, serverManagerCreateSSEServer, serverManagerStopServer } from '@/store/actions/serversActions';
import InputText from './input/InputText';
import { RootState } from '@/store/reducers';

function ServerForm() {
  const [port, updatePort] = useState(3000);
  const [name, updateName] = useState('Server1');
  const [protocol, updateProtocol] = useState('websocket');
  const currentServerId = useSelector((store: RootState) => store.navigation.currentServerId);
  const dispatch = useDispatch();

  const createServerHandler = () => {
    if (protocol === 'websocket') {
      dispatch(serverManagerCreateServer({ port: +port, name }));
    } else if (protocol === 'sse') {
      dispatch(serverManagerCreateSSEServer({ port: +port, name }));
    }
  };

  return (
    <div className="server-configuration">
      <div>
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
      </div>

      {/* FORM */}
      <form className="form-container">
        <InputText
          label="Name"
          value={name}
          onChange={(e: any) => updateName(e.target.value)}
        />
        <InputText
          label="Endpoint"
        />
        <InputText
          label="Port"
          value={port}
          onChange={(e: any) => updatePort(e.target.value)}
        />
        <div className="input-container">
          <span className="label">Protocol</span>
          <div className="input-container radio">
            <input name="protocol" type="radio" id="websocket" checked={protocol === 'websocket'} onClick={() => updateProtocol('websocket')} />
            <label htmlFor="websocket">WebSocket</label>
          </div>
          <div className="input-container radio">
            <input name="protocol" type="radio" id="sse" checked={protocol === 'sse'} onClick={() => updateProtocol('sse')} />
            <label htmlFor="sse">Server Side Events (SSE)</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
