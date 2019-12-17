import React from 'react';
import classes from './TaskList.module.css';
import useSelector from '../../hooks/useSelector';
import { getFilteredTasksReselect } from '../../models/todo/selectors';
import TaskContainer from './Task/TaskContainer';


const TaskList = () => {
  const [filteredTasks, tasks] = useSelector(getFilteredTasksReselect);
  const createTask = filteredTasks.map((t) => (
      <TaskContainer
        key={t}
        id={t}
        isCheck={tasks[t].check}
        task={tasks[t].title}
      />
    )
  );
  
  
  return (
    <section className={classes.main}>
      <ul className={classes.todoList}>
        {createTask}
      </ul>
    </section>
  )
};


export default TaskList;