import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>
        Todo List App <Link to='/add'>Add</Link>
        <Link to='/list'>List</Link>
      </h1>
      <Switch>
        <Route path='/add' component={AddTodo} />
        <Route path='/list' component={TodoList} />
      </Switch>
    </div>
  );
};

export default App;
