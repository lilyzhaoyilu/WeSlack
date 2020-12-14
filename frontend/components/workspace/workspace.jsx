import React from 'react';
import { Link } from 'react-router-dom';
import WorkSpaceHeader from './workspace_header/workspace_header_container'
import MessageForm from './message_form/message_form_container'
import Message from './message/message_container'


class WorkSpace extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchChannelUsers(this.props.match.params.channelId)
    this.props.fetchCMessages(this.props.match.params.channelId)
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      this.props.fetchChannelUsers(this.props.match.params.channelId)
      this.props.fetchCMessages(this.props.match.params.channelId)
    }
  }
  
  render() {
    const display = this.props.currentChannelId ? "channel" : "DM";
    const name = this.props.currentChannel
    const messages = Object.values(this.props.cmessages)
    const channelusers = Object.values(this.props.channelusers).map(e => <li key={`channelusers-${e.userId}`}>{e.userId}</li>)
    const currentMemberAmount =  Object.values(this.props.channelusers).length
    
  return (
    
    <div className="workspace">
    
      <div className="workspace-header">
      <WorkSpaceHeader displaytype={display} displayname={name} amount={currentMemberAmount} />
      </div>
     
      <div className="workspace-body">
      <div>channel user here {channelusers}</div>
      <Message />
      <MessageForm />
      </div>
    </div>
    )
    
  }
  
  


}


export default WorkSpace;