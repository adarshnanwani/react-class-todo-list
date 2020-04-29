import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

// function App() {
//   return <div className='App'>This is working</div>;
// }

// JSX - HTML like syntax in JS
class App extends Component {
  state = {
    todos: [
      { text: 'Item First', id: 1 },
      { text: 'Item Second', id: 2 },
      { text: 'Item 3', id: 3 },
      { text: 'Item 4', id: 4 },
    ],
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
            id: 5,
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
