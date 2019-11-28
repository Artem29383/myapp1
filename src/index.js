import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import store from "./State/Store";
import {Provider} from "react-redux";

ReactDOM.render (
  <Provider store={store}>
  <TodoList/>
  </Provider>, document.getElementById('root'));