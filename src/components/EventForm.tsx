import React, { useState } from 'react';

function ServerForm() {
  return (
    <div className="eventConfig">
      <div className="window_title">EVENT STREAMS</div>
      <br />
      <form className="form-container">
        <input type="text" />
        <br />
        <button className="serverForm_button">Add Event</button>
      </form>
    </div>
  );
}

export default ServerForm;
