import React from 'react';
import Footer from './Footer';
import useHookSelector from "../../HOOKS/useSelector";
import {getFilterValueReselect, getLeftTasksReselect} from "../../State/ToDo-Reselect";
import useDispatchHook from "../../HOOKS/useDispatch";
import {FILTER_TASKS, REMOVE_SELECT_TASKS} from "../../Models/ActionConst";


const FooterContainer = ({tasks}) => {
  const leftTasks = useHookSelector(getLeftTasksReselect);
  const filter = useHookSelector(getFilterValueReselect);
  const removeSelectedTasks = useDispatchHook(REMOVE_SELECT_TASKS);
  const filterTasks = useDispatchHook(FILTER_TASKS);
  
  const filteredTasks = (method) => {
    filterTasks(method);
  };
  
  const removeSelectedTask = () => {
    const task = tasks.filter(t => !t.check);
    removeSelectedTasks(task)
  };
  
  

  return (
    <Footer
      leftTasks={leftTasks}
      removeSelectedTask={removeSelectedTask}
      tasks={tasks.length}
      filter={filter}
      filterTasks = {filteredTasks}
    />
  )
};

export default FooterContainer;