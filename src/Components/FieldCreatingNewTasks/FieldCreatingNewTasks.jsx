import React from 'react';
import classes from "./FieldCreatingNewTasks.module.css";


const FieldCreatingNewTask = (props) => {

  const BtnSelectAll = (props) => {
    if (!props.leftTasks && !props.tasks.length) {
      return <> </>
    } else {
      return (
        <button onClick={props.selectAll} className={props.allSelected
          ? `${classes.toggle__all} ${classes.active}`
          : `${classes.toggle__all}`}></button>)
    }
  };

  return (
    <div className={classes.header}>
      <input onChange={props.changeValue} autoFocus={true} className={classes.todos__input}
             placeholder={'What needs to be done?'}
             value={props.value} onKeyDown={(e) => props.onKeyDownCreateTask(e.key, props.value)}/>
      <BtnSelectAll leftTasks={props.leftTasks}
                    tasks={props.tasks}
                    allSelected={props.allSelected}
                    selectAll = {props.selectAll}/>
    </div>
  );
};


export default FieldCreatingNewTask;