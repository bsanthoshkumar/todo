import React from 'react';
import './Todo.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleOnChange(value) {
    this.setState({ value: value });
  }

  handleOnEnter() {
    if(this.props.handleOnEnter) {
      this.props.handleOnEnter(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        className={this.props.className}
        value={this.state.value}
        onChange={(e) => this.handleOnChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') this.handleOnEnter();
        }}
      />
    );
  }
}

export default Input;
