import React, { memo } from 'react';
import classes from './Task.module.css';
import classnames from 'classnames';

const Task = ({
  isCheck,
  task,
  editMode,
  cacheValueTask,
  currentEditTask,
  changeBox,
  removeTask,
  startChangeTask,
  onChangeHandler,
  stopChangeTaskHandler
}) => (
  <li className={classes.item} onDoubleClick={startChangeTask}>
    {!editMode
      ? <label className={classes.toggle}>
        <input type="checkbox" />
        <span
          onClick={changeBox}
          className={classnames(
            classes.checkboxCustom,
            isCheck && classes.check
          )}
        />
        <span className={classes.text}>
          {task}
        </span>
        <button className={classes.removeBtn} onClick={removeTask} />
      </label>
      : <input
        ref={currentEditTask}
        autoFocus
        className={classnames(
          classes.edit,
          editMode && classes.active
        )}
        value={cacheValueTask}
        onChange={onChangeHandler}
        onBlur={stopChangeTaskHandler}
        onKeyDown={stopChangeTaskHandler}
      />
    }
  </li>
);

export default memo(Task);