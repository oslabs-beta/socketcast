/**
 * @description Right pane of application. Displays input and output streams
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';

function StreamDisplay() {
  const currentServerId = useSelector(
    (store: RootState) => store.navigation.currentServerId,
  );
  const outputStream = useSelector(
    (store: RootState) => store.messages.streams,
  );

  let counter = 0;

  return (
    <div className="streamDisplay_container streamDisplay_outputContainer">
      <div className="streamDisplay_outputbox">
        {currentServerId && outputStream[currentServerId]
          && outputStream[currentServerId].map((code: string) => (
            <div className="code" key={counter++}>
              {code}
            </div>
          ))}
      </div>
    </div>
  );
}

export default StreamDisplay;
