import { getStorage } from "../Utils/LocalStorage";

const ADD_TASK = 'ToDo-Reducer/ADD_TASK';
const CHANGE_TASK_STATUS = 'ToDo-Reducer/CHANGE__CHECK';
const REMOVE_TASK = 'ToDo-Reducer/REMOVE_TASK';
const SELECT_ALL_TASK = 'ToDo-Reducer/SELECT_ALL_TASK';
const CONTROL_ALL_SELECTED = 'ToDo-Reducer/CONTROL_ALL_SELECTED';
const LEFT_TASKS = 'ToDo-Reducer/LEFT_TASKS';
const REMOVE_SELECT_TASKS = 'ToDo-Reducer/REMOVE_SELECT_TASKS';
const END_EDIT_TASK = 'ToDo-Reducer/END_EDIT_TASK';
const REMOVE_EMPTY_TASK = 'ToDo-Reducer/REMOVE_EMPTY_TASK';
const FILTER_TASKS =  'ToDo-Reducer/FILTER_TASKS';


let initialState = {
  tasks: getStorage('todo'),
  allSelected: false,
  leftTasks: 0,
  filter: getStorage('filter', 'All')
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
    default:
      return state;
  }
};

  export const addTask = (taskId, valueTask) => ({type: ADD_TASK, taskId, valueTask});
  export const changeCheck = (taskId) => ({type: CHANGE_TASK_STATUS, taskId});
  export const removeTask = (taskId) => ({type: REMOVE_TASK, taskId});
  export const selectedAllTasks = () => ({type: SELECT_ALL_TASK});
  export const controllAllSelected = () => ({type: CONTROL_ALL_SELECTED});
  export const getCountLeftTasks = () => ({type: LEFT_TASKS});
  export const removeSelectedTasks = () => ({type: REMOVE_SELECT_TASKS});
  export const endEditTask = (taskId, message) => ({type: END_EDIT_TASK, taskId, message});
  export const removeEmptyTask = () => ({type: REMOVE_EMPTY_TASK});
  export const filterTasks = (filterMethod) => ({type: FILTER_TASKS, filterMethod});

  export default taskReducer;