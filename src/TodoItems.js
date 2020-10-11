import React from 'react';
import './TodoItems.css';

const TodoItem = ({ id, title, status, updateHandler, removeHandler }) => (
  <div className={'flex'}>
    <div className={'todoItem'} onClick={() => updateHandler(id)}>
      <div className={`${status}`}></div>
      <div className={'title' , status === 'done' ? 'strikedText' : ''}>{title}</div>
    </div>
    <div className={'closeButton'} onClick={() => removeHandler(id)}>X</div>
  </div>
);

const TodoItems = ({ todoItems, updateHandler, removeHandler }) =>
  todoItems.map(({ title, status }, index) => (
    <TodoItem
      key={index}
      id={index}
      title={title}
      status={status}
      updateHandler={updateHandler}
      removeHandler={removeHandler}
    />
  ));

export default TodoItems;
