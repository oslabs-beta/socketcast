import React, { useState } from 'react';
import { examplePlayback, playbackResponseUnits } from './utils';
import { PlannedResponseUnit, PlannedResponseUnitType } from './type';

const PlannedResponseCreator = () => {
  const [plannedResponse, setPlannedResponse] = useState<PlannedResponseUnit[]>([]);

  const addDelayHandler = (ms: number): void => {
    setPlannedResponse([...plannedResponse, { type: PlannedResponseUnitType.DELAY, time: ms }]);
  };

  const addMessageHandler = (message: string): void => {
    setPlannedResponse([...plannedResponse, { type: PlannedResponseUnitType.MESSAGE, message }]);
  };

  const resetPlannedResponse = () => setPlannedResponse([]);

  return (
    <div className="planned-response-container">
      {
        plannedResponse.map((curr) => <p>{JSON.stringify(curr)}</p>)
      }
      <div>
        <button type="button" onClick={() => addMessageHandler('Test message')}>Add Message</button>
        <button type="button" onClick={() => addDelayHandler(2000)}>Add 2 Second Delay</button>
        <button type="button" onClick={resetPlannedResponse}>Reset Configuration</button>
        <button type="button" onClick={() => playbackResponseUnits(plannedResponse, { onMessage: (msg: string) => { console.log(`${msg} is being emitted`); } })}>Play Back</button>
        <button type="button" onClick={examplePlayback}>Play Example (see console)</button>
      </div>
    </div>
  );
};

export default PlannedResponseCreator;
