import React from 'react';
import classes from "./Footer.module.css";
import API from "../../Api/Api";


const Footer = (props) => {
  const filterTasks = (method) => {
    props.filterTasks(method);
    localStorage.setItem('filter', JSON.stringify(method));
  };

  const removeSelectedTasks = () => {
    props.tasks.map(async t => {
      if (t.check) {
        const response = await API.deleteRemoveTask(t.id);
        if (response.statusText === 'OK') {
          props.removeSelectedTasks();
        }
      }
    });
  };

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
             onClick={(e) => filterTasks(e.currentTarget.innerText)}>All</a>
        </li>
        <li>
          <a href="#/Active" className={props.filter === 'Active'
            ? `${classes.filterBtnJs} ${classes.active}`
            : `${classes.filterBtnJs}`}
             onClick={(e) => filterTasks(e.currentTarget.innerText)}>Active</a>
        </li>
        <li>
          <a href="#/Completed" className={props.filter === 'Completed'
            ? `${classes.filterBtnJs} ${classes.active}`
            : `${classes.filterBtnJs}`}
             onClick={(e) => filterTasks(e.currentTarget.innerText)}>Completed</a>
        </li>
      </ul>
      <button className={props.leftTasks < props.tasks.length
        ? `${classes.clear} ${classes.active}`
        : `${classes.clear}`} onClick={removeSelectedTasks}>
        Clear completed
      </button>
    </div>
  )
};

export default Footer;