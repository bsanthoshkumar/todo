import React from 'react';
import './TodoItems.css';

const TodoItem = ({ id, name, isDone, updateHandler }) => (
  <div className={'todoItem'} onClick={() => updateHandler(id)}>
    <div className={isDone ? 'checked' : 'unchecked'}></div>
    <div className={isDone ? 'strikedText' : ''}>{name}</div>
  </div>
);

const TodoItems = ({ todoItems, updateHandler }) =>
  todoItems.map(({ name, isDone }, index) => (
    <TodoItem
      key={index}
      id={index}
      name={name}
      isDone={isDone}
      updateHandler={updateHandler}
    />
  ));

export default TodoItems;
