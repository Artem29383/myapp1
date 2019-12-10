import { createSelector } from 'reselect';

const getTasks = (state) => {
  return state.task.tasks.entities;
};

export const getTasksReselect = createSelector([getTasks], (entities) => entities);

const getIds = (state) => {
  return state.task.tasks.ids;
};

export const getIdsReselect = createSelector([getIds], (ids) => ids);



const getFilterValue = (state) => {
  return state.task.filter;
};

export const getFilterValueReselect = createSelector([getFilterValue], (filter) => filter);

export const getFilteredTasksReselect = (type, tasks) => createSelector([getIds], (ids) => {
  return ids.filter(t => {
    switch (type) {
      case 'All':
        return tasks[t];
      case 'Active':
        return !tasks[t].check;
      case 'Completed':
        return tasks[t].check;
      default:
        return tasks[t];
    }
  });
});

export const getTasksCountReselect = createSelector([getIds], (ids) => ids.length);

export const isTasksReselect = createSelector([getTasksCountReselect], (ids) => Boolean(ids));

export const isAllSelectedReselect = createSelector([getTasks, getIds], (entities, ids) => {
  return ids.some(el => !entities[el].check);
});

export const getLeftTasksReselect = createSelector([getTasks, getIds], (entities, ids) => {
  return ids.filter(t => !entities[t].check).length;
});