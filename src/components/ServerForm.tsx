import React, {useState} from "react";

function ServerForm(props: any) {
  const [port, updatePort] = useState('3000')
  
  return (
    <div className="serverForm">
      <div>Server Form</div>

      <br />
      <button
        className="serverForm_button"
        onClick={() => {
          props.createServer({ port: port });
        }}
      >
        create Server
      </button>
      <button onClick={props.getServers} className="serverForm_button">
        get servers
      </button>
      <button className="serverForm_button">Stop Server</button>





      {/* FORM */}
      <form className="serverForm_form">
        <div className="serverForm_container">
          Name: <input className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Endpoint: <input className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Port: <input value = {port} onChange = {e=>updatePort(e.target.value)} className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Protocol: <button className="serverForm_button">X</button>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
