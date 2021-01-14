import React from "react";

function ServerForm() {
  return <div className = "serverForm">
    Server Form
    <button className = "serverForm_button">Stop Server</button>
    <form className = "serverForm_form">
      <div>
         Name: <input className = "serverForm_input"></input>
      </div>
      <div>
      Endpoint: <input className = "serverForm_input"></input>
      </div>
      <div>
      Port: <input className = "serverForm_input"></input>
      </div>
      <div>
      Protocol: <button className = "serverForm_button">X</button>
      </div>
    </form>

  </div>;
}

export default ServerForm;
