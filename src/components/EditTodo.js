import React, { Component } from 'react';
import './EditTodo.css';

class EditTodo extends Component {
  state = {
    text: this.props.item.text,
    error: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text !== '') {
      this.props.update(this.props.item.id, this.state.text);
      this.setState({
        text: '',
      });
      this.props.toggleEdit();
    } else {
      this.setState({
        error: true,
      });
    }
  };
  handleChange = (event) => {
    const text = event.target.value;
    this.setState({
      text: text,
      error: false,
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
          {this.state.error && (
            <span className='error'>Todo cannot be empty.</span>
          )}
          <input className='button' type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

export default EditTodo;
