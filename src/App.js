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
    ],
  };
  render() {
    return (
      <div className='App'>
        <AddTodo />
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
