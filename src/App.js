import React, { useState } from 'react';
import { v4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        text: value,
        _id: v4(),
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todoItem) => todoItem._id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      [...todos].map((todoItem) => {
        const item = { ...todoItem };
        if (item._id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const updateTodo = (id, newText) => {
    setTodos(
      [...todos].map((todoItem) => {
        const item = { ...todoItem };
        if (item._id === id) {
          item.text = newText;
        }
        return item;
      })
    );
  };

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
