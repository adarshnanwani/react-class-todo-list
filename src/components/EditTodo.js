import React, { Component } from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type='submit' value='Save' />
        </form>
      </div>
    );
  }
}

export default EditTodo;
