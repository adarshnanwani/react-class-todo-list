import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import './AddTodo.css';

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const text = event.target.value;
    setNewTodo(text);
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== '') {
      props.addTodoAction(newTodo);
      setNewTodo('');
    } else {
      setError(true);
    }
  };

  return (
    <div className='AddTodo'>
      <h3>Add New Todo</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={newTodo} onChange={handleChange} />
        {error && <span className='error'>Todo cannot be empty</span>}
        <input className='button' type='submit' value='Add Todo' />
      </form>
    </div>
  );
};

export default connect(null, { addTodoAction: addTodo })(AddTodo);
