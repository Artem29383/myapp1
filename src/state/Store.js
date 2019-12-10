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

store.subscribe(() => {
  localStorage.setItem('todo', JSON.stringify(store.getState().task.tasks));
  localStorage.setItem('filter', JSON.stringify(store.getState().task.filter));
});

export default store;