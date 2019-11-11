export const getTasks = (state) => {
  return state.task.tasks;
};

export const getInitState = (state) => {
  return state.task.init;
};

export const getAllSelectedState = (state) => {
  return state.task.allSelected;
};

export const getLeftTasks = (state) => {
  return state.task.leftTasks;
};

export const getFilterValue = (state) => {
  return state.task.filter;
};