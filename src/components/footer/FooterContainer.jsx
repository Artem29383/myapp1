import React, { useCallback, useEffect } from 'react';
import Footer from './Footer';
import useSelector from '../../hooks/useSelector';
import {
  getFilterValueReselect,
  getLeftTasksReselect,
  getTasksCountReselect,
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
  
  
  useEffect(() => {
    const path = window.location.hash.match(/[a-z]+/igm);
    if (path !== null) {
      filterTasks(path[0]);
    }
  }, []);
  
  const showAllTasks = useCallback(() => {
    filterTasks('all');
  }, [filterTasks]);
  
  const showActiveTasks = useCallback(() => {
    filterTasks('active');
  }, [filterTasks]);
  
  const showCompletedTasks = useCallback(() => {
    filterTasks('completed');
  }, [filterTasks]);
  
  const removeSelectedTask = useCallback(() => {
    removeSelectedTasks();
  }, [removeSelectedTasks]);
  
  
  return (
    <Footer
      leftTasks={leftTasks}
      removeSelectedTask={removeSelectedTask}
      filter={filter}
      showAllTasks={showAllTasks}
      showActiveTasks={showActiveTasks}
      showCompletedTasks={showCompletedTasks}
      countTasks={countTasks}
    />
  )
};

export default FooterContainer;