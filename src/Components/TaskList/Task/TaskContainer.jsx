import React, { useState, useCallback, useRef } from 'react';
import Task from './Task';
import useAction from "../../../HOOKS/useDispatch";
import {CHANGE_TASK_STATUS, END_EDIT_TASK, REMOVE_EMPTY_TASK, REMOVE_TASK} from "../../../Models/ActionConst";

const TaskContainer = ({
  id,
  isCheck,
  task,
  tasks
}) => {
  const [editMode, setEditMode] = useState(false);
  const [cacheValueTask, changeCacheValueTask] = useState('');
  const changeCheck = useAction(CHANGE_TASK_STATUS);
  const removeTaskHook = useAction(REMOVE_TASK);
  const removeEmptyTask = useAction(REMOVE_EMPTY_TASK);
  const endEditTask = useAction(END_EDIT_TASK);
  const currentEditTask = useRef(null);
  
  const changeBox = () => {
    const changedTasks = tasks.map(t => {
      if (t.id === id) {
        return {...t, check: !t.check}
      } else {
        return {...t, check: t.check}
      }});
    changeCheck(changedTasks);
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
    let changedTasks = tasks.map(t => {
      if (t.id === id) {
        return {...t, title: value}
      } else {
        return {...t}
      }
    });
    endEditTask(changedTasks);
    if (value === '') {
      changedTasks = changedTasks.filter(t => t.title !== '');
      removeEmptyTask(changedTasks);
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