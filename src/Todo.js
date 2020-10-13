import React, { useState } from 'react';
import TodoItems from './TodoItems.js';
import './Todo.css';
import Input from './Input';
import Header from './Header.js';

const update = (arr, path, fn) => {
  const ref = arr[path[0]];
  const lastKey = path[path.length - 1];
  ref[lastKey] = fn(ref[lastKey]);
  return arr;
};

const Todo  = (props) => {
  const [todoItems, updateTodoItems] = useState([]);
  const [title, updateTitle] = useState('Todo');

  const addItem = (text) => {
    updateTodoItems(todoItems.concat({title: text, status: 'notDone'}))
  }
  
  const removeItem = (id) => {
    updateTodoItems((items) => items.splice(id, 1));
  }

  const updateItem = (id) => {
    const toggledStatus = {
      notDone: 'doing',
      doing: 'done',
      done: 'notDone',
    };
    
    updateTodoItems((items) => update(items, [id, 'status'], (s) => toggledStatus(s)))
  }

  const removeAllItems = () => {
    updateTodoItems([]);
    updateTitle('Todo');
  }

  return (
    <div className='mainDivision'>
      <Header title={title} onSubmit={console.log} onClick ={removeAllItems} />
      <TodoItems todoItems={todoItems} updateItem={updateItem} removeItem={removeItem} />
      <Input className='inputBox' onSubmit={addItem} />
    </div>
  );
}

export default Todo;
