import React from 'react';
import classes from './FieldCreatingNewTasks.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FieldCreatingNewTask =({
  isTasks,
  changeValue,
  selectAll,
  value,
  isAllSelected}) => {
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
        className={classNames(classes.toggleAll, isAllSelected && classes.active)}/>}
    </div>
  );
};

FieldCreatingNewTask.propTypes = {
  isTasks: PropTypes.bool,
  changeValue: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired,
  value: PropTypes.string,
  isAllSelected: PropTypes.bool
};

FieldCreatingNewTask.defaultProps = {
  isTasks: true,
  isAllSelected: true,
  value: ''
};

export default  React.memo(FieldCreatingNewTask);