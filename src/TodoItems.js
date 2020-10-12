import React from 'react';
import './TodoItems.css';

const TodoItem = ({ id, title, status, updateItem, removeItem }) => (
  <div className='flex' onMouseOver={(e) => e.target.lastChild.classList.remove('hide')} onMouseLeave={(e) => e.target.lastChild.classList.add('hide')}>
    <span className='todoItem' onClick={() => updateItem(id)} onMouseOver={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()}>
      <span className={`${status}`}></span>
      <span className={`itemTitle ${status === 'done' ? 'strikedText' : ''}`}>{title}</span>
    </span>
    <span className='closeButton hide' onClick={() => removeItem(id)} onMouseOver={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()}>x</span>
  </div>
);

const TodoItems = ({ todoItems, updateItem, removeItem }) =>
  todoItems.map(({ title, status }, index) => (
    <TodoItem
      key={index}
      id={index}
      title={title}
      status={status}
      updateItem={updateItem}
      removeItem={removeItem}
    />
  ));

export default TodoItems;
