import React, { useState, useCallback, useRef } from 'react';
import Task from './Task';
import useAction from '../../../hooks/useAction';
import { CHANGE_TASK_STATUS, END_EDIT_TASK, REMOVE_TASK } from '../../../models/todo/actions';

const TaskContainer = ({
  id,
  isCheck,
  task,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [cacheValueTask, changeCacheValueTask] = useState('');
  const changeCheck = useAction(CHANGE_TASK_STATUS);
  const removeTaskHook = useAction(REMOVE_TASK);
  const endEditTask = useAction(END_EDIT_TASK);
  const currentEditTask = useRef(null);
  const changeBox = () => {
    changeCheck([id, !isCheck, task]);
  };
  const removeTask = () => {
    removeTaskHook(id);
  };

  const startChangeTask = () => {
    setEditMode(true);
    changeCacheValueTask(task);
  };

  const changeValueTask = useCallback((value) => {
    changeCacheValueTask(value);
  }, [changeCacheValueTask]);

  const stopEditTask = (value) => {
    endEditTask([id, isCheck, value]);
    if (value === '') {
      removeTaskHook(id);
    }
    setEditMode(false);
  };


  const stopChangeTask = (event, value) => {
    if (event.key === 'Enter') {
      stopEditTask(value);
    } else if (event.currentTarget === currentEditTask.current && !event.key) {
      stopEditTask(value);
    } else if (event.key === 'Escape') {
      stopEditTask(task);
    }
  };


  return (
    <Task
      isCheck = {isCheck}
      id = {id}
      task = {task}
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