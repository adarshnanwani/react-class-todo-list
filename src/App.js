import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addNewTodo = async (value) => {
    try {
      // Call the API end point and send data
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
      setTodos([...todos, newTodo]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      // Call the API with _id of todoItem to be deleted
      const res = await axios.delete(
        `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`
      );

      console.log('deleteTodo res', res);

      // Update the state
      setTodos([...todos].filter((todoItem) => todoItem._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCompleted = async (id) => {
    try {
      // Find out current completed value
      const todo = todos.find((todoItem) => todoItem._id === id);
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
      setTodos(
        [...todos].map((todoItem) => {
          const item = { ...todoItem };
          if (item._id === id) {
            return updatedTodoItem;
          }
          return item;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (id, newText) => {
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
      setTodos(
        [...todos].map((todoItem) => {
          const item = { ...todoItem };
          if (item._id === id) {
            return updatedTodoItem;
          }
          return item;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reach out to API
        const res = await axios.get(
          'https://todo-list-ady.herokuapp.com/api/v1/todos'
        );
        console.log('useEffect componentDidMount simulated response', res);
        // Update state with the data
        setTodos(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>Todo List App</h1>
      <AddTodo addTodo={addNewTodo} />
      <TodoList
        items={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleCompleted}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
