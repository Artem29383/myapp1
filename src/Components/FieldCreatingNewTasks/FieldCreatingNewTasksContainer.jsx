import React, { useState, useCallback } from 'react';
import FieldCreatingNewTask from './FieldCreatingNewTasks';
import nanoid from 'nanoid';
import useSelectors from "../../HOOKS/useSelector";
import {getAllSelectedReselect} from "../../State/ToDo-Reselect";
import useAction from "../../HOOKS/useDispatch";
import {ADD_TASK, SELECT_ALL_TASK} from "../../Models/ActionConst";

const FieldCreatingNewTaskContainer = ({countTasks}) => {
  const allSelected = useSelectors(getAllSelectedReselect);
  const addTask = useAction(ADD_TASK);
  const selectedAllTasks = useAction(SELECT_ALL_TASK);
  let [value, editValue] = useState('');

  const changeValue = useCallback(e => {
    editValue(e.currentTarget.value);
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      addTask([nanoid(), e.currentTarget.value]);
      editValue('');
    }
  }, [addTask]);
  

  const selectAll = () => {
    selectedAllTasks();
  };


  return (
    <FieldCreatingNewTask
      isTasks = {Boolean(countTasks)}
      selectAll = {selectAll}
      isAllSelected = {Boolean(allSelected)}
      value = {value}
      changeValue = {changeValue}
    />
  )
};


export default FieldCreatingNewTaskContainer;