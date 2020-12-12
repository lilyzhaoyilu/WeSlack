import React from 'react';
import { Link } from 'react-router-dom';
import WorkSpaceHeader from './workspace_header/workspace_header_container'


class WorkSpace extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const display = this.props.currentChannelId ? "channel" : "DM";
    const name = this.props.currentChannel
    
  return (
    
    <div className="workspace">
      
      <div className="workspace-header">
      <WorkSpaceHeader displaytype={display} displayname={name} />
      </div>
      {console.log(this.props)}
      this is the {display} space 
      {this.props.currentChannelId}
      {this.props.currentDMId}
      
      
    
    </div>
    )
    
  }
  
  


}


export default WorkSpace;