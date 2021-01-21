import React from 'react';
import StreamInput from './StreamInput';
// may use for conditional rendering in future
import { useSelector } from 'react-redux';

function StreamDisplay() {
  const outputStream = [
    { message: 'something something', id: 1 },
    { message: 'something something', id: 2 },
    { message: 'something something', id: 3 },
  ];



  return (
    <div className="streamDisplay">
      <StreamInput />
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
