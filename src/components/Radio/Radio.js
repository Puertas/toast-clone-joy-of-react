import React, { useId } from 'react';

function Radio({ id, name, option, isChecked, setChecked }) {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <label htmlFor={appliedId} key={appliedId}>
      <input
        id={appliedId}
        type='radio'
        name={name}
        checked={isChecked}
        onChange={() => setChecked(option)}
      />
      {option}
    </label>
  );
}

export default Radio;
