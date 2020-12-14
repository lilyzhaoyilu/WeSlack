import React from 'react';
import { Link } from 'react-router-dom';

import User from '../user/user_container'


class TopBar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    
     
  return (
    <div className="top-navbar">

      <div className="top-navbar-left">
        <Link to="/">
          <img src={window.images.logo} ></img>
          <div>WeSlack</div>
        </Link>
      </div>

      <div className="top-navbar-mid">search bar
      </div>

      <div className="top-navbar-right">
      <User/>
      </div>
    
    </div>
    )
    
  }
  
  


}


export default TopBar;