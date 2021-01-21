import store from '@/store/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverManagerBroadcastAll } from '../store/actions';

function StreamInput() {
  const dispath = useDispatch();
  // @ts-ignore
  const currentServerId = useSelector((store) => store.serversReducer.currentServerId);
  // @ts-ignore
  const currentEvent = useSelector((store) => store.serversReducer.currentEvent);
  // const currentMessage = currentEvent ? currentEvent.eventMessage : '';
  const [message, updateMessage] = useState('');
  return (
    <div className="streamDisplay_container streamDisplay_inputContainer">
      <div>Stream Input</div>
      <div style={{ display: "flex" }}>
        <input
          className="streamDisplay_inputbox"
          placeholder="Message"
          value={message}
          onChange={(e) => updateMessage(e.target.value)}
        />
      </div>
      <div style={{ float: 'right' }}>
        <button
          className="streamDisplay_button"
          type="button"
          onClick={() => dispath(serverManagerBroadcastAll(currentServerId, message))}
        >
          emit improvised response
        </button>
        <button style={{ marginLeft: '5px' }} className="streamDisplay_button" type="button">plan a response</button>
      </div>
    </div>
  )
}

export default StreamInput;