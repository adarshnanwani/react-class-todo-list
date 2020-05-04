import React, { useState } from 'react';
import EditTodo from './EditTodo';
import './TodoListItem.css';

const TodoListItem = (props) => {
  const [edit, setEdit] = useState(false);
  const { item } = props;
  const styles = {
    textDecoration: item.completed ? 'line-through' : 'none',
  };

  const handleDelete = () => {
    props.delete(props.item._id);
  };
  const handleToggle = () => {
    props.toggle(props.item._id);
  };
  const toggleEdit = () => {
    const editValue = edit;
    setEdit(!editValue);
  };

  const viewTodo = (
    <div className='TodoListItem'>
      <span style={styles}>{item.text}</span>
      {!item.completed && (
        <button
          className='button'
          onClick={toggleEdit}
          disabled={item.completed}
        >
          Edit
        </button>
      )}
      <button className='button' onClick={handleToggle}>
        {item.completed ? 'Open' : 'Complete'}
      </button>
      <button className='button' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
  return (
    <li>
      {edit ? (
        <EditTodo item={item} toggleEdit={toggleEdit} update={props.update} />
      ) : (
        viewTodo
      )}
    </li>
  );
};

export default TodoListItem;
