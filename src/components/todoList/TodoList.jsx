import React, { Fragment } from 'react';
import classes from './../../TodoList.module.css';
import TaskList from '../taskList/TaskList';
import FieldCreatingNewTaskContainer from '../fieldCreatingNewTasks/FieldCreatingNewTasksContainer';
import FooterContainer from '../footer/FooterContainer';
import useSelector from '../../hooks/useSelector';
import { isTasksReselect } from '../../models/todo/selectors';


const TodoList = () => {
  const isTasks = useSelector(isTasksReselect);
  return (
    <Fragment>
      <header className={classes.headerText}>todos</header>
      <div className={classes.todo}>
        <FieldCreatingNewTaskContainer countTasks={isTasks}/>
        <TaskList/>
        {isTasks && <FooterContainer/>}
      </div>
    </Fragment>
  );
};

export default TodoList;
