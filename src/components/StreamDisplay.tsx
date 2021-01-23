/**
 * @description Right pane of application. Displays input and output streams
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import StreamInput from './StreamInput';

function StreamDisplay() {
  const currentServerId = useSelector((store: RootState) => store.serversReducer.currentServerId);
  const outputStream = useSelector((store: RootState) => store.dataReducer.streams);

  let counter = 0;

  return (
    <div className="stream-column">
      <div className="streamDisplay_container streamDisplay_outputContainer">
        <div className="header-container">
          <h3 className="header-primary">CONSOLE</h3>
        </div>
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
