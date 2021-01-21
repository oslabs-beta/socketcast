import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEventId } from '@/store/actions';

function EventConfig() {
  const dispatch = useDispatch();
  // @ts-ignore
  const currentServerID = useSelector((store) => store.serversReducer.currentServerId);
  // @ts-ignore
  const currentServer = useSelector((store) => store.serversReducer.servers[currentServerID]);
  const eventsArray: any = [];
  if (currentServer) {
    currentServer.events.map((event: any) => {
      eventsArray.push(
        <div className="event_container" key={event.eventName} onClick={() => { dispatch(setCurrentEventId(event)) }}>
          <button className="event_button" type="button">
            {event.eventName}
          </button>
          <div className="event">
            <div className="code">Event = (name: string, serial: int, message: string)</div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="eventConfig">
      <div>Events</div>
      <br />
      {eventsArray}
    </div>
  );
}

export default EventConfig;
