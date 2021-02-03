/**
 * @parentComponent StreamTab
 * @description Display stream output field
**/

import React, {useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import Highlight from 'react-highlight'
import ScrollAnchor from './ScrollAnchor'


function StreamDisplay() {
  const plannedResponseBoolean = useSelector( (store: RootState) => store.navigation.plannedResponseBoolean)

  const currentServerId = useSelector(
    (store: RootState) => store.navigation.currentServerId,
  );
  const outputStream = useSelector(
    (store: RootState) => store.messages.streams,
  );

  let counter = 0;

  return (
    <div className="streamDisplay_container streamDisplay_outputContainer">
      <div className={plannedResponseBoolean ? "streamDisplay_outputboxSmall" : "streamDisplay_outputboxLarge"}>
        {currentServerId && outputStream[currentServerId]
          && outputStream[currentServerId].map((code: string) => (
            <div className="code" key={counter++}>
              <Highlight className = 'json'>{code.toString()}</Highlight>
              <ScrollAnchor />
            </div>
          ))}
      </div>
    </div>
  );
}

export default StreamDisplay;
