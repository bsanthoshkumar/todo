import React from 'react';
import './TodoItems.css';

const TodoItem = ({ id, title, status, updateHandler }) => (
  <div className={'todoItem'} onClick={() => updateHandler(id)}>
    <div className={`${status}`}></div>
    <div className={status === 'done' ? 'strikedText' : ''}>{title}</div>
  </div>
);

const TodoItems = ({ todoItems, updateHandler }) =>
  todoItems.map(({ title, status }, index) => (
    <TodoItem
      key={index}
      id={index}
      title={title}
      status={status}
      updateHandler={updateHandler}
    />
  ));

export default TodoItems;
