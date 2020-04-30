import React, { Component } from 'react';

class TodoListItem extends Component {
  handleDelete = () => {
    this.props.delete(this.props.item.id);
  };
  handleToggle = () => {
    this.props.toggle(this.props.item.id);
  };
  render() {
    const { item } = this.props;
    const styles = {
      color: 'red',
      textDecoration: item.completed ? 'line-through' : 'none',
    };
    return (
      <li>
        <span style={styles}>{item.text}</span>
        <button>Edit</button>
        <button onClick={this.handleToggle}>
          {item.completed ? 'Open' : 'Complete'}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;
