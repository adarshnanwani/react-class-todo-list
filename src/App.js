import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

// JSX - HTML like syntax in JS
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
            id: v4(),
            completed: false,
          },
        ],
      };
    });
  };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos].filter((todoItem) => todoItem.id !== id),
      };
    });
  };

  toggleCompleted = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todoItem) => {
          const item = { ...todoItem };
          if (item.id === id) {
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
          if (item.id === id) {
            item.text = newText;
          }
          return item;
        }),
      };
    });
  };

  render() {
    const sum = (a, b) => a + b;
    const add = sum;
    add(3, 4);
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

// {
//   text: 'adzasd',   --- Todo item data
//   id: 3,    --- Todo item unique id
//   completed: false
// }

// App component (Todo list App)
// -- AddTodo
// -- -- Button
// -- TodoList
// -- -- TodoListItem
// -- -- -- Button
// -- -- EditTodo
// -- -- -- Button
// -- -- Filter

export default App;
