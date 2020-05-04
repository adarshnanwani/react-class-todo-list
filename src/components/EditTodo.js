import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions/todo';
import './EditTodo.css';

const EditTodo = (props) => {
  const [text, setText] = useState(props.item.text);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== '') {
      props.updateTodo(props.item._id, text);
      setText('');
      props.toggleEdit();
    } else {
      setError(true);
    }
  };
  const handleChange = (event) => {
    const text = event.target.value;
    setText(text);
    setError(false);
  };

  return (
    <div className='EditTodo'>
      <h3>Edit Todo</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} />
        {error && <span className='error'>Todo cannot be empty.</span>}
        <input className='button' type='submit' value='Save' />
      </form>
    </div>
  );
};

export default connect(null, { updateTodo })(EditTodo);
