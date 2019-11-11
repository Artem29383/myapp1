import React, {useState} from 'react';
import classes from "./FieldCreatingNewTasks.module.css";
import API from "../../Api/Api";


const FieldCreatingNewTask = (props) => {
  let [value, EditValue] = useState('');

  const generateId = () => {
    return Math.floor(1 + Math.random() * (9999999999999999));
  };


  const selectAll = () => {
    const lastTask = props.tasks[props.tasks.length - 1];
    props.tasks.map(async t => {
      const response = await API.putCheckBox(t.id, props.allSelected, t.title);
      if (lastTask.id === t.id && response.statusText === 'OK') {
        props.changeCheck();
      }
    });
  };


  const changeValue = (e) => {
    EditValue(e.currentTarget.value);
  };

  const onKeyDownCreateTask = async (key, value) => {
    if (key === 'Enter' && value !== '') {
      const response = await API.postCreateTask(generateId(), false, value);
      if (response.statusText === 'Created') {
        props.addTask();
        EditValue('');
      }
    }
  };

  const AllSelectBtn = (props) => {
    if (!props.leftTasks && !props.tasks.length) {
      return <> </>
    } else {
      return (
        <button onClick={selectAll} className={props.allSelected
          ? `${classes.toggle__all} ${classes.active}`
          : `${classes.toggle__all}`}></button>)
    }
  };

  return (
    <div className={classes.header}>
      <input onChange={changeValue} autoFocus={true} className={classes.todos__input}
             placeholder={'What needs to be done?'}
             value={value} onKeyDown={(e) => onKeyDownCreateTask(e.key, value)}/>
      <AllSelectBtn {...props}/>
    </div>
  );
};


export default FieldCreatingNewTask;