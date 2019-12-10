import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './state/Store';
import { Provider } from 'react-redux';
import {
  getFilterValueReselect,
  getIdsReselect,
  getLeftTasksReselect,
  getTasksReselect,
  isAllSelectedReselect,
} from './models/todo/selectors';
import useSelector from './hooks/useSelector';
import {
  CONTROL_ALL_SELECTED,
  LEFT_TASKS
} from './models/todo/actions';
import useAction from './hooks/useAction';
import TodoList from './components/todoList/TodoList';


const TodoListApp = () => {
  const isAllSelected = useSelector(isAllSelectedReselect);
  const tasks = useSelector(getTasksReselect);
  const filter = useSelector(getFilterValueReselect);
  const ids = useSelector(getIdsReselect);
  const controllAllSelected = useAction(CONTROL_ALL_SELECTED);
  const getCountLeftTasks = useAction(LEFT_TASKS);
  const count = useSelector(getLeftTasksReselect);
  useEffect(() => {
    getCountLeftTasks(count);
    controllAllSelected(isAllSelected);
  }, [tasks, ids, controllAllSelected, getCountLeftTasks, count, isAllSelected, filter]);
  return (
    <TodoList/>
  );
};


ReactDOM.render(
  <Provider store={store}>
    <TodoListApp/>
  </Provider>, document.getElementById('root'));

