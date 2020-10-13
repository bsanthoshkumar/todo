import React, { useState } from 'react';
import './Todo.css';

const Input = ({ className, onSubmit }) => {
  const [text, setText] = useState('');

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <input
      value={text}
      className={className}
      onChange={({ target }) => setText(target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default Input;
