import React  from 'react';
import classes from './TaskList.module.css';
import useSelectors from "../../HOOKS/useSelector";
import {getFilteredTasksReselect, getFilterValueReselect} from "../../State/ToDo-Reselect";
import TaskContainer from "./Task/TaskContainer";


const TaskList = ({tasks}) => {
  const filter = useSelectors(getFilterValueReselect);
  let tasksd = useSelectors(getFilteredTasksReselect(filter));
  tasksd = tasksd.map((t, index) => <TaskContainer
    key={index}
    id={t.id}
    isCheck={t.check}
    task={t.title}
    tasks = {tasks}
  />);
  
  return (<section className={classes.main}>
      <ul className={classes.todoList}>
        {tasksd}
      </ul>
    </section>
  )
};


export default TaskList;