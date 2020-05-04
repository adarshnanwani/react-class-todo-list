import React, { Component } from 'react';
import { v4 } from 'uuid';
import axios from './todoListAxios';
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
            _id: v4(),
            completed: false,
          },
        ],
      };
    });
  };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos].filter((todoItem) => todoItem._id !== id),
      };
    });
  };

  toggleCompleted = async (id) => {
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

  updateTodo = async (id, newText) => {
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

  async componentDidMount() {
    console.log('In componentDidMount');
    // Reach out to API
    // axios
    //   .get('https://todo-list-ady.herokuapp.com/api/v1/todos')
    //   .then((res) => {
    //     console.log(res.data);
    //     // Update state with the data
    //     this.setState({
    //       todos: res.data.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // try {
    //   // Reach out to API
    //   const res = await axios.get('todos');
    //   console.log('componentDidMount getAllTodos response', res);
    //   // Update state with the data
    //   this.setState({
    //     todos: res.data.data,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        <AddTodo />
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
