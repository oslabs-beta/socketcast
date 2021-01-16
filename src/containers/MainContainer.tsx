/**
 * @description Stateful component that renders ServersContainer and StreamDisplay
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServersContainer from './ServersContainer';
import StreamDisplay from '../components/StreamDisplay';
import * as actions from '../actions/actions';

const mapStateToProps = (state: any) => ({
  servers: state.servers.servers
});

const mapDispatchToProps = (dispatch: any) => ({
  getServers: () => dispatch(actions.getServers()),
});

class MainContainer extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <ServersContainer servers={this.props.servers} />
        <StreamDisplay />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);