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
    this.props.deleteChannelUser(this.props.currentChannelId, this.props.currentUser);
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
        return (<div>{this.props.channels[this.props.currentChannel.id].name}</div>)
      }else{
        return (<div></div>)
      }
    }
    
   
  return (
    
    <div className="workspace-header">
           
      
      
      <div className="workspace-header-left">
        <div className="workspace-header-name">{currentChannel()}</div>
        <div className="workspace-header-description">{channelusers()}</div>
      </div>
      
      
      <div className="workspace-header-right">
        <div className="workspace-header-profiles"></div>
        <div className="workspace-header-number"># of people in channel{this.props.amount}</div>
        <div><button onClick={this.handleLeaveChannel}>leave channel</button></div>
      </div>
    </div>
    )
    
  }
  
  


}


export default WorkSpaceHeader;