import React, {useEffect} from 'react';
import TaskList from "../TaskList";
import {getCountLeftTasks} from "../../../State/ToDo-Reducer";


const TaskListContainer = (props) => {





  return (
    <>
      <TaskList tasks={props.tasks}
                changeCheck={props.changeCheck}
                removeTask={props.removeTask}
                getCountLeftTasks = {props.getCountLeftTasks}
                leftTasks = {props.leftTasks}/>
    </>
  )
};

export default TaskListContainer;