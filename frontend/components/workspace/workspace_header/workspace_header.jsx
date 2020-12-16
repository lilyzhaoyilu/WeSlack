import React from 'react';
import { Link } from 'react-router-dom';


class WorkSpaceHeader extends React.Component {
  constructor(props){
    super(props);
  this.handleLeaveChannel = this.handleLeaveChannel.bind(this);
  }

  componentDidMount(){
    
    if(this.props.match.params.channelId){
    this.props.fetchChannelUsers(this.props.match.params.channelId)
  }};

  componentDidUpdate(prevProps){
    if (this.props.match.params.channelId){
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      this.props.fetchChannelUsers(this.props.match.params.channelId)
    }}
  };

  handleLeaveChannel(){
    
    this.props.deleteChannelUser(this.props.match.params.channelId, this.props.currentUser);
  }
  
  render() {
    const channelusers = () => { 
      if (this.props.currentChannel){
        return(
      Object.values(this.props.channelusers).map(e => <li key={`channelusers-${e.userId}`}>{e.userId}</li>))}
    else{
      return (<div></div>)
    }}

    const currentMemberAmount =  Object.values(this.props.channelusers).length

    const currentChannel = () => {
      if(this.props.currentChannel){
        return (this.props.channels[this.props.currentChannel.id].name)
      }
    }

    const currentChannelDescription = () => {
      if(this.props.currentChannel && this.props.channels[this.props.currentChannel.id].description){
        return (this.props.channels[this.props.currentChannel.id].description)
      }else if(this.props.currentChannel){
        return("Add a topic")
      }
    }

   
    
   
  return (
    
    <div className="workspace-header">
           
      
      
      <div className="workspace-header-left">
        <div className="workspace-header-name">#{currentChannel()}</div>
        <div className="workspace-header-description">{currentChannelDescription()}</div>
      </div>
      {/* {channelusers()} */}
      
      <div className="workspace-header-right">
        <div className="workspace-header-profiles"></div>
        <div className="workspace-header-number">{currentMemberAmount} in channel</div>
        <button className="workspace-header-memberinfo"><img src={window.images.info}></img></button>
        <button className="workspace-header-leave" onClick={this.handleLeaveChannel}><img src={window.images.leave}></img></button>
        
      </div>
    </div>
    )
    
  }
  
  


}


export default WorkSpaceHeader;