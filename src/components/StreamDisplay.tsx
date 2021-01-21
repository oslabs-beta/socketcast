import React from 'react';
import StreamInput from './StreamInput';
// may use for conditional rendering in future
import { useSelector } from 'react-redux';

function StreamDisplay() {


  //we should figure out how to fix this work-around
  // @ts-ignore
  const currentServerId = useSelector(store => store.serversReducer.currentServerId)
  // @ts-ignore
  const outputStream = useSelector(store => store.dataReducer.streams);
  
  let counter = 0


  return (
    <div className="streamDisplay">
      <StreamInput />
      <div className="streamDisplay_container streamDisplay_outputContainer">
        <div>Stream Output</div>
        <br />
        <div className="streamDisplay_outputbox">

          <button onClick = {()=>{console.log(outputStream)}} >console log data stream</button>
          <button onClick = {()=>{console.log(currentServerId)}}>console log current server id</button>

          {currentServerId && outputStream[currentServerId].map((code: string) => (
            <div className="code" key={counter++}>
              {code}
            </div>


          ))}
        </div>
      </div>
    </div>
  );
}

export default StreamDisplay;
