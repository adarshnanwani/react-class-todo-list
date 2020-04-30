import React, { Component } from 'react';
import './EditTodo.css';

class EditTodo extends Component {
  state = {
    text: this.props.item.text,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.update(this.props.item.id, this.state.text);
    this.setState({
      text: '',
    });
    this.props.toggleEdit();
  };
  handleChange = (event) => {
    const text = event.target.value;
    this.setState({
      text: text,
    });
  };
  render() {
    return (
      <div className='EditTodo'>
        <h3>Edit Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input className='button' type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

export default EditTodo;
