import React from 'react';
import classes from './Footer.module.css';
import classnames from 'classnames';


const Footer = ({
  leftTasks,
  removeSelectedTask,
  filter,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  countTasks
}) => (
  <div className={classes.dataFooter}>
		  <span className={classes.todoCount}>
			<strong>{leftTasks}</strong>
			  item left
		  </span>
    <ul className={classes.filters}>
      <li>
        <a href="/#/all"
           className={classnames(
             classes.filterBtnJs,
             filter === 'All' && classes.active
           )}
           onClick={showAllTasks}>All</a>
      </li>
      <li>
        <a href="/#/active"
           className={classnames(
             classes.filterBtnJs,
             filter === 'Active' && classes.active
           )}
           onClick={showActiveTasks}>Active</a>
      </li>
      <li>
        <a href="/#/completed"
           className={classnames(
             classes.filterBtnJs,
             filter === 'Completed' && classes.active
           )}
           onClick={showCompletedTasks}>Completed</a>
      </li>
    </ul>
    <button
      className={classnames(
        classes.clear,
        leftTasks < countTasks && classes.active
      )}
      onClick={() => {
        removeSelectedTask()
      }}>
      Clear completed
    </button>
  </div>
);

export default Footer;