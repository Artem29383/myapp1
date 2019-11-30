import { getStorage } from "../Utils/LocalStorage";
import {
  ADD_TASK,
  CHANGE_TASK_STATUS,
  CONTROL_ALL_SELECTED, END_EDIT_TASK, FILTER_TASKS, LEFT_TASKS, REMOVE_EMPTY_TASK,
  REMOVE_SELECT_TASKS,
  REMOVE_TASK,
  SELECT_ALL_TASK
} from "./ActionConst";

let initialState = {
  tasks: getStorage('todo'),
  allSelected: false,
  leftTasks: 0,
  filter: getStorage('filter', 'All'),
};

const taskReducer = (state = initialState, action) => {
  localStorage.setItem('todo', JSON.stringify(state.tasks));
  localStorage.setItem('filter', JSON.stringify(state.filter));
  switch (action.type) {
    case ADD_TASK:
      return {
          ...state,
          tasks: [...state.tasks, {id: action.payload[0], check: false, title: action.payload[1]}],
      };
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: action.payload
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload)
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
        leftTasks: action.payload
      };
    case END_EDIT_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case REMOVE_EMPTY_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};


export default taskReducer;