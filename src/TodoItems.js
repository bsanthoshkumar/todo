import React from 'react';
import './TodoItems.css';
import useHover from './useHover';

const TodoItem = ({ id, title, status, updateItem, removeItem }) => {
  const [ref, isHovered] = useHover();

  return (
    <div className="flex" ref={ref}>
      <span className="todoItem" onClick={() => updateItem(id)}>
        <span className={`${status}`}></span>
        <span className={`itemTitle ${status === 'done' ? 'strikedText' : ''}`}>
          {title}
        </span>
      </span>
      <span className="closeButton" onClick={() => removeItem(id)}>
        {isHovered ? 'x' : ''}
      </span>
    </div>
  );
};

const TodoItems = ({ todoItems, updateItem, removeItem }) =>
  todoItems.map(({ id, title, status }, index) => (
    <TodoItem
      key={id}
      id={id}
      title={title}
      status={status}
      updateItem={updateItem}
      removeItem={removeItem}
    />
  ));

export default TodoItems;
