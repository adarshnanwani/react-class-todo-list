import React, { Component } from 'react';

class EditTodo extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.toggleEdit();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' />
          <input type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

export default EditTodo;
