

import React from 'react';

import { Link } from 'react-router-dom';

import TopBar from '../top_bar/top_bar_container';
import SideBar from '../side_bar/side_bar_container';
import WorkSpace from '../workspace/workspace_container'



class MainBoard extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
   
  return (
    <div>
      <span className="main-top-nav"><TopBar /></span>
      
      <span className="main-not-top-nav">
        <span className="main-side-nav"><SideBar /></span>

        <span className="main-workspace"><WorkSpace /></span>
      </span>
     
    </div>
  )
  }

}


export default MainBoard;