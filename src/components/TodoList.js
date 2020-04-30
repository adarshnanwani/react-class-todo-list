import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const itemsJsx = this.props.items.map((item) => (
      <TodoListItem
        item={item}
        key={item.id}
        delete={this.props.deleteTodo}
        toggle={this.props.toggleTodo}
        update={this.props.updateTodo}
      />
    ));
    return (
      <div>
        <h3>Todo List</h3>
        <ul>{itemsJsx}</ul>
      </div>
    );
  }
}

export default TodoList;
