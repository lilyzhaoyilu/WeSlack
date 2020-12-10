import React from 'react';
import { Link } from 'react-router-dom';

import User from '../user/user_container'


class TopNavBar extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
    const currentId = this.props.currentUser
     //#350d36
  return (
    
    <div className="top-navbar">

      
      <span className="top-user"> <User/></span>
    
    </div>)
    
  }
  
  


}


export default TopNavBar;