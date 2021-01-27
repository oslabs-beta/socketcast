import { PlannedResponseUnit, PlannedResponseUnitType } from './type';

// eslint-disable-next-line import/prefer-default-export
export const playbackResponseUnits = async (
  responseUnits: PlannedResponseUnit[],
  {
    onMessage, beforeDelay, afterDelay, onComplete,
  }: {
    onMessage?: Function,
    beforeDelay?: Function,
    afterDelay?: Function,
    onComplete?: Function,
  },
) => {
  const addDelay = (ms: number): Promise<void> => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const pru of responseUnits) {
    if (pru.type === PlannedResponseUnitType.DELAY && pru.time) {
      if (beforeDelay) beforeDelay(pru.time);
      // eslint-disable-next-line no-await-in-loop
      await addDelay(pru.time);
      if (afterDelay) afterDelay(pru.time);
    } else if (onMessage) onMessage(pru.message);
  }

  if (onComplete) onComplete();
};

const example: PlannedResponseUnit[] = [
  { type: PlannedResponseUnitType.MESSAGE, message: 'Message 1' },
  { type: PlannedResponseUnitType.DELAY, time: 2000 },
  { type: PlannedResponseUnitType.MESSAGE, message: 'Message 2 (2 seconds later)' },
  { type: PlannedResponseUnitType.DELAY, time: 1000 },
  { type: PlannedResponseUnitType.MESSAGE, message: 'Message 3 (1 second later)' },
  { type: PlannedResponseUnitType.MESSAGE, message: 'Message 4' },
  { type: PlannedResponseUnitType.DELAY, time: 2000 },
  { type: PlannedResponseUnitType.MESSAGE, message: 'Message 5 (2 seconds later)' },
  { type: PlannedResponseUnitType.DELAY, time: 1000 },
  { type: PlannedResponseUnitType.MESSAGE, message: 'Message 6 (1 second later)' },
];

export const examplePlayback = (plannedResponse: any) => {
  playbackResponseUnits(plannedResponse, {
    beforeDelay: (ms: number) => {
      // console.log(`delaying by ${ms}`);
    },
    onMessage: (message: string) => {
      console.log(`emitting ${message}`);
    },
    afterDelay: (ms: number) => {
      // console.log(`finished delaying by ${ms}`);
    },
    onComplete: () => {
      console.log('completed playback');
    },
  });
};
