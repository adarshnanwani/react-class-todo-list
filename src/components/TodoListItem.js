import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return <li>{this.props.val}</li>;
  }
}

export default TodoListItem;
