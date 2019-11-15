import React from 'react';
import classes from './FieldCreatingNewTasks.module.css';


const FieldCreatingNewTask = React.memo(({
     tasks,
     changeValue,
     selectAll,
     value,
     allSelected
   }) => {
  return (
      <div className={classes.header}>
        <input
          onChange={changeValue}
          onKeyPress={changeValue}
          autoFocus
          className={classes.todosInput}
          value={value}
          placeholder='What needs to be done?'
        />
        {!!tasks.length &&
        <button
          onClick={selectAll}
          className={allSelected
            ? `${classes.toggleAll} ${classes.active}`
            : `${classes.toggleAll}`}
          />
        }
      </div>
    );
  });


export default FieldCreatingNewTask;