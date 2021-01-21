import React from 'react';
import './app.scss';

import Header from './Header';
// import PlannedResponseCreator from './PlannedResponseCreator/PlannedResponseCreator';
import ServerConfig from './ServerConfig';
import Sidebar from './Sidebar';
import StreamDisplay from './StreamDisplay';

const App = () => (
  <div className="app">
    <Header />
    <div className="app_container">
      <Sidebar />
      <ServerConfig />
      <StreamDisplay />
      {/* <PlannedResponseCreator /> */}
    </div>
  </div>
);

export default App;
