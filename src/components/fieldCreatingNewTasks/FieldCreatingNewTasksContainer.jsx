import React, { useState, useCallback } from 'react';
import FieldCreatingNewTask from './FieldCreatingNewTasks';
import nanoid from 'nanoid';
import useSelector from '../../hooks/useSelector';
import { getAllSelectedReselect } from '../../models/todo/selectors';
import useAction from '../../hooks/useAction';
import { ADD_TASK, SELECT_ALL_TASK } from '../../models/todo/actions';

const FieldCreatingNewTaskContainer = ({countTasks}) => {
  const allSelected = useSelector(getAllSelectedReselect);
  const addTask = useAction(ADD_TASK);
  const selectedAllTasks = useAction(SELECT_ALL_TASK);
  let [value, editValue] = useState('');

  const changeValue = useCallback(e => {
    editValue(e.currentTarget.value);
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      addTask([nanoid(), e.currentTarget.value]);
      editValue('');
    }
  }, [editValue, addTask]);
  

  const selectAll = () => {
      selectedAllTasks();
  };

  return (
    <FieldCreatingNewTask
      isTasks = {countTasks}
      selectAll = {selectAll}
      isAllSelected = {Boolean(allSelected)}
      value = {value}
      changeValue = {changeValue}
    />
  )
};


export default FieldCreatingNewTaskContainer;