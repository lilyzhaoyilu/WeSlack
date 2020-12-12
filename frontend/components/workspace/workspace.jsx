import React from 'react';
import { Link } from 'react-router-dom';

import User from '../user/user_container'


class WorkSpace extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
    let display = this.props.currentChannelId ? "channel" : "DM";
  return (
    
    <div className="workspace">
      {console.log(this.props)}
      this is the {display} space 
      {this.props.currentChannelId}
      {this.props.currentDMId}
      
      
    
    </div>
    )
    
  }
  
  


}


export default WorkSpace;