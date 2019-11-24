import React, { useEffect } from 'react';
import {
  getAllSelectedFromState, getFilterValue,
  getLeftTasks,
  getTasks,
} from './State/ToDo-Reselect';
import {
  addTask,
  changeCheck, controllAllSelected, getCountLeftTasks,
  removeSelectedTasks,
  removeTask,
  selectedAllTasks,
  endEditTask, removeEmptyTask, filterTasks
} from './State/ToDo-Reducer';
import { connect } from 'react-redux';
import TodoListApp from './Components/TodoListApp/TodoListApp';

const  TodoList  = (props) => {

  useEffect(() => {
    props.getCountLeftTasks();
    props.controllAllSelected();
    localStorage.setItem('todo', JSON.stringify(props.tasks));
    localStorage.setItem('filter', JSON.stringify(props.filter));
  }, [props]);


    return (
     <TodoListApp {...props}/>
    );
};

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
    allSelected: getAllSelectedFromState(state),
    leftTasks: getLeftTasks(state),
    filter: getFilterValue(state)
  }
};

export default connect(mapStateToProps,
  {
    changeCheck,
    removeTask,
    selectedAllTasks,
    controllAllSelected,
    getCountLeftTasks,
    removeSelectedTasks,
    addTask,
    endEditTask,
    removeEmptyTask,
    filterTasks,
  })(TodoList);
