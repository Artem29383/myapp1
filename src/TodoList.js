import React from 'react';
import classes from './TodoList.module.css';
import FieldCreatingNewTask from "./Components/FieldCreatingNewTasks/FieldCreatingNewTasks";
import {getAllSelectedState, getInitState, getLeftTasks, getTasks} from "./State/ToDo-Reselect";
import {
  changeCheck, controllAllSelected, getCountLeftTasks,
  initState,
  removeTask,
  selectAllTasks,
  setAllTasks
} from "./State/ToDo-Reducer";
import {connect} from "react-redux";
import TaskListContainer from "./Components/TaskList/Task/TaskListContainer";
import Footer from "./Components/Footer/Footer";

class TodoList extends React.Component {


  componentDidMount() {
    this.props.initState();
    if (localStorage.getItem('todo')) {
      this.props.setAllTasks(JSON.parse(localStorage.getItem('todo')));
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state;
  }

  componentDidUpdate() {
    this.props.controllAllSelected();
    this.props.getCountLeftTasks();
    localStorage.setItem('todo', JSON.stringify(this.props.tasks));
  }

  render() {
    return (
      <>
        <header className={classes.header__text}>todos</header>
        {(this.props.init) ? <div className={classes.todo}>
          <FieldCreatingNewTask selectAllTasks={this.props.selectAllTasks}
                                allSelected={this.props.allSelected}/>
          <TaskListContainer {...this.props}/>
          <Footer leftTasks = {this.props.leftTasks}/>
        </div> : <div></div>}
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
    init: getInitState(state),
    allSelected: getAllSelectedState(state),
    leftTasks: getLeftTasks(state)
  }
};

export default connect(mapStateToProps,
  {
    changeCheck,
    removeTask,
    setAllTasks,
    initState,
    selectAllTasks,
    controllAllSelected,
    getCountLeftTasks
  })(TodoList);
