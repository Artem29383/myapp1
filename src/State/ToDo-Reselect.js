import {createSelector} from "reselect";

const getTasks = (state) => {
  return state.task.tasks;
};

export const getTasksReselect = createSelector([getTasks], (tasks) => tasks);

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

export const getFilteredTasksReselect = (type) => createSelector([getTasks], (filteredTasks) => {
  return filteredTasks.filter(t => {
    switch (type) {
      case 'All':
        return t;
      case 'Active':
        return t.check;
      case 'Completed':
        return !t.check;
      default:
        return t;
    }
  });
});

export const getTasksCount = createSelector([getTasks], (tasks) => tasks.length);