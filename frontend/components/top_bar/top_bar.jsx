import React from 'react';
import { Link } from 'react-router-dom';

import User from '../user/user_container'


class TopBar extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
    const currentId = this.props.currentUser
     
  return (
    
    <div className="top-navbar">

      <span className="top-navbar-left">
        <img src={window.images.logo} ></img>WeSlack</span>

      <span className="top-navbar-mid">search bar</span>

      <span className="top-navbar-right">
         <User/></span>
      
      
      
    
    </div>
    )
    
  }
  
  


}


export default TopBar;