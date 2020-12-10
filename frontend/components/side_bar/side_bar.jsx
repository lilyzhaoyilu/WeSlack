import React from 'react';
import { Link } from 'react-router-dom';




class SideBar extends React.Component {
  constructor(props){
    super(props);
    
  
  }
  
  render() {
    const currentId = this.props.currentUser
    console.log(this.props)
  return (
 
    <div className="side-bar">
      
      <span className="side-bar-dropdown">{this.props.users[currentId].username}</span>
      <span className="side-bar-top">threds, metions,reacts</span>

      <span className="side-bar-channels">channels</span>

      <span className="side-bar-direct-messages">
         direct message</span>
    </div>
    )
    
  }
  
  


}


export default SideBar;
