import React from 'react';
import classes from "./FieldCreatingNewTasks.module.css";
import {connect} from "react-redux";
import {addTask, selectAllTasks, setTaskValue} from "../../State/ToDo-Reducer";


class FieldCreatingNewTask extends React.Component {
  onChangeTaskValue = (value) => {
    this.props.setTaskValue(value);
  };

  generateId = () => {
    return Math.floor(1 + Math.random() * (9999999999999999));
  };


  onKeyDownCreateTask = (e) => {
    if (e.key === 'Enter') {
      this.props.addTask(this.generateId());
    }
  };

  selectAll = () => {
    this.props.selectAllTasks();
  };

  render() {
    return (
      <div className={classes.header}>
        <input onChange={(e) => {
          this.onChangeTaskValue(e.currentTarget.value)
        }} autoFocus={true} className={classes.todos__input} placeholder={'What needs to be done?'}
               value={this.props.taskValue} onKeyDown={this.onKeyDownCreateTask}/>
        <button onClick={this.selectAll} className={this.props.allSelected ? `${classes.toggle__all} ${classes.active}`
          :
          `${classes.toggle__all}`}></button>
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    taskValue: state.task.taskValue
  }
};

export default connect(mapStateToProps, {setTaskValue, addTask})(FieldCreatingNewTask);