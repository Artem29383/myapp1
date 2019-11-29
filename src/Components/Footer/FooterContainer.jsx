import React from 'react';
import Footer from './Footer';
import useSelectors from "../../HOOKS/useSelector";
import {getFilterValueReselect, getLeftTasksReselect} from "../../State/ToDo-Reselect";
import useAction from "../../HOOKS/useDispatch";
import {FILTER_TASKS, REMOVE_SELECT_TASKS} from "../../Models/ActionConst";


const FooterContainer = ({countTasks}) => {
  const leftTasks = useSelectors(getLeftTasksReselect);
  const filter = useSelectors(getFilterValueReselect);
  const removeSelectedTasks = useAction(REMOVE_SELECT_TASKS);
  const filterTasks = useAction(FILTER_TASKS);
  
  const filteredTasks = (method) => {
    filterTasks(method);
  };
  
  const removeSelectedTask = () => {
    removeSelectedTasks()
  };
  
  

  return (
    <Footer
      leftTasks={leftTasks}
      removeSelectedTask={removeSelectedTask}
      countTasks={countTasks}
      filter={filter}
      filterTasks = {filteredTasks}
    />
  )
};

export default FooterContainer;