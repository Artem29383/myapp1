const SET_TASK_VALUE = 'SET_TASK_VALUE';
const ADD_TASK = 'ADD_TASK';
const CHANGE__CHECK = 'CHANGE__CHECK';
const REMOVE_TASK = 'REMOVE_TASK';
const SET_ALL_TASK = 'SET_ALL_TASK';
const INITIALIZATION = 'INITIALIZATION';
const SELECT_ALL_TASK = 'SELECT_ALL_TASK';
const CONTROL_ALL_SELECTED = 'CONTROL_ALL_SELECTED';
const LEFT_TASKS = 'LEFT_TASKS';


let initialState = {
  taskValue: '',
  tasks: [],
  init: false,
  allSelected: false,
  leftTasks: 0
};


const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_VALUE:
      return {...state, taskValue: action.value};
    case ADD_TASK:
      if (state.taskValue.trim() !== '') {
        return {
          ...state,
          tasks: [...state.tasks, {id: action.taskId, check: false, todo: state.taskValue}],
          taskValue: ''
        };
      }
    case CHANGE__CHECK:
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
        tasks: state.tasks.filter(t => {
          return t.id !== action.taskId
        })
      };
    case SET_ALL_TASK:
      return {...state, tasks: [...state.tasks, ...action.tasks]};
    case INITIALIZATION:
      return {...state, init: true};
    case SELECT_ALL_TASK:
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (state.allSelected) {
            return {...t, check: false}
          } else {
            return {...t, check: true}
          }
        }),
      };
    case CONTROL_ALL_SELECTED:
      return {
        ...state,
        allSelected: (!state.leftTasks) ? true : false,
      };
    case LEFT_TASKS:
      return {
        ...state,
        leftTasks: state.tasks.filter(t => !t.check).length,
      };
    default:
      return state;
  }
};

export const setTaskValue = (value) => ({type: SET_TASK_VALUE, value});
export const addTask = (taskId) => ({type: ADD_TASK, taskId});
export const changeCheck = (taskId) => ({type: CHANGE__CHECK, taskId});
export const removeTask = (taskId) => ({type: REMOVE_TASK, taskId});
export const setAllTasks = (tasks) => ({type: SET_ALL_TASK, tasks});
export const initState = () => ({type: INITIALIZATION});
export const selectAllTasks = () => ({type: SELECT_ALL_TASK});
export const controllAllSelected = () => ({type: CONTROL_ALL_SELECTED});
export const getCountLeftTasks = () => ({type: LEFT_TASKS});

export default taskReducer;