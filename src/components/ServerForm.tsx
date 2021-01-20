import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serverManagerCreateServer, getServers } from "@/actions/actions";

function ServerForm() {
  const [port, updatePort] = useState("3000");
  const [name, updateName] = useState("server1");
  const dispatch = useDispatch();

  return (
    <div className="serverForm">
      <div>Server Form</div>

      <br />
      <div>
        <button
          className="serverForm_button"
          onClick={() => {
            dispatch(serverManagerCreateServer({ port: +port, name: name }));
          }}
        >
          Create Server
        </button>
        <button className="serverForm_button">Stop Server</button>
        <button
          onClick={() => {
            console.log(dispatch(getServers()));
          }}
          className="serverForm_button"
        >
          Log Servers
        </button>
      </div>

      {/* FORM */}
      <form className="serverForm_form">
        <div className="serverForm_container">
          Name:{" "}
          <input
            value={name}
            onChange={(e) => updateName(e.target.value)}
            className="serverForm_input"
          ></input>
        </div>
        <div className="serverForm_container">
          Endpoint: <input className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Port:{" "}
          <input
            value={port}
            onChange={(e) => updatePort(e.target.value)}
            className="serverForm_input"
          ></input>
        </div>
        <div className="serverForm_container">
          Protocol: <button className="serverForm_button">X</button>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
