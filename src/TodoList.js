import React, { useEffect } from 'react';
import {
  getTasksReselect,
} from './State/ToDo-Reselect';
import TodoListApp from './Components/TodoListApp/TodoListApp';
import useSelectors from "./HOOKS/useSelector";
import {CONTROL_ALL_SELECTED, LEFT_TASKS} from "./Models/ActionConst";
import useAction from "./HOOKS/useDispatch";



const  TodoList  = () => {
  
  
  const tasks = useSelectors(getTasksReselect);
  const controllAllSelected = useAction(CONTROL_ALL_SELECTED);
  const getCountLeftTasks = useAction(LEFT_TASKS);
  useEffect(() => {
    const count = tasks.filter(t => !t.check).length;
    getCountLeftTasks(count);
    controllAllSelected();
  }, [tasks, controllAllSelected, getCountLeftTasks]);

    return (
     <TodoListApp  tasks = {tasks}/>
    );
};



export default TodoList;
