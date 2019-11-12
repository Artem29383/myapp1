import React, {useState} from 'react';
import FieldCreatingNewTask from "./FieldCreatingNewTasks";


const FieldCreatingNewTaskContainer = (props) => {
  let [value, EditValue] = useState('');

  const generateId = () => {
    return Math.floor(1 + Math.random() * (9999999999999999));
  };

  const selectAll = () => {
    props.selectedAllTasks();
  };

  const changeValue = (e) => {
    EditValue(e.currentTarget.value);
  };

  const onKeyDownCreateTask = (key, value) => {
    if (key === 'Enter') {
      props.addTask(generateId(), value);
      EditValue('');
    }
  };

  return (
    <FieldCreatingNewTask leftTasks = {props.leftTasks}
                          tasks = {props.tasks}
                          changeValue = {changeValue}
                          onKeyDownCreateTask = {onKeyDownCreateTask}
                          selectAll = {selectAll}
                          value = {value}/>
  );
};


export default FieldCreatingNewTaskContainer;