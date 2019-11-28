import React, { useEffect } from 'react';
import {
  getFilterValueReselect,
  getTasksReselect,
} from './State/ToDo-Reselect';
import TodoListApp from './Components/TodoListApp/TodoListApp';
import useHookSelector from "./HOOKS/useSelector";
import {CONTROL_ALL_SELECTED, LEFT_TASKS} from "./Models/ActionConst";
import useDispatchHook from "./HOOKS/useDispatch";



const  TodoList  = (props) => {
  
  
  const tasks = useHookSelector(getTasksReselect);
  const filter = useHookSelector(getFilterValueReselect);
  const controllAllSelected = useDispatchHook(CONTROL_ALL_SELECTED);
  const getCountLeftTasks = useDispatchHook(LEFT_TASKS);
  useEffect(() => {
    const count = tasks.filter(t => !t.check).length;
    getCountLeftTasks(count);
    controllAllSelected();
    localStorage.setItem('todo', JSON.stringify(tasks));
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [tasks, controllAllSelected, filter, props, getCountLeftTasks]);

    return (
     <TodoListApp  tasks = {tasks}/>
    );
};



export default TodoList;
