import React, { Component } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

// JSX - HTML like syntax in JS
class App extends Component {
  state = {
    todos: [],
    loading: false,
  };
  addNewTodo = async (value) => {
    // Call the API end point and send data
    try {
      const res = await axios.post(
        'https://todo-list-ady.herokuapp.com/api/v1/todos',
        {
          text: value,
          completed: false,
        }
      );
      console.log('addNewTodo response', res);
      const newTodo = res.data.data;
      // On successful response, update the state
      // -- add new todo to the todos in state object
      this.setState((prevState) => {
        return {
          todos: [...prevState.todos, newTodo],
        };
      });
    } catch (err) {
      console.log(err);
    }
    // Older code
    // this.setState((prevState) => {
    //   return {
    //     todos: [
    //       ...prevState.todos,
    //       {
    //         text: value,
    //         id: v4(),
    //         completed: false,
    //       },
    //     ],
    //   };
    // });
  };

  deleteTodo = async (id) => {
    try {
      // Call the API with _id of todoItem to be deleted
      const res = await axios.delete(
        `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`
      );

      console.log('deleteTodo res', res);

      // Update the state
      this.setState((prevState) => {
        return {
          todos: [...prevState.todos].filter((todoItem) => todoItem._id !== id),
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  toggleCompleted = async (id) => {
    try {
      // Find out current completed value
      const todo = this.state.todos.find((todoItem) => todoItem._id === id);
      const currentCompleted = todo.completed;
      // Call the API and send update data
      const res = await axios.put(
        `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`,
        {
          completed: !currentCompleted,
        }
      );
      console.log('toggleCompleted response', res);
      const updatedTodoItem = res.data.data;

      // Update the state on successful response
      this.setState((prevState) => {
        return {
          todos: prevState.todos.map((todoItem) => {
            const item = { ...todoItem };
            if (item._id === id) {
              return updatedTodoItem;
            }
            return item;
          }),
        };
      });
    } catch (err) {
      console.log(err);
    }

    // OLDER Code
    // this.setState((prevState) => {
    //   return {
    //     todos: prevState.todos.map((todoItem) => {
    //       const item = { ...todoItem };
    //       if (item._id === id) {
    //         item.completed = !item.completed;
    //       }
    //       return item;
    //     }),
    //   };
    // });
  };

  updateTodo = async (id, newText) => {
    try {
      // Call the API and send update data
      const res = await axios.put(
        `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`,
        {
          text: newText,
        }
      );
      console.log('updateTodo response', res);
      const updatedTodoItem = res.data.data;
      // Update the state on successful response
      this.setState((prevState) => {
        return {
          todos: prevState.todos.map((todoItem) => {
            const item = { ...todoItem };
            if (item._id === id) {
              return updatedTodoItem;
            }
            return item;
          }),
        };
      });
    } catch (err) {
      console.log(err);
    }
    // OLDER Code
    // this.setState((prevState) => {
    //   return {
    //     todos: prevState.todos.map((todoItem) => {
    //       const item = { ...todoItem };
    //       if (item._id === id) {
    //         item.text = newText;
    //       }
    //       return item;
    //     }),
    //   };
    // });
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

    try {
      // Reach out to API
      const res = await axios.get(
        'https://todo-list-ady.herokuapp.com/api/v1/todos'
      );
      console.log('componentDidMount getAllTodos response', res);
      // Update state with the data
      this.setState({
        todos: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

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
// -- TodoList
// -- -- TodoListItem
// -- -- -- EditTodo

export default App;
