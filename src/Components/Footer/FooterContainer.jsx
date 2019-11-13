import React from 'react';
import classes from "./Footer.module.css";
import Footer from "./Footer";


const FooterContainer = (props) => {
  const filterTasks = (method) => {
    props.filterTasks(method);
    localStorage.setItem('filter', JSON.stringify(method));
  };

  return (
    <Footer leftTasks={props.leftTasks}
            removeSelectedTasks={props.removeSelectedTasks}
            tasks={props.tasks}
            filter={props.filter}
            filterTasks = {filterTasks}/>
  )
};

export default FooterContainer;