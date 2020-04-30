import React, { Component } from 'react';

class TodoListItem extends Component {
  handleDelete = () => {
    this.props.delete(this.props.item.id);
  };
  render() {
    return (
      <li>
        <span>
          {this.props.item.text}
          <button>Edit</button>
          <button>Complete</button>
          <button
          onClick={this.handleDelete}>
            Delete
          </button>
        </span>
      </li>
    );
  }
}

export default TodoListItem;
