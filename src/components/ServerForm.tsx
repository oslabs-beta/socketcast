/**
 * @parentComponent ServerConfig
 * @description Holds functionality to create a new server and update server config
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serverManagerCreateServer } from '@/store/actions';

function ServerForm() {
  const [port, updatePort] = useState('3000');
  const [name, updateName] = useState('server1');
  const dispatch = useDispatch();

  return (
    <div className="server-configuration">
      <div className="window_title">SERVER CONFIGURATION</div>

      <br />
      <div>
        <button
          className="button primary"
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
        <div className="input-container">
          <span className="label">Name</span>
          {' '}
          <input
            type="text"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <span className="label">Endpoint</span>
          {' '}
          <input type="text" />
        </div>
        <div className="input-container">
          <span className="label">Port</span>
          {' '}
          <input
            value={port}
            onChange={(e) => updatePort(e.target.value)}
            type="text"
          />
        </div>
        <div className="input-container">
          <span className="label">Protocol</span>
          <div className="input-container">
            <input name="protocol" type="radio" id="websocket" />
            <label htmlFor="websocket">WebSocket</label>
          </div>
          <div className="input-container">
            <input name="protocol" type="radio" id="sse" />
            <label htmlFor="sse">Server Side Events (SSE)</label>
          </div>
          <div className="input-container">

            <input name="protocol" type="radio" id="socketio" />
            <label htmlFor="socketio">socket.io</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
