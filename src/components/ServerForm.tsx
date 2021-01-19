import { serverManagerEmitMessage } from "@/actions/actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ServerForm(props: any) {
  const [port, updatePort] = useState("3000");
  const [name, updateName] = useState("server1");
  // START This code is for Emit POC only
  const dispatch = useDispatch();
  // @ts-ignore
  const servers = useSelector(store => store.servers.servers);
  // END

  return (
    <div className="serverForm">
      <div>Server Form</div>

      <br />
      <div>
        <button
          className="serverForm_button"
          onClick={() => {
            props.createServer({ port: port, name: name });
          }}
        >
          Create Server
        </button>
        <button onClick={() => {dispatch(serverManagerEmitMessage(Object.keys(servers)[0], 'TEST!!!!'))}} className="serverForm_button">
          EMIT MESSAGE to {Object.keys(servers)[0]}
        </button>
        <button onClick={props.getServers} className="serverForm_button">
          Get Servers
        </button>
        <button className="serverForm_button">Stop Server</button>
        <button onClick = {()=>{ console.log(props.servers)}}className="serverForm_button">Log Servers</button>
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
