import React, { useState } from 'react';


function ServerForm() {
 
  return (
    <div className="eventConfig">
      <div className = "window_title">Add Event Streams </div>

        <br/>
      <form className="serverForm_form">
        <input className = 'serverForm_input'></input>
        <br/>
        <button className = 'serverForm_button'>Add Event</button>
      </form>
    </div>
  );
}

export default ServerForm;