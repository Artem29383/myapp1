import React from 'react';
import classes from "./Footer.module.css";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={classes.data__footer}>
		<span className={classes.todo__count}>
			<strong>{this.props.leftTasks}</strong>
			item left
		</span>
        <ul className={classes.filters}>
          <li>
            <a href="#/" className={classes.filterBtnJs}>All</a>
          </li>
          <li>
            <a href="#/active" className={classes.filterBtnJs}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={classes.filterBtnJs}>Completed</a>
          </li>
        </ul>
        <button className={classes.clear}>
          Clear completed
        </button>
      </div>
    )
  }
}

export default Footer;