import React from 'react';
import TodoItems from './TodoItems.js';
import './Todo.css';
import Input from './Input';

const update = (obj, path, fn) => {
  const ref = path.slice(0, -1).reduce((a, b) => a[b], obj);
  const lastKey = path[path.length - 1];
  ref[lastKey] = fn(ref[lastKey]);
  return obj;
};

const intialState = {
  value: '',
  todoItems: [
    { name: 'Fill timesheets', isDone: true },
    { name: 'Complete Todo Assignment', isDone: false },
  ],
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = intialState;
    this.handleChange = this.handleChange.bind(this);
    this.updateCheckStatus = this.updateCheckStatus.bind(this);
  }

  handleChange(text) {
    this.setState(({ value }) => ({ value: text }));
  }

  updateCheckStatus(id) {
    this.setState(update(this.state, ['todoItems', id, 'isDone'], (x) => !x));
  }

  render() {
    return (
      <div className={'mainDivision'}>
        <h1>Todo</h1>
        <TodoItems
          todoItems={this.state.todoItems}
          updateHandler={this.updateCheckStatus}
        />
        <Input
          className={'inputBox'}
          value={this.state.value}
          onChangeHandler={this.handleChange}
        />
      </div>
    );
  }
}

export default Todo;
