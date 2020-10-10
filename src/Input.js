import React from 'react';

const Input = ({ value, onChangeHandler, className }) => {
  return (
    <input
      className={className}
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
    />
  );
};

export default Input;
