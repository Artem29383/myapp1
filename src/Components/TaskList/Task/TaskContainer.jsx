import React, {useState} from 'react';
import Task from "./Task";
import API from "./../../../Api/Api"

const TaskContainer = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [cacheValueTask, changeCacheValueTask] = useState('');
  const currentEditTask = React.createRef();

  const changeBox = async () => {
    const response = await API.putCheckBox(props.id, props.check, props.task);
      if (response.statusText === 'OK') {
        props.changeCheck();
      }
  };

  const removeTask = async () => {
    const response = await API.deleteRemoveTask(props.id);
      if (response.statusText === 'OK') {
        props.removeTask();
      }
  };

  const startChangeTask = () => {
    setEditMode(true);
    changeCacheValueTask(props.task);
  };

  const changeValueTask = (value) => {
    changeCacheValueTask(value);
  };

  const stopEditTask = (value) => {
    API.putUpdateValueTask(props.id, props.check, value).then(response => {
      if (response.statusText === 'OK') {
        props.endEditTask();
      }
    });
    if (value === '') {
      API.deleteRemoveTask(props.id).then(response => {
        if (response.statusText === 'OK') {
          props.removeClearTask();
        }
      });
    }
    setEditMode(false);
  };


  const stopChangeTask = (event, value) => {
    if (event.key === 'Enter') {
      stopEditTask(value);
    } else if (event.currentTarget === currentEditTask.current && !event.key) {
      stopEditTask(value);
    } else if (event.key === 'Escape') {
      stopEditTask(props.task);
    }
  };

  return (
    <Task {...props}
          editMode={editMode}
          cacheValueTask={cacheValueTask}
          currentEditTask={currentEditTask}
          changeBox={changeBox}
          removeTask={removeTask}
          startChangeTask={startChangeTask}
          changeValueTask={changeValueTask}
          stopEditTask={stopEditTask}
          stopChangeTask={stopChangeTask}
    />
  )
};

export default TaskContainer;