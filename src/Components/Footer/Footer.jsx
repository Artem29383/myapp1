import React from 'react';
import classes from './Footer.module.css';
import classnames from 'classnames';


const Footer = ({
  leftTasks,
  removeSelectedTask,
  countTasks,
  filter,
  filterTasks
}) => {
  return (
    <div className={classes.dataFooter}>
		  <span className={classes.todoCount}>
			<strong>{leftTasks}</strong>
			  item left
		  </span>
        <ul className={classes.filters}>
          <li>
            <a href="#/All"
              className={classnames(
                classes.filterBtnJs,
                filter === 'All' && classes.active
              )}
              onClick={(e) => filterTasks(e.currentTarget.innerText)}>All</a>
          </li>
          <li>
            <a href="#/Active"
              className={classnames(
                classes.filterBtnJs,
                filter === 'Active' && classes.active
              )}
              onClick={(e) => filterTasks(e.currentTarget.innerText)}>Active</a>
          </li>
          <li>
            <a href="#/Completed"
              className={classnames(
                classes.filterBtnJs,
                filter === 'Completed' && classes.active
              )}
              onClick={(e) => filterTasks(e.currentTarget.innerText)}>Completed</a>
          </li>
        </ul>
        <button
          className={classnames(
            classes.clear,
            leftTasks < countTasks && classes.active
          )}
          onClick={() => {removeSelectedTask()}}>
          Clear completed
        </button>
      </div>
    )
};

export default Footer;