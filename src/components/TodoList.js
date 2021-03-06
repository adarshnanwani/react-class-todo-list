import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

class TodoList extends Component {
  state = {
    filter: 'all',
  };
  updateFilter = (val) => {
    this.setState({
      filter: val,
    });
  };
  render() {
    const itemsJsx = this.props.items
      .filter((item) => {
        // if (this.state.filter === 'all') return true;
        // if (this.state.filter === 'open') {
        //   if (!item.completed) {
        //     return true;
        //   }
        // }
        // if (this.state.filter === 'completed') {
        //   if (item.completed) {
        //     return true;
        //   }
        // }
        return this.state.filter === 'all'
          ? true
          : this.state.filter === 'open' && !item.completed
          ? true
          : this.state.filter === 'completed' && item.completed
          ? true
          : false;
      })
      .map((item) => (
        <TodoListItem
          item={item}
          key={item._id}
          delete={this.props.deleteTodo}
          toggle={this.props.toggleTodo}
          update={this.props.updateTodo}
        />
      ));
    return (
      <div className='TodoList'>
        <h3>Todo List ({this.props.items.length})</h3>
        <div className='filters'>
          <span>
            <input
              type='radio'
              name='filter'
              value='all'
              id='all'
              defaultChecked={true}
              onClick={() => this.updateFilter('all')}
            />
            <label htmlFor='all'>All</label>
          </span>
          <span>
            <input
              type='radio'
              name='filter'
              value='open'
              id='open'
              onClick={() => this.updateFilter('open')}
            />
            <label htmlFor='open'>Open</label>
          </span>
          <span>
            <input
              type='radio'
              name='filter'
              value='completed'
              id='completed'
              onClick={() => this.updateFilter('completed')}
            />
            <label htmlFor='completed'>Completed</label>
          </span>
        </div>
        <ul>{itemsJsx}</ul>
      </div>
    );
  }
}

export default TodoList;
