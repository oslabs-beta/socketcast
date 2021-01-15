import React from "react";

function EventConfig() {
  let events = [
    { name: "Event1" },
    { name: "Event2" },
    { name: "Event3" },
  ];
  return (
    <div className="eventConfig">
      <div>Events</div>
      <br/>
      {events.map((event) => (
        <div className="event_container" id = {event.name}>
          <button className="event_button">
            {" "}
            {event.name}
            {">"}
          </button>
          <div className="event">
            <div className = "code">Event = (name: string, serial: int, message: string)</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventConfig;
