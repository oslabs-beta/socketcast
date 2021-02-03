/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import { PlannedResponseUnit, PlannedResponseUnitType } from './type';
import Highlight from 'react-highlight'

const PRUnit = ({
  pru, index, onMoveUp, onMoveDown, onRemove,
}: { pru: PlannedResponseUnit, index: number, onMoveUp: any, onMoveDown: any, onRemove: any }) => {

  /**
   * TODO
   * Using ternaries probably is not a good idea here because there may be
   * a potential for more than two PlannedResponseUnitTypes
   */
  return (
    <div className="PRUnit">
      <div className="top-section">
        <span className="title-type">
          {pru.type === PlannedResponseUnitType.MESSAGE ? 'Message' : 'Delay'}
        </span>

        <div>
          <button className="button button_code" type="button" onClick={onRemove}>Remove</button>
          <button className="button button_code" type="button" onClick={onMoveUp}>Up</button>
          <button className="button button_code" type="button" onClick={onMoveDown}>Down</button>
        </div>

      </div>
      <div className="message-section">
        {pru.type === PlannedResponseUnitType.MESSAGE ? 
        // @ts-ignore
        (<Highlight className = 'json'>{pru.message.toString()}</Highlight>) 
        : pru.time}
      </div>
    </div>
  );
}

export default PRUnit;
