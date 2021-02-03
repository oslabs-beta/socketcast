/**
 * @parentComponent StreamTab
 * @description Holds input boxes for emitting messages or message streams
 */

import { RootState } from '@/store/reducers';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverManagerBroadcastAll } from '../store/actions/serversActions';
import PlannedResponseCreator from './PlannedResponseCreator/PlannedResponseCreator';
import { playbackResponseUnits } from './PlannedResponseCreator/utils';
import { togglePlannedResponse } from '../store/actions/navigationActions'

function StreamInput() {
  const dispatch = useDispatch();
  const currentServerId = useSelector(
    (store: RootState) => store.navigation.currentServerId,
  );
  const [message, updateMessage] = useState('');

  const plannedResponseBoolean = useSelector( (store: RootState) => store.navigation.plannedResponseBoolean)

  const emitPlannedResponse = (prus:any) => {
    playbackResponseUnits(prus, {
      onMessage: (msg: string) => {
        dispatch(serverManagerBroadcastAll(currentServerId, msg));
      },
    });
  };

  return (

    <div className="streamDisplay_container streamDisplay_inputContainer">

      {plannedResponseBoolean && <PlannedResponseCreator message={message} emitPlannedResponse={emitPlannedResponse} />}

      <div style={{ display: 'flex' }}>
        <textarea
          className="code-textarea"
          placeholder="Message"
          value={message}
          onChange={(e) => updateMessage(e.target.value)}
        />
      </div>

      <div style={{ float: 'right' }} className="streamInput_buttons">
      <button
          className="button button_special"
          type="button"
          onClick={() => dispatch(serverManagerBroadcastAll(currentServerId, message))}
        >
          Emit Message
        </button>
        <button className="button primary" onClick={() =>  dispatch(togglePlannedResponse()) }>
          Toggle Planner
        </button>
      
      </div>

    </div>
  );
}

export default StreamInput;
