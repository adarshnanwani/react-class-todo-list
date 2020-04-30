import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const itemsJsx = this.props.items.map((item) => (
      <TodoListItem
      item={item}
      key={item.id}
      delete={this.props.deleteTodo} />
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
