import React, { memo } from 'react';
import classes from './Task.module.css';
import classnames from 'classnames';

const Task = ({
  isCheck,
  task,
  editMode,
  cacheValueTask,
  changeCheckBox,
  removeTask,
  startChangeTask,
  onChangeHandler,
  stopChangeTaskHandler,
  stopChangeTasksHandlerBlur
}) => (
  <li className={classes.item} onDoubleClick={startChangeTask}>
    {!editMode
      ? <label className={classes.toggle}>
        <input type="checkbox" />
        <span
          onClick={changeCheckBox}
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
        autoFocus
        className={classnames(
          classes.edit,
          editMode && classes.active
        )}
        value={cacheValueTask}
        onChange={onChangeHandler}
        onBlur={stopChangeTasksHandlerBlur}
        onKeyDown={stopChangeTaskHandler}
      />
    }
  </li>
);

export default memo(Task);