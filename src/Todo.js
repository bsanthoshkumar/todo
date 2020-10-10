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

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [] };
    this.addTodoItem = this.addTodoItem.bind(this);
    this.updateTodoItem = this.updateTodoItem.bind(this);
  }

  addTodoItem(text) {
    this.state.todoItems.push({ title: text, status: 'notDone' });
    this.setState(this.state.todoItems);
  }

  updateTodoItem(id) {
    const toggledStatus = {
      notDone: 'doing',
      doing: 'done',
      done: 'notDone',
    };

    this.setState(
      update(this.state, ['todoItems', id, 'status'], (s) => toggledStatus[s])
    );
  }

  render() {
    return (
      <div className={'mainDivision'}>
        <Input value="Todo" className={'heading'}/>  <br/>
        <TodoItems
          todoItems={this.state.todoItems}
          updateHandler={this.updateTodoItem}
        />
        <Input value={this.state.value} className={'inputBox'} handleOnEnter={this.addTodoItem} />
      </div>
    );
  }
}

export default Todo;
