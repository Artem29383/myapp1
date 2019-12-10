import { createSelector } from 'reselect';

const getTasks = (state) => {
  return state.task.tasks.entities;
};


const getIds = (state) => {
  return state.task.tasks.ids;
};


const getFilterValue = (state) => {
  return state.task.filter;
};


export const getFilterValueReselect = createSelector([getFilterValue], (filter) => filter);


export const getFilteredTasksReselect = createSelector([getIds, getFilterValue, getTasks], (ids, type, tasks) => {
  switch (type) {
    case 'All':
      return [ids.filter(t => tasks[t]), tasks];
    case 'Active':
      return [ids.filter(t => !tasks[t].check), tasks];
    case 'Completed':
      return [ids.filter(t => tasks[t].check), tasks];
    default:
      return [ids.filter(t => tasks[t]), tasks];
  }
});


export const getTasksCountReselect = createSelector([getIds], (ids) => ids.length);


export const isTasksReselect = createSelector([getTasksCountReselect], (ids) => Boolean(ids));


export const isAllSelectedReselect = createSelector([getTasks, getIds], (entities, ids) => {
  return ids.some(el => !entities[el].check);
});


export const getLeftTasksReselect = createSelector([getTasks, getIds], (entities, ids) => {
  return ids.filter(t => !entities[t].check).length;
});