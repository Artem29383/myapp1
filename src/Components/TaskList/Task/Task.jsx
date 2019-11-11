import React from 'react';
import classes from './Task.module.css';
import {getCountLeftTasks, removeTask} from "../../../State/ToDo-Reducer";

class Task extends React.Component {
  changeBox = () => {
    this.props.changeCheck(this.props.id);
  };

  removeTask = () => {
    this.props.removeTask(this.props.id);
  };

  render() {
    return (
      <li className={classes.item}>
        <label className={classes.toggle}>
          <input type="checkbox"/>
          <span onClick={this.changeBox} className={this.props.check ? `${classes.checkbox__custom} ${classes.check}`
            :
            `${classes.checkbox__custom}`}></span>
          <span className={classes.text} id={this.props.id}>{this.props.task}</span>
          <button className={classes.removebtn} onClick={this.removeTask}></button>
          <button className={classes.noclick}></button>
        </label>
        <input className={classes.edit}/>
      </li>
    )
  }
}

export default Task;