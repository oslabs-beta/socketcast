import React from "react";

function ServerForm() {
  return (
    <div className="serverForm">
      <div>Server Form</div>
      <br />
      <button className="serverForm_button">Stop Server</button>
      <form className="serverForm_form">
        <div className="serverForm_container">
          Name: <input className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Endpoint: <input className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Port: <input className="serverForm_input"></input>
        </div>
        <div className="serverForm_container">
          Protocol: <button className="serverForm_button">X</button>
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
