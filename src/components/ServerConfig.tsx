import { serverManagerStopServer, stopAndRemoveServer } from '@/store/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ServerConfig() {
  // @ts-ignore
  const servers = useSelector((store) => store.serversReducer.servers);
  // @ts-ignore
  const currentServerId = useSelector((store) => store.serversReducer.currentServerId);
  const dispatch = useDispatch();

  const stopServerHandler = () => {
    dispatch(serverManagerStopServer(currentServerId));
  };

  return (
    <div className="serverForm">
      <div className="window_title">Server Form</div>
      <br />
      <div>
        Server Name:
        {servers[currentServerId].name}
      </div>
      <br />
      <div>
        Server Port:
        {servers[currentServerId].port}
      </div>
      <br />
      <button className="serverForm_button" type="button" onClick={stopServerHandler}>Stop Server</button>
    </div>
  );
}

export default ServerConfig;
