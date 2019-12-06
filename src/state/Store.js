import { combineReducers, createStore } from 'redux';
import taskReducer from '../models/todo/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';


const reducer = combineReducers(
  {
    task: taskReducer
  }
);

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));


export default store;