/**
 * @parentComponent ServerConfig
 * @description Unused component - added to configure events
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEventId } from '@/store/actions/navigationActions';
function EventConfig() {
  const dispatch = useDispatch();
  // @ts-ignore
  const currentServerID = useSelector((store) => store.navigation.currentServerId);
  // @ts-ignore
  const currentServer = useSelector((store) => store.servers.servers[currentServerID]);
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
      <div>Event Stream Manager</div>
      {eventsArray}
    </div>
  );
}

export default EventConfig;
