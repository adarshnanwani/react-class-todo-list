import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTodo from './EditTodo';
import { toggleTodo, deleteTodo } from '../actions/todo';
import './TodoListItem.css';

class TodoListItem extends Component {
  state = {
    edit: false,
  };
  handleDelete = () => {
    this.props.deleteTodo(this.props.item._id);
  };
  handleToggle = () => {
    this.props.toggleTodo(this.props.item._id);
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
      textDecoration: item.completed ? 'line-through' : 'none',
    };
    const viewTodo = (
      <div className='TodoListItem'>
        <span style={styles}>{item.text}</span>
        {!item.completed && (
          <button
            className='button'
            onClick={this.toggleEdit}
            disabled={item.completed}
          >
            Edit
          </button>
        )}

        <button className='button' onClick={this.handleToggle}>
          {item.completed ? 'Open' : 'Complete'}
        </button>
        <button className='button' onClick={this.handleDelete}>
          Delete
        </button>
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

export default connect(null, { toggleTodo, deleteTodo })(TodoListItem);
