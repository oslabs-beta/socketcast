/**
 * @description Stateful component for Server Manager
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


const mapStateToProps = (state: any) => ({
  serverName: state.servers.serverName,
  serverEndpoint: state.servers.serverEndpoint,
  serverPort: state.servers.serverPort
});

const mapDispatchToProps = (dispatch: any) => ({
  createServer: (config: Object) => dispatch(actions.createServer(config)),
  getServer: (id: Number) => dispatch(actions.getServer(id)),
  modifyServer: (id: Number, config: Object) => dispatch(actions.modifyServer(id, config)),
  stopAll: () => dispatch(actions.stopAll()),
  stopAndRemoveServer: (id: Number) => dispatch(actions.stopAndRemoveServer(id))
});

class ServersContainer extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersContainer);