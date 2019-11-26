import React, { useState, useCallback } from 'react';
import FieldCreatingNewTask from './FieldCreatingNewTasks';
import { generateId } from "../../Utils/GenerateId";

const FieldCreatingNewTaskContainer = (props) => {
  let [value, editValue] = useState('');

  const changeValue = useCallback(e => {
    editValue(e.currentTarget.value);
    if (e.key === 'Enter') {
      props.addTask(generateId(), e.currentTarget.value);
      editValue('');
    }
  }, [props]);
  

  const selectAll = () => {
    props.selectedAllTasks();
  };


  return (
    <FieldCreatingNewTask
      isTasks = {Boolean(props.tasks)}
      selectAll = {selectAll}
      isAllSelected = {Boolean(props.allSelected)}
      value = {value}
      changeValue = {changeValue}
    />
  )
};


export default FieldCreatingNewTaskContainer;