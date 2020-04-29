import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const itemsJsx = this.props.items.map((item) => (
      <TodoListItem val={item.text} key={item.id} />
    ));
    return (
      <div>
        <h2>Todo List</h2>
        <ul>{itemsJsx}</ul>
      </div>
    );
  }
}

export default TodoList;
