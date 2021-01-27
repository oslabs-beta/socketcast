/**
 * @description Right pane of application. Displays input and output streams
 */

import React from "react";
import StreamInput from "./StreamInput";
import StreamDisplay from "./StreamDisplay"


function StreamTab() {
  return (
    <div className="stream-column">
      <StreamDisplay />
      <StreamInput />
    </div>
  );
}

export default StreamTab;
