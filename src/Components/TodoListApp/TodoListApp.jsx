import React from 'react';
import classes from './../../TodoList.module.css';
import TaskList from '../TaskList/TaskList';
import FieldCreatingNewTaskContainer from '../FieldCreatingNewTasks/FieldCreatingNewTasksContainer';
import FooterContainer from '../Footer/FooterContainer';


const TodoListApp = (props) => {
  return (
    <>
      <header className={classes.headerText}>todos</header>
      <div className={classes.todo}>
        <FieldCreatingNewTaskContainer {...props}/>
        <TaskList {...props}/>
        {Boolean(props.tasks.length) && <FooterContainer {...props}/>}
      </div>
    </>
  );
};

export default TodoListApp;
