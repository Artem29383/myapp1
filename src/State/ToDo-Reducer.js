const ADD_TASK = 'ADD_TASK';
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
const REMOVE_TASK = 'REMOVE_TASK';
const OUTPUT_TAKS_FROM_LOCALSTORAGE = 'OUTPUT_TAKS_FROM_LOCALSTORAGE';
const INITIALIZATION = 'INITIALIZATION';
const SELECT_ALL_TASK = 'SELECT_ALL_TASK';
const CONTROL_ALL_SELECTED = 'CONTROL_ALL_SELECTED';
const LEFT_TASKS = 'LEFT_TASKS';
const REMOVE_SELECT_TASKS = 'REMOVE_SELECT_TASKS';
const END_EDIT_TASK = 'END_EDIT_TASK';
const REMOVE_CLEAR_TASK = 'REMOVE_CLEAR_TASK';
const FILTER_TASKS = 'FILTER_TASKS';
const OUTPUT_FILTER_FROM_LOCALSTORAGE = 'OUTPUT_FILTER_FROM_LOCALSTORAGE';


let initialState = {
  tasks: [],
  init: false,
  allSelected: false,
  leftTasks: 0,
  filter: 'All'
};


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
          return {
            ...state,
            taskValue: ''
          };
      case CHANGE_TASK_STATUS:
        return {
          ...state,
        };
      case REMOVE_TASK:
        return {
          ...state,
        };
      case REMOVE_SELECT_TASKS:
        return {
          ...state,
        };
      case OUTPUT_TAKS_FROM_LOCALSTORAGE:
        return {...state, tasks: [...action.tasks]};
      case INITIALIZATION:
        return {...state, init: true};
      case SELECT_ALL_TASK:
        return {
          ...state,
        };
      case CONTROL_ALL_SELECTED:
        return {
          ...state,
          allSelected: !state.leftTasks && state.tasks.length,
        };
      case LEFT_TASKS:
        return {
          ...state,
          leftTasks: state.tasks.filter(t => !t.check).length,
        };
      case END_EDIT_TASK:
        return {
          ...state,
        };
      case REMOVE_CLEAR_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(t => t.title !== '')
        };
      case FILTER_TASKS:
        return {
          ...state,
          filter: action.filterMethod
        };
      case OUTPUT_FILTER_FROM_LOCALSTORAGE:
        return {...state, filter: action.filterValue};
      default:
        return state;
    }
  };

export const addTask = () => ({type: ADD_TASK});
export const changeCheck = () => ({type: CHANGE_TASK_STATUS});
export const removeTask = () => ({type: REMOVE_TASK});
export const outputFromLocalStorage = (tasks) => ({type: OUTPUT_TAKS_FROM_LOCALSTORAGE, tasks});
export const initState = () => ({type: INITIALIZATION});
export const selectAllTasks = () => ({type: SELECT_ALL_TASK});
export const controllAllSelected = () => ({type: CONTROL_ALL_SELECTED});
export const getCountLeftTasks = () => ({type: LEFT_TASKS});
export const removeSelectedTasks = () => ({type: REMOVE_SELECT_TASKS});
export const endEditTask = () => ({type: END_EDIT_TASK});
export const removeClearTask = () => ({type: REMOVE_CLEAR_TASK});
export const filterTasks = (filterMethod) => ({type: FILTER_TASKS, filterMethod});
export const outputFilterFromLocalStorage = (filterValue) => ({type: OUTPUT_FILTER_FROM_LOCALSTORAGE, filterValue});

export default taskReducer;