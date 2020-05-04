import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    loading: false,
  };
  addNewTodo = (value) => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            text: value,
            _id: v4(),
            completed: false,
          },
        ],
      };
    });
  };

  deleteTodo = (id) => {
    // Update the state
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos].filter((todoItem) => todoItem._id !== id),
      };
    });
  };

  toggleCompleted = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todoItem) => {
          const item = { ...todoItem };
          if (item._id === id) {
            item.completed = !item.completed;
          }
          return item;
        }),
      };
    });
  };

  updateTodo = (id, newText) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todoItem) => {
          const item = { ...todoItem };
          if (item._id === id) {
            item.text = newText;
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        <AddTodo addTodo={this.addNewTodo} />
        <TodoList
          items={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleCompleted}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

export default App;
