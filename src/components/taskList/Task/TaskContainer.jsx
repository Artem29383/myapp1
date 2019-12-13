import React, { useState, useCallback, useRef } from 'react';
import Task from './Task';
import useAction from '../../../hooks/useAction';
import {
  CHANGE_TASK_STATUS,
  END_EDIT_TASK,
  REMOVE_TASK
} from '../../../models/todo/actions';

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
    changeCheck({id: id, check: !isCheck, title: task});
  };
  const removeTask = () => {
    removeTaskHook(id);
  };

  const startChangeTask = () => {
    setEditMode(true);
    changeCacheValueTask(task);
  };

  const onChangeHandler = useCallback((e) => {
    changeCacheValueTask(e.currentTarget.value);
  }, [changeCacheValueTask]);

  const stopEditTask = (value) => {
    endEditTask({id: id, check: isCheck, title: value});
    if (value === '') {
      removeTaskHook(id);
    }
    setEditMode(false);
  };
  

  const stopChangeTaskHandler = useCallback((e) => {
    if (e.key === 'Enter') {
      stopEditTask(e.currentTarget.value);
    } else if (e.currentTarget === currentEditTask.current && !e.key) {
      stopEditTask(e.currentTarget.value);
    } else if (e.key === 'Escape') {
      stopEditTask(task);
    }
  }, []);


  return (
    <Task
      isCheck = {isCheck}
      task = {task}
      editMode={editMode}
      cacheValueTask={cacheValueTask}
      currentEditTask={currentEditTask}
      changeBox={changeBox}
      removeTask={removeTask}
      startChangeTask={startChangeTask}
      onChangeHandler={onChangeHandler}
      stopChangeTaskHandler={stopChangeTaskHandler}
    />
  )
};

export default TaskContainer;