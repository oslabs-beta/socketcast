import React, { useState } from 'react';
import { examplePlayback, playbackResponseUnits } from './utils';
import { PlannedResponseUnit, PlannedResponseUnitType } from './type';
import PRUnit from './PRUnit';

const PlannedResponseCreator = (props:any) => {
  const [plannedResponse, setPlannedResponse] = useState<PlannedResponseUnit[]>([]);
  const [delay, setDelay] = useState(1)

  const addDelayHandler = (ms: number): void => {
    setPlannedResponse([...plannedResponse, { type: PlannedResponseUnitType.DELAY, time: ms }]);
  };

  const addMessageHandler = (message: string): void => {
    setPlannedResponse([...plannedResponse, { type: PlannedResponseUnitType.MESSAGE, message }]);
  };

  const resetPlannedResponse = () => setPlannedResponse([]);

  return (
    <>
      <div className = "planned-response-playground">
        {plannedResponse.map((curr) => <PRUnit index={1} pru={curr} onMoveDown={() => {}} onMoveUp={() => {}} onRemove={() => {}} />)}
      </div>
     
      <div>
        <button className = "button button_special" onClick = {()=>{props.emitPlannedResponse(plannedResponse)}} >Emit Message Stream</button>
        <button className = "button primary" type="button" onClick={() => addMessageHandler(props.message)}>Add Message</button>
        <button className = "button primary" type="button" onClick={() => addDelayHandler(delay*1000)}>Add Delay</button>
        <input className = "PRC-input" value={delay} onChange = {(e:any)=>{setDelay(e.target.value)}} type="number"></input>
        <button className = "button primary" type="button" onClick={resetPlannedResponse}>Clear</button>
        <button className = "button primary" type="button" onClick={() => playbackResponseUnits(plannedResponse, { onMessage: (msg: string) => { console.log(`${msg} is being emitted`); } })}>Play Back</button>
      </div>
    </>
  );
};

export default PlannedResponseCreator;
