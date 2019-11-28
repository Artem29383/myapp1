import React, { useState, useCallback } from 'react';
import FieldCreatingNewTask from './FieldCreatingNewTasks';
import nanoid from 'nanoid';
import useHookSelector from "../../HOOKS/useSelector";
import {getAllSelectedReselect} from "../../State/ToDo-Reselect";
import useDispatchHook from "../../HOOKS/useDispatch";
import {ADD_TASK, SELECT_ALL_TASK} from "../../Models/ActionConst";

const FieldCreatingNewTaskContainer = ({tasks}) => {
  const allSelected = useHookSelector(getAllSelectedReselect);
  const addTask = useDispatchHook(ADD_TASK);
  const selectedAllTasks = useDispatchHook(SELECT_ALL_TASK);
  let [value, editValue] = useState('');

  const changeValue = useCallback(e => {
    editValue(e.currentTarget.value);
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      tasks = [...tasks, {id: nanoid(), check: false, title: e.currentTarget.value}];
      addTask(tasks);
      editValue('');
    }
  }, [tasks, value]);
  

  const selectAll = () => {
    tasks = tasks.map(t => ({...t, check: !allSelected}));
    selectedAllTasks(tasks);
  };


  return (
    <FieldCreatingNewTask
      isTasks = {Boolean(tasks)}
      selectAll = {selectAll}
      isAllSelected = {Boolean(allSelected)}
      value = {value}
      changeValue = {changeValue}
    />
  )
};


export default FieldCreatingNewTaskContainer;