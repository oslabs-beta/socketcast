/**
 * @description Right pane of application. Displays input and output streams
 */

import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import Highlight from 'react-highlight'

// const AlwaysScrollToBottom = () => {
//   const elementRef: any = useRef();
//   useEffect(() => elementRef.current.scrollIntoView());
//   return <div ref={elementRef} />;
// };


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
              <Highlight className = 'json'>{code.toString()}</Highlight>
              {/* <AlwaysScrollToBottom/> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default StreamDisplay;
