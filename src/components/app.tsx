/**
 * @description Main container for all components
 */

import React from 'react';
import '../styles/app.scss';

import ServerForm from './ServerForm';
import Sidebar from './Sidebar';
import StreamTab from './StreamTab';

const App = () => (
  <div className="app">
    <Sidebar />
    <ServerForm />
    <StreamTab />
  </div>
);

export default App;
