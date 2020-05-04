import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { getAllTodos } from './actions/todo';
import './App.css';

// JSX - HTML like syntax in JS
class App extends Component {
  componentDidMount() {
    this.props.getAllTodos();
  }
  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default connect(null, { getAllTodos })(App);
