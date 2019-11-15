import React from 'react';
import classes from './Task.module.css';

const Task =
  React.memo(({
     check,
     id,
     task,
     editMode,
     cacheValueTask,
     currentEditTask,
     changeBox,
     removeTask,
     startChangeTask,
     changeValueTask,
     stopChangeTask
   }) => {
    return (<li className={classes.item} onDoubleClick={startChangeTask}>
        {!editMode
          ? <label className={classes.toggle}>
            <input type="checkbox"/>
            <span
              onClick={changeBox}
              className={check
                ? `${classes.checkboxCustom} ${classes.check}`
                : `${classes.checkboxCustom}`}
            />
            <span
              className={classes.text}
              id={id}>
              {task}
          </span>
            <button
              className={classes.removeBtn}
              onClick={removeTask}
            />
            <button className={classes.taskText}/>
          </label>
          : <input
            ref={currentEditTask}
            autoFocus
            className={!editMode
              ? `${classes.edit}`
              : `${classes.edit} ${classes.active}`}
            value={cacheValueTask}
            onChange={(e) => changeValueTask(e.currentTarget.value)}
            onBlur={(e) => stopChangeTask(e, cacheValueTask)}
            onKeyDown={(e) => stopChangeTask(e, cacheValueTask)}
          />
        }
      </li>
    )
  });

export default Task;