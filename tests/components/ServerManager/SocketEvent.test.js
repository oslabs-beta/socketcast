const SocketEvent = require('../../../src/ServerManager/SocketEvent');

test('SocketEvent() takes a parameter String and parameter Function', () => {
  const myEvent = new SocketEvent('event name', () => { });
  expect(typeof myEvent.eventName === 'string' || myEvent.eventName instanceof String).toBeTruthy();
  // TODO Check for function as second parameter
});

test('SocketEvent() will throw an error if the first parameter is not a string', () => {
  expect(() => { new SocketEvent(12); }).toThrow(); // Number as eventName parameter
  expect(() => { new SocketEvent(); }).toThrow(); // null as eventName parameter
});

test('SocketEvent() will throw an error if the second parameter is provided and is not a Function', () => {
  expect(() => { new SocketEvent('string', { onEvent: 'string' }); }).toThrow(); // Number as onEvent parameter
});
