import React from 'react';
import classes from "./Footer.module.css";


const Footer = (props) => {
    return (
      <div className={classes.data__footer}>
		<span className={classes.todo__count}>
			<strong>{props.leftTasks}</strong>
			item left
		</span>
        <ul className={classes.filters}>
          <li>
            <a href="#/All" className={props.filter === 'All'
              ? `${classes.filterBtnJs} ${classes.active}`
              : `${classes.filterBtnJs}`}
               onClick={(e) => props.filterTasks(e.currentTarget.innerText)}>All</a>
          </li>
          <li>
            <a href="#/Active" className={props.filter === 'Active'
              ? `${classes.filterBtnJs} ${classes.active}`
              : `${classes.filterBtnJs}`}
               onClick={(e) => props.filterTasks(e.currentTarget.innerText)}>Active</a>
          </li>
          <li>
            <a  href="#/Completed" className={props.filter === 'Completed'
              ? `${classes.filterBtnJs} ${classes.active}`
              : `${classes.filterBtnJs}`}
                onClick={(e) => props.filterTasks(e.currentTarget.innerText)}>Completed</a>
          </li>
        </ul>
        <button className={props.leftTasks < props.tasks.length
          ? `${classes.clear} ${classes.active}`
          : `${classes.clear}`} onClick={() => {props.removeSelectedTasks()}}>
          Clear completed
        </button>
      </div>
    )
};

export default Footer;