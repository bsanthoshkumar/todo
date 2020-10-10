import React from 'react';
import TodoItems from './TodoItems.js';
import './Todo.css';

const intialState = {
  value: '',
  todoItems: [
    { name: 'Fill timesheets', isDone: false },
    { name: 'Complete Todo Assignment' },
  ],
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = intialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    console.log(text);
    this.setState(({ value }) => ({ value: text }));
  }

  render() {
    return (
      <div className={'mainDivision'}>
        <h1>Todo</h1>
        <TodoItems todoItems={this.state.todoItems} />
        <input
          value={this.state.value}
          onChange={(event) => this.handleChange(event.target.value)}
        />
      </div>
    );
  }
}

export default Todo;
