import React from 'react';
import './TodoItems.css';

const TodoItems = ({ todoItems, updateHandler }) =>
  todoItems.map(({ name, isDone }, index) => {
    const className = isDone ? 'checked' : 'unchecked';
    return (
      <div
        className={'todoItem'}
        key={index}
        onClick={() => updateHandler(index)}
      >
        <div className={className}></div>
        <div className={isDone ? 'strikedText' : ''}>{name}</div>
      </div>
    );
  });

export default TodoItems;
