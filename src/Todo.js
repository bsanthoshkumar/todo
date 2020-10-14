import React, { useState, useEffect } from 'react';
import Input from './Input';
import Header from './Header.js';
import TodoItems from './TodoItems.js';
import './Todo.css';
import TodoAPI from './TodoAPI';

const Todo = (props) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    TodoAPI.initialize().then((s) => setState(s));
  }, []);

  const updateTitle = (text) =>
    TodoAPI.updateTitle(text).then((s) => setState(s));
  const addItem = (text) => TodoAPI.addItem(text).then((s) => setState(s));
  const removeItem = (id) => TodoAPI.removeItem(id).then((s) => setState(s));
  const updateItem = (id) => TodoAPI.updateItem(id).then((s) => setState(s));
  const removeAllItems = () => TodoAPI.reset().then((s) => setState(s));

  if (state == null) {
    return 'Loading...';
  }

  return (
    <div className="mainDivision">
      <Header
        title={state.title}
        onClick={removeAllItems}
        onChange={updateTitle}
      />
      <TodoItems
        todoItems={state.items}
        updateItem={updateItem}
        removeItem={removeItem}
      />
      <Input className="inputBox" onSubmit={addItem} />
    </div>
  );
};

export default Todo;
