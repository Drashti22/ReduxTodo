import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { Provider } from 'react-redux';
import  store  from '../src/Store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
