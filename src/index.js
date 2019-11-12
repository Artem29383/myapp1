import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import store from "./State/Store";

ReactDOM.render (<TodoList store = {store}/>, document.getElementById('root'));