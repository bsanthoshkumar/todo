import React, { useState } from 'react';
import './Todo.css';

const Input = ({value, className, onSubmit}) => {
  const [text, setText] = useState(value || '');

  return (
    <form onSubmit={() => onSubmit(text)}>
      <input value={text} className={className} onChange={({target}) => setText(target.value)} />
    </form>
  );
}

export default Input;
