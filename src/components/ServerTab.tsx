import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import ServerForm from './ServerForm';
import ServerConfig from './ServerConfig';

function ServerTab() {
  const currentServerId = useSelector((store: RootState) => store.navigation.currentServerId);
  return (
    <div className="server-column">
      {currentServerId === null ? (
        <>
          <ServerForm />
        </>
      ) : (
        <>
          <ServerConfig />
        </>
      )}
    </div>
  );
}

export default ServerTab;
