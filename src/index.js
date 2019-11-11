import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./State/Store";

ReactDOM.render (
  <BrowserRouter >
    <Provider store = {store}>
      <TodoList/>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));