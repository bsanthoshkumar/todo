import React from 'react';
import './TodoItems.css';

const TodoItems = ({ todoItems }) =>
  todoItems.map((todoItem, index) => {
    return (
      <div className={'todoItem'} key={index}>
        <div className={'checkBox'}></div>
        <div>{todoItem.name}</div>
      </div>
    );
  });

export default TodoItems;
