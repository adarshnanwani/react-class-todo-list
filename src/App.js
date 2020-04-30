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
    console.log('In toggleCompleted');
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todoItem) => {
          if (todoItem.id === id) {
            todoItem.completed = !todoItem.completed;
          }
          return todoItem;
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
        <AddTodo addTodo={this.addNewTodo} />
        <TodoList
          items={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleCompleted}
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
