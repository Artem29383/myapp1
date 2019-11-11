import React from 'react';
import classes from "./TaskList.module.css";
import Task from "./Task/Task";


const TaskList = (props) => {

      let tasks = props.tasks.map(t => <Task key={t.id}
                                                  id={t.id}
                                                  check={t.check}
                                                  task={t.todo}
                                                  changeCheck={props.changeCheck}
                                                  removeTask={props.removeTask}/>);

      return (
        <section className={classes.main}>
          <ul className={classes.todo__list}>
            {tasks}
          </ul>
        </section>
      )
};





export default TaskList;