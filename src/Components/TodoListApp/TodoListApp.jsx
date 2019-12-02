import React from 'react';
import classes from './../../TodoList.module.css';
import TaskList from '../TaskList/TaskList';
import FieldCreatingNewTaskContainer from '../FieldCreatingNewTasks/FieldCreatingNewTasksContainer';
import FooterContainer from '../Footer/FooterContainer';
import useSelectors from "../../HOOKS/useSelector";
import {getTasksCount} from "../../State/ToDo-Reselect";


const TodoListApp = () => {
  const countTasks = useSelectors(getTasksCount);
  return (
    <>
      <header className={classes.headerText}>todos</header>
      <div className={classes.todo}>
        <FieldCreatingNewTaskContainer countTasks = {countTasks}/>
        <TaskList/>
        {Boolean(countTasks) && <FooterContainer countTasks = {countTasks}/>}
      </div>
    </>
  );
};

export default TodoListApp;
