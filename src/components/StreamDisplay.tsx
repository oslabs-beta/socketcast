import React from "react";

function StreamDisplay() {
  let inputStream = [
    { message: "something something", id: 1 },
    { message: "something something", id: 2 },
    { message: "something something", id: 3 },
  ];
  let outputStream = [
    { message: "something something", id: 1 },
    { message: "something something", id: 2 },
    { message: "something something", id: 3 },
  ];

  return (
    <div className="streamDisplay">
      <div className="streamDisplay_header">Streamdisplay event chat</div>
      <div className="streamDisplay_container">
        <div>Stream Input</div>
        <br />
        <div className="streamDisplay_outputbox">
          {inputStream.map((code) => (
            <div className="code" key={code.id}>
              message: 'something something something'
            </div>
          ))}
        </div>
        <div>
          <button className="streamDisplay_button">improvised response</button>
          <button className="streamDisplay_button">application/json</button>
        </div>
      </div>
      <div className="streamDisplay_container">
        <div>Stream Output</div>
        <br />
        <div className="streamDisplay_inputbox">
          {outputStream.map((code) => (
            <div className="code" key={code.id}>
              message: 'something something something'
            </div>
          ))}
        </div>
        <button className="streamDisplay_button">emit response</button>
      </div>
    </div>
  );
}

export default StreamDisplay;
