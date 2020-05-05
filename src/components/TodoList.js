import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  const [filter, setFilter] = useState('all');
  const updateFilter = (val) => {
    setFilter(val);
  };

  const itemsJsx = props.items
    .filter((item) => {
      return filter === 'all'
        ? true
        : filter === 'open' && !item.completed
        ? true
        : filter === 'completed' && item.completed
        ? true
        : false;
    })
    .map((item) => <TodoListItem item={item} key={item._id} />);
  return (
    <div className='TodoList'>
      <h3>Todo List ({props.items.length})</h3>
      <div className='filters'>
        <span>
          <input
            type='radio'
            name='filter'
            value='all'
            id='all'
            defaultChecked={true}
            onClick={() => updateFilter('all')}
          />
          <label htmlFor='all'>All</label>
        </span>
        <span>
          <input
            type='radio'
            name='filter'
            value='open'
            id='open'
            onClick={() => updateFilter('open')}
          />
          <label htmlFor='open'>Open</label>
        </span>
        <span>
          <input
            type='radio'
            name='filter'
            value='completed'
            id='completed'
            onClick={() => updateFilter('completed')}
          />
          <label htmlFor='completed'>Completed</label>
        </span>
      </div>
      <ul>{itemsJsx}</ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.todos,
});

export default connect(mapStateToProps)(TodoList);
