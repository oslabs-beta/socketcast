/* eslint-disable react/destructuring-assignment */
import React from 'react';

/**
 * TODO
 * The way this component is written means that if you have a
 * props.label value, it will also be assigned to <input>. This
 * is not the best way to write this component.
 * @param props
 */
const InputText = (props: any) => (
  <div className="input-container">
    <div className="label">{props.label}</div>
    <input
      type="text"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </div>
);

export default InputText;
