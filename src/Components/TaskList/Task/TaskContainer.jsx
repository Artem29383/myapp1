import React, { useState, useCallback, useRef } from 'react';
import Task from './Task';

const TaskContainer = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [cacheValueTask, changeCacheValueTask] = useState('');
  const currentEditTask = useRef(null);

  const changeBox = () => {
    props.changeCheck(props.id);
  };

  const removeTask = () => {
    props.removeTask(props.id);
  };

  const startChangeTask = () => {
    setEditMode(true);
    changeCacheValueTask(props.task);
  };

  const changeValueTask = useCallback((value) => {
    changeCacheValueTask(value);
  }, [cacheValueTask]);

  const stopEditTask = (value) => {
    props.endEditTask(props.id, value);
    if (value === '') {
      props.removeEmptyTask();
    }
    setEditMode(false);
  };


  const stopChangeTask = (event, value) => {
    if (event.key === 'Enter') {
      stopEditTask(value);
    } else if (event.currentTarget === currentEditTask.current && !event.key) {
      stopEditTask(value);
    } else if (event.key === 'Escape') {
      stopEditTask(props.task);
    }
  };


  return (
    <Task
      check = {props.check}
      id = {props.id}
      task = {props.task}
      editMode={editMode}
      cacheValueTask={cacheValueTask}
      currentEditTask={currentEditTask}
      changeBox={changeBox}
      removeTask={removeTask}
      startChangeTask={startChangeTask}
      changeValueTask={(changeValueTask)}
      stopChangeTask={stopChangeTask}
    />
  )
};

export default TaskContainer;