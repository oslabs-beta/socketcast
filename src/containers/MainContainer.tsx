/**
 * @description Stateful component that renders ServersContainer and StreamDisplay
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../components/Header';
import ServersContainer from './ServersContainer';
import Sidebar from '../components/Sidebar';
import StreamDisplay from '../components/StreamDisplay';


const mapStateToProps = (state: any) => ({
  servers: state.servers.servers
});

class MainContainer extends Component<MainContainerProps, MainContainerState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        
        <Header />
        <div className="app_container">
          <Sidebar servers = {this.props.servers} />
          <ServersContainer />
          <StreamDisplay />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainContainer);