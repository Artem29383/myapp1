import React from 'react';
import classes from './Footer.module.css';


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
            <a href="#/All" className={filter === 'All'
              ? `${classes.filterBtnJs} ${classes.active}`
              : `${classes.filterBtnJs}`}
               onClick={(e) => filterTasks(e.currentTarget.innerText)}>All</a>
          </li>
          <li>
            <a href="#/Active" className={filter === 'Active'
              ? `${classes.filterBtnJs} ${classes.active}`
              : `${classes.filterBtnJs}`}
               onClick={(e) => filterTasks(e.currentTarget.innerText)}>Active</a>
          </li>
          <li>
            <a href="#/Completed" className={filter === 'Completed'
              ? `${classes.filterBtnJs} ${classes.active}`
              : `${classes.filterBtnJs}`}
               onClick={(e) => filterTasks(e.currentTarget.innerText)}>Completed</a>
          </li>
        </ul>
        <button className={leftTasks < tasks.length
          ? `${classes.clear} ${classes.active}`
          : `${classes.clear}`} onClick={() => {
          removeSelectedTasks()
        }}>
          Clear completed
        </button>
      </div>
    )
  };

export default Footer;