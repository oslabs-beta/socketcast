import React, { useState } from 'react';
import { examplePlayback } from './utils';
import { PlannedResponseUnit, PlannedResponseUnitType } from './type';

const PlannedResponseCreator = () => {
  const [plannedResponse, setPlannedResponse] = useState<PlannedResponseUnit[]>([]);

  const addDelayHandler = (ms: number): void => {
    setPlannedResponse([...plannedResponse, { type: PlannedResponseUnitType.DELAY, time: ms }]);
  };

  const addMessageHandler = (message: string): void => {
    setPlannedResponse([...plannedResponse, { type: PlannedResponseUnitType.MESSAGE, message }]);
  };

  return (
    <div className="planned-response-container">
      {
        plannedResponse.map((curr) => <p>{JSON.stringify(curr)}</p>)
      }
      <div>
        <button type="button" onClick={() => addMessageHandler('Test message')}>Add Message</button>
        <button type="button" onClick={() => addDelayHandler(2000)}>Add Delay</button>
        <button type="button" onClick={examplePlayback}>Play this back</button>
      </div>
    </div>
  );
};

export default PlannedResponseCreator;
