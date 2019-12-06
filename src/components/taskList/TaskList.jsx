import React  from 'react';
import classes from './TaskList.module.css';
import useSelector from '../../hooks/useSelector';
import {
  getFilteredTasksReselect,
  getFilterValueReselect,
  getTasksReselect
} from '../../models/todo/selectors';
import TaskContainer from './Task/TaskContainer';


const TaskList = () => {
  let tasks = useSelector(getTasksReselect);
  const filter = useSelector(getFilterValueReselect);
  const filteredTasks = useSelector(getFilteredTasksReselect(filter, tasks));
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