import React, { useEffect } from 'react';
import {
  getAllSelectedFromState, getFilterValue,
  getInitState,
  getLeftTasks,
  getTasks,
} from './State/ToDo-Reselect';
import {
  addTask,
  changeCheck, controllAllSelected, getCountLeftTasks,
  initState, removeSelectedTasks,
  removeTask,
  selectedAllTasks,
  endEditTask, removeEmptyTask, filterTasks, outputFilterFromLocalStorage, outputFromLocalStorage
} from './State/ToDo-Reducer';
import { connect } from 'react-redux';
import TodoListApp from './Components/TodoListApp/TodoListApp';

const  TodoList  = (props) => {

  useEffect(() => {
    props.getCountLeftTasks();
    props.controllAllSelected();
    localStorage.setItem('todo', JSON.stringify(props.tasks));
  }, [props.tasks]);


    return (
     <TodoListApp {...props}/>
    );
};

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
    init: getInitState(state),
    allSelected: getAllSelectedFromState(state),
    leftTasks: getLeftTasks(state),
    filter: getFilterValue(state)
  }
};

export default connect(mapStateToProps,
  {
    changeCheck,
    removeTask,
    initState,
    selectedAllTasks,
    controllAllSelected,
    getCountLeftTasks,
    removeSelectedTasks,
    addTask,
    endEditTask,
    removeEmptyTask,
    filterTasks,
  })(TodoList);
