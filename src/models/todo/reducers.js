import { getStorage } from '../../utils/localStorage';
import {
  ADD_TASK,
  CHANGE_TASK_STATUS,
  END_EDIT_TASK,
  FILTER_TASKS,
  REMOVE_SELECT_TASKS,
  REMOVE_TASK,
  SELECT_ALL_TASK
} from './actions';
import {
  normalize,
  schema
} from 'normalizr';
import { removePropFromObject } from '../../utils/removePropFromObject';
import { removeArrayElement } from '../../utils/removeArrayElement';
import  deepCopy  from '../../utils/deepCopy';

let initialState = {
  tasks: getStorage('todo'),
};

const tasksScheme = new schema.Entity('tasks');
const myTasks = {tasks: [tasksScheme]};
const dataNormalized = normalize(initialState, myTasks);
initialState = {
  tasks: {
    entities: dataNormalized.entities.tasks || {},
    ids: dataNormalized.result.tasks || []
  },
  filter: getStorage('filter', 'All'),
};


const taskReducer = (state = initialState, action) => {
  let entities = {...state.tasks.entities};
  let copyIds = [...state.tasks.ids];
  const tasksCopy = deepCopy(state.tasks);
  let {id, check, title} = {};
  switch (action.type) {
    
    
    case ADD_TASK:
      ({id, title} = action.payload);
      tasksCopy.entities[id] = {id, check: false, title};
      tasksCopy.ids = [...tasksCopy.ids, id];
      return {
        ...state,
        tasks: tasksCopy
      };
      
      
    case CHANGE_TASK_STATUS:
      ({id, check, title} = action.payload);
      tasksCopy.entities[id] = {id, check, title};
      return {
        ...state,
        tasks: tasksCopy
      };
      
      
    case REMOVE_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          entities: removePropFromObject(entities, action.payload),
          ids: removeArrayElement(copyIds, action.payload)
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
      copyIds.map(id => entities[id].check = action.payload);
      return {
        ...state,
        tasks: {
          entities,
          ids: copyIds
        }
      };
      
      
    case END_EDIT_TASK:
      ({id, check, title} = action.payload);
      tasksCopy.entities[id] = {id, check, title};
      return {
        ...state,
        tasks: tasksCopy
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