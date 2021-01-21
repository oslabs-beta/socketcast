// import { PlannedResponseUnitType } from '../../../src/components/PlannedResponseCreator/type';

// const { playbackResponseUnits } = require('../../../src/components/PlannedResponseCreator/utils');

// let plannedResponses;

// beforeEach(() => {
//   plannedResponses = [
//     { type: PlannedResponseUnitType.MESSAGE, message: 'Message 1 (immediate)' },
//     { type: PlannedResponseUnitType.DELAY, time: 1000 },
//     { type: PlannedResponseUnitType.MESSAGE, message: 'Message 2 (2 seconds later)' },
//     { type: PlannedResponseUnitType.DELAY, time: 1000 },
//     { type: PlannedResponseUnitType.MESSAGE, message: 'Message 3 (1 second later)' },
//     { type: PlannedResponseUnitType.MESSAGE, message: 'Message 4 (immediate)' },
//   ];
// });

// test('calls onMessage() callback n number of times when provided with n messages', async () => {
//   const onMessage = jest.fn();
//   const messagesCount = plannedResponses.reduce((acc, curr) => (
//     curr.type === PlannedResponseUnitType.MESSAGE ? acc + 1 : acc
//   ), 0);
//   // Run playbackResponseUnits
//   await playbackResponseUnits(plannedResponses, { onMessage });
//   // Then check if onMessage has been invoked n number of times
//   expect(onMessage).toHaveBeenCalledTimes(messagesCount);
// }, 3000);

// test('calls complete() callback 1 time when provided with a complete function', async () => {
//   const onComplete = jest.fn();
//   // Run playbackResponseUnits
//   await playbackResponseUnits(plannedResponses, { onComplete });
//   expect(onComplete).toHaveBeenCalledTimes(1);
// });

// test('calls beforeDelay() and afterDelay() n number of times when provided with n delays', async () => {
//   const beforeDelay = jest.fn();
//   const afterDelay = jest.fn();
//   const delayCount = plannedResponses.reduce((acc, curr) => (
//     curr.type === PlannedResponseUnitType.DELAY? acc + 1 : acc
//   ), 0);
//   await playbackResponseUnits(plannedResponses, { beforeDelay, afterDelay });
//   expect(beforeDelay).toHaveBeenCalledTimes(delayCount);
//   expect(afterDelay).toHaveBeenCalledTimes(delayCount);
// });
