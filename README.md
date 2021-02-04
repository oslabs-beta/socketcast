
<p align="center">
<img 
  align="center"
  src = "./assets/socketcast_logo.png"
/>
</p>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/oslabs-beta/projectArtemis?color=blue">
  <img alt="last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/socketcast?color=%3327d3af">
  <img alt="Repo stars" src="https://img.shields.io/github/stars/oslabs-beta/socketcast?logoColor=%2334495e&style=social"> 
</p>


## Motivation
Developers working on real-time data applications and services may need to rapidly test their client applications with WebSocket or SSE servers. Socketcast provides developers with a tool to configure and run server instances that serve stub websocket and SSE data to connected clients.

## Features
* Configure, launch, and manage multiple WebSocket/SSE servers
* Send improvised messages to clients
* Plan out message stream with delay intervals to send clients 
* Persistent local storage of Server configurations

## Getting Started

## Create Servers and Configure Server Instances
<img 
  align="center"
  src = "./assets/CreateStopStartDelete.gif"
/>

## Emit Data
<img 
  align="center"
  src = "./assets/emit_messages.gif"
/>


## Create and send Data Streams
<img 
  align="center"
  src = "./assets/PlannedResponse.gif"
/>

## Development
### Built With
* Electron
* TypeScript
* react
* redux-thunk

### Client
socketcast is an Electron cross platform desktop app. It is built with React.

### ServerManager
Socketcast has the ability to launch multiple WebSocket servers and it does so through an abstraction called ServerManager. The client application should never manage any servers directly, but instead interact with ServerManager's exposed API through Redux actions. 

## Potential for Improvement
* Create the ability to build URL paths for the client application to subscribe selectively to events
* Add event/channel functionality to servers

## Want to contribute?

## Authors
* Will Bladon [whbladon](https://github.com/whbladon)
* Chris Docuyanan [cjo2](https://github.com/cjo2)
* Chance Hernandez [ItsChance-BTW](https://github.com/ItsChance-BTW)
* Colin Vandergraaf [colinvandergraaf](https://github.com/colinvandergraaf)

## License
