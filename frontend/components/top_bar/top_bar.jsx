import React from 'react';
import { Link } from 'react-router-dom';

import User from '../user/user_container'
import Search from './search/search_container'

class TopBar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    
     
  return (
    // <div className="main-top-nav">

    //   <li className="top-navbar-left">
    //     <Link to="/">
    //       <img src={window.images.logo} ></img>
    //       <div>WeSlack</div>
    //     </Link>
    //   </li>

    //   <li className="top-navbar-mid"><Search />
    //   </li>

    //   <li className="top-navbar-right">
    //   <User/>
    //   </li>
    
    // </div>


 <div className="main-top-nav">

<div className="top-navbar-left">
  <Link to="/">
    <img src={window.images.logo} ></img>
    <div>WeSlack</div>
  </Link>
</div>

<div className="top-navbar-mid"><Search />
</div>

<div className="top-navbar-right">
<User/>
</div>

</div> 
    )
    
  }
  
  


}


export default TopBar;