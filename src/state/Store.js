import { combineReducers, createStore } from 'redux';
import taskReducer from '../models/todo/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';


const reducer = combineReducers(
  {
    task: taskReducer
  }
);

const store = createStore(reducer);


export default store;
