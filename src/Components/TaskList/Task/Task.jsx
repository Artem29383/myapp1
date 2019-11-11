import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
    return (<li className={classes.item} onDoubleClick={props.startChangeTask}>
        {!props.editMode ? <label className={classes.toggle}>
          <input type="checkbox"/>
          <span onClick={props.changeBox} className={props.check
            ? `${classes.checkbox__custom} ${classes.check}`
            : `${classes.checkbox__custom}`}></span>
          <span className={classes.text} id={props.id}>{props.task}</span>
          <button className={classes.removebtn} onClick={props.removeTask}></button>
          <button className={classes.noclick}></button>
        </label> : <input ref={props.currentEditTask}
                          autoFocus={true}
                          className={!props.editMode
                            ? `${classes.edit}`
                            : `${classes.edit} ${classes.active}`
                          }
                          value={props.cacheValueTask}
                          onChange={(e) => props.changeValueTask(e.currentTarget.value)}
                          onBlur={(e) => {props.stopChangeTask(e, props.cacheValueTask)}}
                          onKeyDown={(e) => {props.stopChangeTask(e, props.cacheValueTask)}}/>
        }
      </li>
    )
};

export default Task;