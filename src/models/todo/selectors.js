import { createSelector } from 'reselect';

const getTasks = (state) => {
  return state.task.tasks.entities;
};

export const getTasksReselect = createSelector([getTasks], (entities) => entities);

const getIds = (state) => {
  return state.task.tasks.ids;
};

export const getIdsReselect = createSelector([getIds], (ids) => ids);

const getAllSelectedFromState = (state) => {
  return state.task.allSelected;
};

export const getAllSelectedReselect = createSelector([getAllSelectedFromState], (allSelected) => allSelected);

const getLeftTasks = (state) => {
  return state.task.leftTasks;
};

export const getLeftTasksReselect = createSelector([getLeftTasks], (leftTasks) => leftTasks);

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
export const getTasksCount = createSelector([getIds], (ids) => ids.length);
export const hasTasks = createSelector([getTasksCount], (ids) => Boolean(ids));
