import React, {useEffect} from 'react';
import {
  getAllSelectedState, getFilterValue,
  getInitState,
  getLeftTasks,
  getTasks,
} from "./State/ToDo-Reselect";
import {
  addTask,
  changeCheck, controllAllSelected, getCountLeftTasks,
  initState, removeSelectedTasks,
  removeTask,
  selectAllTasks,
  endEditTask, removeClearTask, filterTasks, outputFilterFromLocalStorage
} from "./State/ToDo-Reducer";
import {connect} from "react-redux";
import TodoListApp from "./Components/TodoListApp/TodoListApp";

const  TodoList  = (props) => {

  useEffect(() => {
    if (localStorage.getItem('filter')) {
      props.outputFilterFromLocalStorage(JSON.parse(localStorage.getItem('filter')));
    }
    props.initState();
    }, []);


  useEffect(() => {
    props.getCountLeftTasks();
    props.controllAllSelected();
  }, [props.tasks]);


    return (
      <>
        {props.init ? <TodoListApp {...props}/> : <> </>}
      </>
    );
};

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
    init: getInitState(state),
    allSelected: getAllSelectedState(state),
    leftTasks: getLeftTasks(state),
    filter: getFilterValue(state)
  }
};

export default connect(mapStateToProps,
  {
    changeCheck,
    removeTask,
    initState,
    selectAllTasks,
    controllAllSelected,
    getCountLeftTasks,
    removeSelectedTasks,
    addTask,
    endEditTask,
    removeClearTask,
    filterTasks,
    outputFilterFromLocalStorage
  })(TodoList);
