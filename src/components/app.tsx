/**
 * @description Main container for all components
 */

import React from 'react';
import './app.scss';

import Header from './Header';
// import PlannedResponseCreator from './PlannedResponseCreator/PlannedResponseCreator';
import ServerTab from './ServerTab';
import Sidebar from './Sidebar';
import StreamDisplay from './StreamDisplay';

const App = () => (
  <div className="app">
    {/* <Header /> */}
    <div className="app_container">
      <Sidebar />
      <ServerTab />
      <StreamDisplay />
      {/* <PlannedResponseCreator /> */}
    </div>
  </div>
);

export default App;
