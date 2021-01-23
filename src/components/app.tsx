/**
 * @description Main container for all components
 */

import React from 'react';
import '../styles/app.scss';

// import PlannedResponseCreator from './PlannedResponseCreator/PlannedResponseCreator';
import ServerTab from './ServerTab';
import Sidebar from './Sidebar';
import StreamTab from './StreamTab';

const App = () => (
  <div className="app">
    <div className="app_container">
      <Sidebar />
      <ServerTab />
      <StreamTab />
      {/* <PlannedResponseCreator /> */}
    </div>
  </div>
);

export default App;
