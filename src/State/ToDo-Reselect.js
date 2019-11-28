import { createSelector } from "reselect";
import TaskContainer from "../Components/TaskList/Task/TaskContainer";
import React from "react";

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

const getFilteredTasks = (state) => {
  return state.task.tasks;
};

export const getFilteredTasksReselect = (type, tasks) => createSelector([getFilteredTasks], (filteredTasks) => {
  return filteredTasks.map((t, index) => {
    if (type === 'All') {
      return <TaskContainer
        key={index}
        id={t.id}
        isCheck={t.check}
        task={t.title}
        tasks = {tasks}
      />
    }
    else if (type === 'Active' && !t.check) {
      return <TaskContainer
        key={index}
        id={t.id}
        isCheck={t.check}
        task={t.title}
        tasks = {tasks}
      />
    } else if (type === 'Completed' && t.check) {
      return <TaskContainer
        key={index}
        id={t.id}
        isCheck={t.check}
        task={t.title}
        tasks = {tasks}
      />
    }
  });
});