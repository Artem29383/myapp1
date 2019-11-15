import React, { useState, useCallback } from 'react';
import FieldCreatingNewTask from './FieldCreatingNewTasks';

const FieldCreatingNewTaskContainer = (props) => {
  let [value, editValue] = useState('');

  const changeValue = useCallback(e => {
    editValue(e.currentTarget.value);
    if (e.key === 'Enter') {
      props.addTask(generateId(), e.currentTarget.value);
      editValue('');
    }
  }, [value]);


  const generateId = () => {
    return Math.floor(1 + Math.random() * (9999999999999999));
  };

  const selectAll = () => {
    props.selectedAllTasks();
  };


  return (
    <FieldCreatingNewTask
      leftTasks = {props.leftTasks}
      tasks = {props.tasks}
      selectAll = {selectAll}
      allSelected = {props.allSelected}
      value = {value}
      changeValue = {(changeValue)}
    />
  )
};


export default FieldCreatingNewTaskContainer;