import React from 'react';
import classes from './Footer.module.css';
import classNames from 'classnames';


const Footer = ({
  leftTasks,
  removeSelectedTasks,
  tasks,
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
              className={classNames(classes.filterBtnJs, filter === 'All' && classes.active)}
              onClick={(e) => filterTasks(e.currentTarget.innerText)}>All</a>
          </li>
          <li>
            <a href="#/Active"
              className={classNames(classes.filterBtnJs, filter === 'Active' && classes.active)}
              onClick={(e) => filterTasks(e.currentTarget.innerText)}>Active</a>
          </li>
          <li>
            <a href="#/Completed"
              className={classNames(classes.filterBtnJs, filter === 'Completed' && classes.active)}
              onClick={(e) => filterTasks(e.currentTarget.innerText)}>Completed</a>
          </li>
        </ul>
        <button
          className={classNames(classes.clear, leftTasks < tasks && classes.active)}
          onClick={() => {removeSelectedTasks()}}>
          Clear completed
        </button>
      </div>
    )
};

export default Footer;