const ADD_TASK = 'ADD_TASK';
const CHANGE_TASK_STATUS = 'CHANGE__CHECK';
const REMOVE_TASK = 'REMOVE_TASK';
const OUTPUT_TAKS_FROM_LOCALSTORAGE = 'OUTPUT_TAKS_FROM_LOCALSTORAGE';
const INITIALIZATION = 'INITIALIZATION';
const SELECT_ALL_TASK = 'SELECT_ALL_TASK';
const CONTROL_ALL_SELECTED = 'CONTROL_ALL_SELECTED';
const LEFT_TASKS = 'LEFT_TASKS';
const REMOVE_SELECT_TASKS = 'REMOVE_SELECT_TASKS';
const END_EDIT_TASK = 'END_EDIT_TASK';
const REMOVE_EMPTY_TASK = 'REMOVE_EMPTY_TASK';
const FILTER_TASKS =  'FILTER_TASKS';
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
      if (action.valueTask.trim() !== '') {
        return {
          ...state,
          tasks: [...state.tasks, {id: action.taskId, check: false, title: action.valueTask}],
        };
      }
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id === action.taskId) {
            return {...t, check: !t.check}
          } else {
            return {...t, check: t.check}
          }
        })
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.taskId)
      };
    case REMOVE_SELECT_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(t => !t.check)
      };
    case OUTPUT_TAKS_FROM_LOCALSTORAGE:
      return {...state, tasks: [...state.tasks, ...action.tasks]};
    case INITIALIZATION:
      return {...state, init: true};
    case SELECT_ALL_TASK:
      return {
        ...state,
        tasks: state.tasks.map(t => ({...t, check: !state.allSelected}))
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
        tasks: state.tasks.map(t => {
          if (t.id === action.taskId) {
            return {...t, title: action.message}
          } else {
            return {...t}
          }
        })
      };
    case REMOVE_EMPTY_TASK:
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

  export const addTask = (taskId, valueTask) => ({type: ADD_TASK, taskId, valueTask});
  export const changeCheck = (taskId) => ({type: CHANGE_TASK_STATUS, taskId});
  export const removeTask = (taskId) => ({type: REMOVE_TASK, taskId});
  export const outputFromLocalStorage = (tasks) => ({type: OUTPUT_TAKS_FROM_LOCALSTORAGE, tasks});
  export const initState = () => ({type: INITIALIZATION});
  export const selectedAllTasks = () => ({type: SELECT_ALL_TASK});
  export const controllAllSelected = () => ({type: CONTROL_ALL_SELECTED});
  export const getCountLeftTasks = () => ({type: LEFT_TASKS});
  export const removeSelectedTasks = () => ({type: REMOVE_SELECT_TASKS});
  export const endEditTask = (taskId, message) => ({type: END_EDIT_TASK, taskId, message});
  export const removeEmptyTask = () => ({type: REMOVE_EMPTY_TASK});
  export const filterTasks = (filterMethod) => ({type: FILTER_TASKS, filterMethod});
  export const outputFilterFromLocalStorage = (filterValue) => ({type: OUTPUT_FILTER_FROM_LOCALSTORAGE, filterValue});

  export default taskReducer;