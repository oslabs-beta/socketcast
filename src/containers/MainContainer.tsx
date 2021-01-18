/**
 * @description Stateful component that renders ServersContainer and StreamDisplay
 */

import React, { Component } from 'react';
import Header from '../components/Header';
import ServersContainer from './ServersContainer';
import Sidebar from '../components/Sidebar';
import StreamDisplay from '../components/StreamDisplay';




class MainContainer extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        
        <Header />
        <div className="app_container">
          <Sidebar />
          <ServersContainer />
          <StreamDisplay />
        </div>
      </div>
    )
  }
}

export default MainContainer;