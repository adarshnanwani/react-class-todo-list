import React, { Component } from 'react';
import EditTodo from './EditTodo';

class TodoListItem extends Component {
  state = {
    edit: false,
  };
  handleDelete = () => {
    this.props.delete(this.props.item.id);
  };
  handleToggle = () => {
    this.props.toggle(this.props.item.id);
  };
  toggleEdit = () => {
    const editValue = this.state.edit;
    this.setState({
      edit: !editValue,
    });
  };
  render() {
    const { item, update } = this.props;
    const styles = {
      color: 'red',
      textDecoration: item.completed ? 'line-through' : 'none',
    };
    const viewTodo = (
      <div>
        <span style={styles}>{item.text}</span>
        {!item.completed && (
          <button onClick={this.toggleEdit} disabled={item.completed}>
            Edit
          </button>
        )}

        <button onClick={this.handleToggle}>
          {item.completed ? 'Open' : 'Complete'}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
    return (
      <li>
        {this.state.edit ? (
          <EditTodo
            item={item}
            toggleEdit={this.toggleEdit}
            update={this.props.update}
          />
        ) : (
          viewTodo
        )}
      </li>
    );
  }
}

export default TodoListItem;
