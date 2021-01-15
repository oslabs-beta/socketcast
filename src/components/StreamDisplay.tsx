import React from "react";

function StreamDisplay() {
  return (
    <div className="streamDisplay">
      <div className="streamDisplay_header">Streamdisplay event chat</div>
      <div className="streamDisplay_container">
        <div>Stream Input</div>
        <br />
        <div className="streamDisplay_outputbox">
          <div className="code">message: 'something something something'</div>
          <div className="code">message: 'something something something'</div>
          <div className="code">message: 'something something something'</div>
          <div className="code">message: 'something something something'</div>
        </div>
        <div>
          <button className = 'streamDisplay_button'>improvised response</button>
          <button className = 'streamDisplay_button'>application/json</button>
        </div>
      </div>
      <div className="streamDisplay_container">
        <div>Stream Output</div>
        <br />
        <div className="streamDisplay_inputbox">
          <div className="code">message: 'something something something'</div>
          <div className="code">message: 'something something something'</div>
          <div className="code">message: 'something something something'</div>
        </div>
        <button className = 'streamDisplay_button'>emit response</button>
      </div>
    </div>
  );
}

export default StreamDisplay;
