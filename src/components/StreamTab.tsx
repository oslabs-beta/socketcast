/**
 * @parentComponent StreamTab
 * @description Right pane of application - holds stream input boxes and output display
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
