import React from "react";

function StreamDisplay() {
  return (
    <div className="streamDisplay">
      streamdisplay
      event chat
      <div className = "streamDisplay_outputbox">output box</div>
      <div>
        <button>improvised response</button>
        <button>application/json</button>
      </div>
      <div className = "streamDisplay_inputbox">input box</div>
      <button>emit response</button>
    </div>
  );
}

export default StreamDisplay;
