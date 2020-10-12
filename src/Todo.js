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
    this.updateTitle = this.updateTitle.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.toggleHideClass = this.toggleHideClass.bind(this);
  }

  updateTitle(text) {
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
    this.setState(() => ({ title: 'Todo', todoItems: this.state.todoItems}));
  }

  toggleHideClass(element) {
    console.log(element, "--");
    if(element.classList.contains('hide')) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  }

  render() {
    return (
      <div className='mainDivision'>
        <Title title={this.state.title} toggleHideClass={this.toggleHideClass} removeAllItems={this.removeAllItems} updateTitle={this.updateTitle}/>
        <br/>
        <TodoItems todoItems={this.state.todoItems} updateItem={this.updateItem} removeItem={this.removeItem} />
        <Input handleOnEnter={this.addItem} />
      </div>
    );
  }
}

const Title = ({title, toggleHideClass, removeAllItems, updateTitle}) => 
 <div className='heading' onMouseOver={({target}) => toggleHideClass(target.lastChild)} onMouseLeave={({target}) => toggleHideClass(target.lastChild)}>
    <input value={title} className='title' onChange={(e) => updateTitle(e.target.value)} onMouseOver={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()} />
    <span className='removeButton hide' onClick={removeAllItems} onMouseOver={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()}>x</span>
  </div> 

export default Todo;
