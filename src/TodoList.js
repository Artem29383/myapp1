import React, { useEffect } from 'react';
import {
  getFilterValueReselect, getIdsReselect,
  getTasksReselect,
} from './State/ToDo-Reselect';
import TodoListApp from './Components/TodoListApp/TodoListApp';
import useSelectors from "./HOOKS/useSelector";
import {CONTROL_ALL_SELECTED, LEFT_TASKS} from "./Models/ActionConst";
import useAction from "./HOOKS/useDispatch";



const  TodoList  = () => {
  
  const tasks = useSelectors(getTasksReselect);
  const filter = useSelectors(getFilterValueReselect);
  const ids = useSelectors(getIdsReselect);
  const controllAllSelected = useAction(CONTROL_ALL_SELECTED);
  const getCountLeftTasks = useAction(LEFT_TASKS);
  useEffect(() => {
    const count = ids.filter(t => !tasks[t].check).length;
    getCountLeftTasks(count);
    controllAllSelected();
  }, [tasks, ids, controllAllSelected, getCountLeftTasks, filter]);

    return (
     <TodoListApp  tasks = {tasks}/>
    );
};



export default TodoList;
