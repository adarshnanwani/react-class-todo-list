import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import './AddTodo.css';

class AddTodo extends Component {
  state = {
    newTodo: '',
    error: false,
  };
  handleChange = (event) => {
    const text = event.target.value;
    this.setState({
      newTodo: text,
      error: false,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo !== '') {
      this.props.addTodoAction(this.state.newTodo);
      this.setState({
        newTodo: '',
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };
  render() {
    return (
      <div className='AddTodo'>
        <h3>Add New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          {this.state.error && (
            <span className='error'>Todo cannot be empty</span>
          )}
          <input className='button' type='submit' value='Add Todo' />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});  // --- not required here
const mapDispatchToProps = { addTodoAction: addTodo };
export default connect(null, mapDispatchToProps)(AddTodo);
