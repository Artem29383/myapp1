import React, { useState, useCallback } from 'react';
import Task from './Task';
import useAction from '../../../hooks/useAction';
import {
  CHANGE_TASK_STATUS,
  CHANGE_TASK_TITLE,
  REMOVE_TASK
} from '../../../models/todo/actions';

const TaskContainer = ({
  id,
  isCheck,
  task,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [cacheValueTask, changeCacheValueTask] = useState('');
  const changeTaskStatus = useAction(CHANGE_TASK_STATUS);
  const deleteTask = useAction(REMOVE_TASK);
  const changeTaskTitle = useAction(CHANGE_TASK_TITLE);
  const changeCheckBox = useCallback(() => {
    changeTaskStatus(id);
  }, [changeTaskStatus, id]);
  const removeTask = () => {
    deleteTask(id);
  };

  const startChangeTask = () => {
    setEditMode(true);
    changeCacheValueTask(task);
  };

  const onChangeHandler = useCallback((e) => {
    changeCacheValueTask(e.currentTarget.value);
  }, [changeCacheValueTask]);

  const stopEditTask = useCallback((value) => {
    changeTaskTitle({id: id, title: value});
    if (value === '') {
      deleteTask(id);
    }
    setEditMode(false);
  }, [changeTaskTitle, deleteTask, id]);
  

  const stopChangeTasksHandlerBlur = useCallback((e) => {
      stopEditTask(e.currentTarget.value);
  }, [stopEditTask]);
  
  const stopChangeTaskHandler = useCallback((e) => {
    if (e.key === 'Enter') {
      stopEditTask(e.currentTarget.value);
    }
    else if (e.key === 'Escape') {
      setEditMode(false);
    }
  }, [stopEditTask]);


  return (
    <Task
      isCheck = {isCheck}
      task = {task}
      editMode={editMode}
      cacheValueTask={cacheValueTask}
      changeCheckBox={changeCheckBox}
      removeTask={removeTask}
      startChangeTask={startChangeTask}
      onChangeHandler={onChangeHandler}
      stopChangeTaskHandler={stopChangeTaskHandler}
      stopChangeTasksHandlerBlur = {stopChangeTasksHandlerBlur}
    />
  )
};

export default TaskContainer;