import React, { useState } from 'react';
import { playbackResponseUnits } from './utils';
import { PlannedResponseUnit, PlannedResponseUnitType } from './type';
import PRUnit from './PRUnit';
import ScrollAnchor from '../ScrollAnchor'

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

  const onMoveUp = (arr: any, ele: object) => {
    let index = arr.indexOf(ele)
    if (index<1) return
    [arr[index-1], arr[index]] = [arr[index], arr[index-1]]
    setPlannedResponse(arr.slice())
  }
  const onMoveDown = (arr: any, ele: object) => {
    let index = arr.indexOf(ele)
    if (index === arr.length - 1) return
    [arr[index+1], arr[index]] = [arr[index], arr[index+1]]
    setPlannedResponse(arr.slice())
  }
  const onRemove = (arr:any, ele: object) => {
    let index = arr.indexOf(ele)
    arr.splice(index, 1)
    setPlannedResponse(arr.slice())
  }

  return (
    <>
      <div className = "planned-response-playground">
        {plannedResponse.map((curr, count=0) => (
          <PRUnit key = {count++} index={1} pru={curr}
            onMoveDown={()=>{onMoveDown(plannedResponse, curr)}} 
            onMoveUp={() => {onMoveUp(plannedResponse, curr)}} 
            onRemove={() => {onRemove(plannedResponse, curr)}}
          />))
        }
        <ScrollAnchor/>
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