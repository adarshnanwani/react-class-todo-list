import React, { useState } from 'react';
import { v4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
  return (
    <div className='App'>
      <h1>Todo List App</h1>
      <AddTodo />
      <TodoList items={props.todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(App);
