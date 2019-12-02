import React  from 'react';
import classes from './TaskList.module.css';
import useSelectors from "../../HOOKS/useSelector";
import {
  getFilteredTasksReselect,
  getFilterValueReselect,
  getTasksReselect
} from "../../State/ToDo-Reselect";
import TaskContainer from "./Task/TaskContainer";


const TaskList = () => {
  let tasks = useSelectors(getTasksReselect);
  const filter = useSelectors(getFilterValueReselect);
  const filteredTasks = useSelectors(getFilteredTasksReselect(filter, tasks));
  tasks = filteredTasks.map((t, index) => {
    return <TaskContainer
      key={index}
      id={tasks[t].id}
      isCheck={tasks[t].check}
      task={tasks[t].title}
      tasks = {tasks}
    />;
  });
  
  
  return (<section className={classes.main}>
      <ul className={classes.todoList}>
        {tasks}
      </ul>
    </section>
  )
};


export default TaskList;