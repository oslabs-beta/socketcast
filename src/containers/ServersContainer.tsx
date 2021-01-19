/**
 * @description Stateful component for Server Manager
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import ServerConfig from "../components/ServerConfig";

const mapStateToProps = (state: any) => ({
  servers: state.servers.servers,
  serverName: state.servers.serverName,
  serverEndpoint: state.servers.serverEndpoint,
  serverPort: state.servers.serverPort,
});

const mapDispatchToProps = (dispatch: any) => ({
  createServer: (config: Config) => dispatch(actions.serverManagerCreateServer(config)),
  getServer: (id: Number) => dispatch(actions.getServer(id)),
  getServers: () => dispatch(actions.getServers()),
  modifyServer: (id: Number, config: Object) =>
    dispatch(actions.modifyServer(id, config)),
  stopAll: () => dispatch(actions.stopAll()),
  stopAndRemoveServer: (id: Number) =>
    dispatch(actions.stopAndRemoveServer(id)),
});

//these interfaces come from type.d.ts!
class ServersContainer extends Component <ServersContainerProps, ServersContainerState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <ServerConfig
          createServer={this.props.createServer}
          servers={this.props.servers}
          getServers={this.props.getServers}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersContainer);
