import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

// function App() {
//   return <div className='App'>This is working</div>;
// }

// JSX - HTML like syntax in JS
class App extends Component {
  state = {
    todos: [],
    loading: false,
  };
  addNewTodo = (value) => {
    console.log(value);
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            text: value,
            id: v4(),
          },
        ],
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
        <TodoList items={this.state.todos} />
      </div>
    );
  }
}

// {
//   text: 'adzasd',   --- Todo item data
//   id: 3    --- Todo item unique id
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
