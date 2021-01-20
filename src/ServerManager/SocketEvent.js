/**
 * Class representing a SocketEvent
 */
class SocketEvent {
  /**
    * @callback onEventCallback
    * @param {string} message - This is the message emitted through the socket.io protocol
    */

  /**
     *
     * @param {string} eventName - This is the name of the event the server will be opening a
     * socket for. This is also the event name you will subscribe and emit.
     * @param {onEventCallback} - The callback function that will be invoked
     * when a message is received matching the eventName
     */
  constructor(eventName, config = {}) {
    const { onEvent } = config;

    if (!eventName || !(eventName.constructor === String)) {
      throw new Error(`expected parameter eventName to be of type string but got ${eventName.constructor.name} instead.`);
    }

    if (onEvent && !(onEvent instanceof Function)) {
      throw new Error(`expected parameter config.onEvent to be of type function but got ${onEvent.constructor.name} instead`);
    }

    this.eventName = eventName;
    this.onEvent = onEvent;
  }
}

module.exports = SocketEvent;
