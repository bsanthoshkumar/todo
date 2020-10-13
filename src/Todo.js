import React, { useState } from 'react';
import TodoItems from './TodoItems.js';
import './Todo.css';
import Input from './Input';
import Header from './Header.js';

const Todo = (props) => {
  const [title, updateTitle] = useState('Todo');
  const [nextId, updateNextId] = useState(1);
  const [todoItems, updateTodoItems] = useState([]);

  const addItem = (text) => {
    updateTodoItems(
      todoItems.concat([{ id: nextId, title: text, status: 'notDone' }])
    );
    updateNextId(nextId + 1);
  };

  const removeItem = (itemId) => {
    updateTodoItems((items) => items.filter(({ id }) => id !== itemId));
  };

  const updateItem = (id) => {
    updateTodoItems(() => {
      const items = todoItems.map((item) => Object.assign({}, item));
      const item = items.find((item) => item.id === id);
      item.status = { notDone: 'doing', doing: 'done', done: 'notDone' }[
        item.status
      ];
      return items;
    });
  };

  const removeAllItems = () => {
    updateTitle('Todo');
    updateNextId(1);
    updateTodoItems([]);
  };

  return (
    <div className="mainDivision">
      <Header title={title} onClick={removeAllItems} onChange={updateTitle} />
      <TodoItems
        todoItems={todoItems}
        updateItem={updateItem}
        removeItem={removeItem}
      />
      <Input className="inputBox" onSubmit={addItem} />
    </div>
  );
};

export default Todo;
