/**
 * @parentComponent ServerConfig
 * @description Holds functionality to create a new server and update server config
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serverManagerCreateServer } from '@/store/actions';
import InputText from './input/InputText';

function ServerForm() {
  const [port, updatePort] = useState('3000');
  const [name, updateName] = useState('server1');
  const dispatch = useDispatch();

  return (
    <div className="server-configuration">

      <div>
        <button
          className="button button_special"
          onClick={() => {
            dispatch(serverManagerCreateServer({ port: +port, name }));
          }}
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
            <input name="protocol" type="radio" id="websocket" checked />
            <label htmlFor="websocket">WebSocket</label>
          </div>
          <div className="input-container radio">
            <input name="protocol" type="radio" id="sse" />
            <label htmlFor="sse">Server Side Events (SSE)</label>
          </div>
          <div className="input-container radio">
            <input name="protocol" type="radio" id="socketio" />
            <label htmlFor="socketio">socket.io</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
