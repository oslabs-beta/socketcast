import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serverManagerCreateServer } from '@/store/actions';

function ServerForm() {
  const [port, updatePort] = useState('3000');
  const [name, updateName] = useState('server1');
  const dispatch = useDispatch();

  return (
    <div className="serverForm">
      <div className = "window_title">Server Form</div>

      <br />
      <div>
        <button
          className="serverForm_button"
          onClick={() => {
            dispatch(serverManagerCreateServer({ port: +port, name }));
          }}
          type="button"
        >
          Create Server
        </button>
      </div>

      {/* FORM */}
      <form className="serverForm_form">
        <div className="serverForm_container">
          Name:
          {' '}
          <input
            value={name}
            onChange={(e) => updateName(e.target.value)}
            className="serverForm_input"
          />
        </div>
        <div className="serverForm_container">
          Endpoint:
          {' '}
          <input className="serverForm_input" />
        </div>
        <div className="serverForm_container">
          Port:
          {' '}
          <input
            value={port}
            onChange={(e) => updatePort(e.target.value)}
            className="serverForm_input"
          />
        </div>
        <div className="serverForm_container">
          Protocol:
          {' '}
          <button className="serverForm_button" type="button">X</button>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
