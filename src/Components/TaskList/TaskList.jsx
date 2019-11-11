import React from 'react';
import classes from "./TaskList.module.css";
import TaskContainer from "./Task/TaskContainer";


const TaskList = (props) => {

  const tasks = props.tasks.map((t, index) => {
    if (props.filter === 'All') {
      return <TaskContainer
        key = {index}
        id={t.id}
        check={t.check}
        task={t.title}
        {...props}/>
    } else if (props.filter === 'Active' && !t.check) {
      return <TaskContainer
        key = {index}
        id={t.id}
        check={t.check}
        task={t.title}
        {...props}/>
    } else if (props.filter === 'Completed' && t.check) {
      return <TaskContainer
        key = {index}
        id={t.id}
        check={t.check}
        task={t.title}
        {...props}/>
    }
  });

  return (<section className={classes.main}>
      <ul className={classes.todo__list}>
        {tasks}
      </ul>
    </section>
  )
};


export default TaskList;