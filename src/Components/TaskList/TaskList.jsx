import React  from 'react';
import classes from './TaskList.module.css';
import useHookSelector from "../../HOOKS/useSelector";
import {getFilteredTasksReselect, getFilterValueReselect} from "../../State/ToDo-Reselect";


const TaskList = ({tasks}) => {
  const filter = useHookSelector(getFilterValueReselect);
  const tasksd = useHookSelector(getFilteredTasksReselect(filter, tasks));

  return (<section className={classes.main}>
      <ul className={classes.todoList}>
        {tasksd}
      </ul>
    </section>
  )
};


export default TaskList;