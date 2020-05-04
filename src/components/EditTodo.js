import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions/todo';
import './EditTodo.css';

class EditTodo extends Component {
  constructor(props) {
    super(props);
    console.log('In constructor');
  }
  state = {
    text: this.props.item.text,
    error: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text !== '') {
      this.props.updateTodo(this.props.item._id, this.state.text);
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
  componentDidMount() {
    console.log('In componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('In shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('In render');
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
  componentWillUnmount() {
    console.log('In componentWillUnmount');
  }
}

export default connect(null, { updateTodo })(EditTodo);
