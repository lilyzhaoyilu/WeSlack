import React from 'react';
import { Link } from 'react-router-dom';
import WorkSpaceHeader from './workspace_header/workspace_header_container'


class WorkSpace extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidUpdate(){
  //   this.props.fetchCMessages(this.props.currentChannelId)
  // }
  
  render() {
    const display = this.props.currentChannelId ? "channel" : "DM";
    const name = this.props.currentChannel
    const messages = Object.values(this.props.cmessages)
    
  return (
    
    <div className="workspace">
    
      <div className="workspace-header">
      <WorkSpaceHeader displaytype={display} displayname={name} />
      </div>
     
      this is the {display} space 
      {this.props.currentChannelId}
      {this.props.currentDMId}
      
      {messages.map((message=>(<li key={`channel-${this.props.currentChannel}-message-${message.id}`}>{message.body}</li>)))}
      
      
    
    </div>
    )
    
  }
  
  


}


export default WorkSpace;