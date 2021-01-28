import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import ServerForm from './ServerForm';
import ServerConfig from './ServerConfig';
import EventForm from './EventForm';
import EventConfig from './EventConfig';

function ServerTab() {
  const currentServerId = useSelector((store: RootState) => store.serversReducer.currentServerId);
  return (
    <div className="server-column">

      {currentServerId === '' ? (
        <>
          <ServerForm />
          {/* <EventForm /> */}
        </>
      ) : (
        <>
          <ServerConfig />
          {/* <EventConfig /> */}
        </>
      )}
    </div>
  );
}

export default ServerTab;
