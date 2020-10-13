import React, { useReducer } from 'react';
import Input from './Input';
import Header from './Header.js';
import TodoItems from './TodoItems.js';
import { todoReducer, initialState } from './todoReducer';
import './Todo.css';

const Todo = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const updateTitle = (text) => dispatch({ type: 'UPDATE_TITLE', text });
  const addItem = (text) => dispatch({ type: 'ADD_ITEM', text });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', id });
  const updateItem = (id) => dispatch({ type: 'UPDATE_ITEM', id });
  const removeAllItems = () => dispatch({ type: 'RESET' });

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
