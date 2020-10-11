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
    this.state = { title: 'Todo', todoItems: [] };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
  }

  updateTitle(text) {
    console.log(text);
    this.setState(() => ({title: text}))
  }

  addItem(text) {
    this.state.todoItems.push({ title: text, status: 'notDone' });
    this.setState(this.state.todoItems);
  }
  
  removeItem(id) {
    this.state.todoItems.splice(id, 1);
    this.setState(this.state.todoItems);
  }

  updateItem(id) {
    const toggledStatus = {
      notDone: 'doing',
      doing: 'done',
      done: 'notDone',
    };

    this.setState(
      update(this.state, ['todoItems', id, 'status'], (s) => toggledStatus[s])
    );
  }

  removeAllItems() {
    this.state.todoItems = [];
    this.setState(this.state.todoItems);
  }

  render() {
    return (
      <div className={'mainDivision'}>
        <div className={'heading'}>
          <div> {this.state.title} </div> 
          <div className={'pointer'} onClick={this.removeAllItems}>x</div>
        </div>
        <br/>
        <TodoItems
          todoItems={this.state.todoItems}
          updateHandler={this.updateItem}
          removeHandler={this.removeItem}
        />
        <Input handleOnEnter={this.addItem} />
      </div>
    );
  }
}

export default Todo;
