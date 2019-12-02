import {getStorage} from "../Utils/LocalStorage";
import {
  ADD_TASK,
  CHANGE_TASK_STATUS,
  CONTROL_ALL_SELECTED, END_EDIT_TASK, FILTER_TASKS, LEFT_TASKS,
  REMOVE_SELECT_TASKS,
  REMOVE_TASK,
  SELECT_ALL_TASK
} from "./ActionConst";
import { normalize, schema } from 'normalizr';
import {removePropFromObject} from "../Utils/removePropFromObject";
import {removeArrayElement} from "../Utils/removeArrayElement";

let initialState = {
  tasks: getStorage('todo'),
};

const tasksScheme = new schema.Entity('tasks');
const myTasks = {tasks: [tasksScheme]};
let dataNormalized = normalize(initialState, myTasks);
initialState = {
  tasks: {
    entities: dataNormalized.entities.tasks || [],
    ids: dataNormalized.result.tasks || []
  },
  allSelected: false,
  leftTasks: 0,
  filter: getStorage('filter', 'All'),
};


const taskReducer = (state = initialState, action) => {
  let entities = {...state.tasks.entities};
  let copyIds = [...state.tasks.ids];
  localStorage.setItem('todo', JSON.stringify(entities));
  localStorage.setItem('filter', JSON.stringify(state.filter));
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          entities: {
            ...state.tasks.entities,
            [action.payload[0]]: {
              id: action.payload[0],
              check: false,
              title: action.payload[1]
            }
          },
          ids: [...state.tasks.ids, action.payload[0]]
        }
      };
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          entities: {
            ...state.tasks.entities,
            [action.payload[0]]: {
              id: action.payload[0],
              check: action.payload[1],
              title: action.payload[2]
            }
          }
        }
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          ids: removeArrayElement(state.tasks.ids, action.payload),
          entities: removePropFromObject(state.tasks.entities, action.payload)
        }
      };
    case REMOVE_SELECT_TASKS:
      state.tasks.ids.map(id => {
        if (entities[id].check) {
          delete entities[id];
          copyIds = removeArrayElement(copyIds, id);
        }
      });
      return {
        ...state,
        tasks: {
          entities,
          ids: copyIds
        }
      };
    case SELECT_ALL_TASK:
      copyIds.map(id => entities[id].check = !state.allSelected);
      return {
        ...state,
        tasks: {
          entities,
          ids: copyIds
        }
      };
    case CONTROL_ALL_SELECTED:
      return {
        ...state,
        allSelected: !state.leftTasks && state.tasks.ids.length,
      };
    case LEFT_TASKS:
      return {
        ...state,
        leftTasks: action.payload
      };
    case END_EDIT_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          entities: {
            ...state.tasks.entities,
            [action.payload[0]]:
              {
                id: action.payload[0],
                check: action.payload[1],
                title: action.payload[2]
              }
          }
        }
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