import { combineReducers, createStore } from 'redux';
import taskReducer from './../Models/todo-Reducer';


let reducer = combineReducers(
  {
    task: taskReducer
  }
);

let store = createStore(reducer);

export default store;