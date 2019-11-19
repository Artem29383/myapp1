import React from 'react';
import classes from './Task.module.css';
import classNames from 'classnames';

const Task = ({
                isCheck,
  id,
  task,
  editMode,
  cacheValueTask,
  currentEditTask,
  changeBox,
  removeTask,
  startChangeTask,
  changeValueTask,
  stopChangeTask}) => {
    return (
      <li className={classes.item} onDoubleClick={startChangeTask}>
        {!editMode
          ? <label className={classes.toggle}>
            <input type="checkbox"/>
            <span onClick={changeBox} className={classNames(classes.checkboxCustom, isCheck && classes.check)}/>
            <span className={classes.text} id={id}>
              {task}
            </span>
            <button className={classes.removeBtn} onClick={removeTask}/>
            <button className={classes.taskText}/>
          </label>
          : <input
            ref={currentEditTask}
            autoFocus
            className={classNames(classes.edit, editMode && classes.active)}
            value={cacheValueTask}
            onChange={(e) => changeValueTask(e.currentTarget.value)}
            onBlur={(e) => stopChangeTask(e, cacheValueTask)}
            onKeyDown={(e) => stopChangeTask(e, cacheValueTask)}
          />
        }
      </li>
    )
};

export default React.memo(Task);