import React, { memo } from 'react';
import classes from './FieldCreatingNewTasks.module.css';
import classnames from 'classnames';

const FieldCreatingNewTask =({
  isTasks,
  changeValue,
  selectAll,
  value,
  isAllSelected
}) => {
  return (
    <div className={classes.header}>
      <input
        onChange={changeValue}
        onKeyPress={changeValue}
        autoFocus
        className={classes.todosInput}
        value={value}
        placeholder="What needs to be done?"
      />
      {isTasks &&
      <button
        onClick={selectAll}
        className={classnames(
          classes.toggleAll,
          !isAllSelected && classes.active
        )}
      />}
    </div>
  );
};


export default  memo(FieldCreatingNewTask);