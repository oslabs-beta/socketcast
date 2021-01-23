/**
 * @parentComponent StreamDisplay
 * @description Conditionally rendered based on active event in state. Functionality to emit improvised and planned responses from port of active server
 */

import { RootState } from "@/store/reducers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serverManagerBroadcastAll } from "../store/actions";
import PlannedResponseCreator from "./PlannedResponseCreator/PlannedResponseCreator";

function StreamInput() {
  const dispatch = useDispatch();
  const currentServerId = useSelector(
    (store: RootState) => store.serversReducer.currentServerId
  );
  const [message, updateMessage] = useState("");
  const [toggle, updateToggle] = useState(false);

  return (
    
      
        <div className="streamDisplay_container streamDisplay_inputContainer">

          {toggle && <PlannedResponseCreator message = {message} />}

          <div style={{ display: "flex" }}>
            <textarea
              className="code-textarea"
              placeholder="Message"
              value={message}
              onChange={(e) => updateMessage(e.target.value)}
            />
          </div>

          <div style={{ float: "right" }}>
            
            <button className = "button primary"   onClick={() => { updateToggle(!toggle) }} >
                Toggle Planner
            </button>
            <button className = "button primary" >
              Emit Message Stream
            </button>
            <button
              className="button button_special"
              type="button"
              onClick={() => dispatch(serverManagerBroadcastAll(currentServerId, message))}
            >
              Emit Message
            </button>
          </div>
          
        </div>
  );
}

export default StreamInput;
