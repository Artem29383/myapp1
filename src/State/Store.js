import {combineReducers, createStore, applyMiddleware} from "redux";
import taskReducer from "./ToDo-Reducer";


let reducer = combineReducers(
  {
    task: taskReducer
  }
);

let store = createStore(reducer);

export default store;