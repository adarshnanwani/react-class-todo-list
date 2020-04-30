import React, { Component } from 'react';

class TodoListItem extends Component {
  handleDelete = () => {
    this.props.delete(this.props.item.id);
  };
  handleToggle = () => {
    console.log('In toggle');
    this.props.toggle(this.props.item.id);
  };
  render() {
    return (
      <li>
        <span>
          {this.props.item.text}
          <button>Edit</button>
          <button onClick={this.handleToggle}>Complete</button>
          <button onClick={this.handleDelete}>Delete</button>
        </span>
      </li>
    );
  }
}

export default TodoListItem;
