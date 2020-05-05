import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

// JSX - HTML like syntax in JS
class App extends Component {
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

export default App;
