import React from 'react';

function StreamDisplay() {
  const inputStream = [
    { message: 'something something', id: 1 },
    { message: 'something something', id: 2 },
    { message: 'something something', id: 3 },
  ];
  const outputStream = [
    { message: 'something something', id: 1 },
    { message: 'something something', id: 2 },
    { message: 'something something', id: 3 },
  ];

  return (
    <div className="streamDisplay">
      <div className="streamDisplay_container streamDisplay_inputContainer">
        <div>Stream Input</div>
        <br />
        <div className="streamDisplay_inputbox">
          <div className="code">
            message: 'this is a message you can define'
          </div>
        </div>
        <div>
          <button className="streamDisplay_button" type="button">
            emit improvised response
          </button>
          <button className="streamDisplay_button" type="button">plan a response</button>
        </div>
      </div>
      <div className="streamDisplay_container streamDisplay_outputContainer">
        <div>Stream Output</div>
        <br />
        <div className="streamDisplay_outputbox">
          {outputStream.map((code) => (
            <div className="code" key={code.id}>
              message: 'something something something'
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StreamDisplay;
