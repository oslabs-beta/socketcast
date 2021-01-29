import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import ServerForm from './ServerForm';
import ServerConfig from './ServerConfig';

function ServerTab() {
  const currentServerId = useSelector((store: RootState) => store.navigation.currentServerId);
  return (
    <ServerForm />
  );
}

export default ServerTab;
