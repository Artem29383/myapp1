import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './state/Store';
import { Provider } from 'react-redux';
import TodoList from './components/todoList/TodoList';


const TodoListApp = () => {
  return (
    <TodoList />
  );
};


ReactDOM.render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>, document.getElementById('root'));

