import React from 'react';
import Footer from './Footer';


const FooterContainer = (props) => {
  const filterTasks = (method) => {
    props.filterTasks(method);
  };

  return (
    <Footer
      leftTasks={props.leftTasks}
      removeSelectedTasks={props.removeSelectedTasks}
      tasks={props.tasks.length}
      filter={props.filter}
      filterTasks = {filterTasks}
    />
  )
};

export default FooterContainer;