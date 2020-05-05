import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { getAllTodos } from './actions/todo';
import './App.css';

const App = (props) => {
  useEffect(() => {
    props.getAllTodos();
  }, []);
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

export default connect(mapStateToProps, { getAllTodos })(App);
