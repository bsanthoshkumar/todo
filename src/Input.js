import React from 'react';
import './Todo.css';

const Input = ({ value, onChangeHandler, onEnterHandler }) => {
  return (
    <input
      className={'inputBox'}
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
      onKeyPress={({ key, target }) => {
        if (key === 'Enter') onEnterHandler(target.value);
      }}
    />
  );
};

export default Input;
