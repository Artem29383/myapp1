import React, {useEffect} from 'react';
import classes from './../../TodoList.module.css';
import Footer from "../Footer/Footer";
import FieldCreatingNewTask from "../FieldCreatingNewTasks/FieldCreatingNewTasks";
import TaskList from "../TaskList/TaskList";


const TodoListApp = (props) => {
    return (
      <>
        <header className={classes.header__text}>todos</header>
        <div className={classes.todo}>
          <FieldCreatingNewTask {...props}/>
          <TaskList {...props}/>
          {!props.leftTasks && !props.tasks.length
            ? <> </>
            : <Footer {...props}/>}
        </div>
      </>
    );
};

export default TodoListApp;
