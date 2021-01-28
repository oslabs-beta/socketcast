/**
 * @parentComponent ServerConfig
 * @description Holds functionality to create a new server and update server config
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serverManagerCreateServer, serverManagerCreateSSEServer } from '@/store/actions/serversActions';
import InputText from './input/InputText';

function ServerForm() {
  const [port, updatePort] = useState(3000);
  const [name, updateName] = useState('server1');
  const [protocol, updateProtocol] = useState('websocket');
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
          <div className="input-container radio">
            <input name="protocol" type="radio" id="socketio" checked={protocol === 'socketio'} onClick={() => updateProtocol('socketio')} />
            <label htmlFor="socketio">socket.io</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
