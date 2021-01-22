/**
 * @description Right pane of application. Displays input and output streams
 */

import React from 'react';
import StreamInput from './StreamInput';
import { useSelector } from 'react-redux';

function StreamDisplay() {


  //we should figure out how to fix this work-around
  // @ts-ignore
  const currentServerId = useSelector(store => store.serversReducer.currentServerId)
  // @ts-ignore
  const outputStream = useSelector(store => store.dataReducer.streams);

  let counter = 0


  return (
    <div className="stream-column">
      <div className="streamDisplay_container streamDisplay_outputContainer">
        <div className="window_title" >CONSOLE</div>
        <div className="streamDisplay_outputbox">

          {currentServerId && outputStream[currentServerId].map((code: string) => (
            <div className="code" key={counter++}>
              {code}
            </div>


          ))}
        </div>
      </div>
      <StreamInput />
    </div>
  );
}

export default StreamDisplay;
