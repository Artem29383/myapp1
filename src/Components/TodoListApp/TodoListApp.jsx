import React from 'react';
import classes from './../../TodoList.module.css';
import TaskList from '../TaskList/TaskList';
import FieldCreatingNewTaskContainer from '../FieldCreatingNewTasks/FieldCreatingNewTasksContainer';
import FooterContainer from '../Footer/FooterContainer';


const TodoListApp = ({tasks}) => {
  return (
    <>
      <header className={classes.headerText}>todos</header>
      <div className={classes.todo}>
        <FieldCreatingNewTaskContainer tasks = {tasks}/>
        <TaskList tasks = {tasks}/>
        {Boolean(tasks.length) && <FooterContainer tasks = {tasks}/>}
      </div>
    </>
  );
};

export default TodoListApp;
