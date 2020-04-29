import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    newTodo: '',
  };
  handleChange = (event) => {
    const text = event.target.value;
    this.setState({
      newTodo: text,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newTodo);
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: '',
    });
  };
  render() {
    return (
      <div>
        <h3>Add New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <input type='submit' value='Add Todo' />
        </form>
      </div>
    );
  }
}

export default AddTodo;
