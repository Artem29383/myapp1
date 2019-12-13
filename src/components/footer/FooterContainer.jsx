import React, { useCallback } from 'react';
import Footer from './Footer';
import useSelector from '../../hooks/useSelector';
import {
  getFilterValueReselect,
  getLeftTasksReselect, getTasksCountReselect,
} from '../../models/todo/selectors';
import useAction from '../../hooks/useAction';
import {
  FILTER_TASKS,
  REMOVE_SELECT_TASKS
} from '../../models/todo/actions';


const FooterContainer = () => {
  const leftTasks = useSelector(getLeftTasksReselect);
  const filter = useSelector(getFilterValueReselect);
  const removeSelectedTasks = useAction(REMOVE_SELECT_TASKS);
  const filterTasks = useAction(FILTER_TASKS);
  const countTasks = useSelector(getTasksCountReselect);
  
  const filteredTasks = useCallback((e) => {
    filterTasks(e.currentTarget.innerText);
  }, []);
  
  const removeSelectedTask = () => {
    removeSelectedTasks();
  };
  
  
  return (
    <Footer
      leftTasks={leftTasks}
      removeSelectedTask={removeSelectedTask}
      filter={filter}
      filterTasks={filteredTasks}
      countTasks = {countTasks}
    />
  )
};

export default FooterContainer;