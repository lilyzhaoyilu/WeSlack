import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
// import button from 'react-inline-edit';


class WorkSpaceHeader extends React.Component {
  constructor(props){
    super(props);
  this.handleLeaveChannel = this.handleLeaveChannel.bind(this);
  this.props.fetchAllChannels();
  this.handleMemberInfo = this.handleMemberInfo.bind(this);
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
    
    this.props.deleteChannelUser(this.props.match.params.channelId, this.props.currentUser).then(window.location.reload());
  }

  handleMemberInfo(){
    // debugger;
    if(this.props.match.url){ 
      
    //   if(this.props.match.url.includes("details")){
    //   const newUrl = this.props.match.url.slice(0, url.length - 8)
    //   this.props.history.push(newUrl);
    // }else{
      const newUrl = this.props.match.url + "/details"
      this.props.history.push(newUrl);
    }
    
  }
  
  render() {
   

    const currentChannel = () => {
      if(this.props.currentChannel){
        return (`#${this.props.allchannels[this.props.match.params.channelId].name}`)
      }else if (this.props.currentDM && this.props.users){
        let string = this.props.currentDM.replace(this.props.currentUser, '');
        if (this.props.users[string]){
          return (this.props.users[string].username)
        }else {
          return ("")
        }
      }
    }

    const currentChannelDescription = () => {
      if(this.props.currentChannel && this.props.allchannels[this.props.currentChannel.id].description){
        return (this.props.allchannels[this.props.match.params.channelId].description)
      }else if(this.props.currentChannel){
        return("Add a topic")
      }
    }
    
    const currentMemberAmount = ()=>{
      if(this.props.currentChannel){
     return (`${Object.values(this.props.channelusers).length} in channel`) }
    } 

    const channelButtons = () => {
      if(this.props.currentChannel){
        return(<div>
          <button className="workspace-header-memberinfo" onClick={this.handleMemberInfo}><img src={window.images.info}></img></button>
          
        <button className="workspace-header-leave" onClick={this.handleLeaveChannel}><img src={window.images.leave}></img></button></div>
        )
      }
    }
    



    
   
  return (
    
    <div className="workspace-header">
           
      
      
      <div className="workspace-header-left">
        <div className="workspace-header-name">{currentChannel()}</div>
        <button className="workspace-header-description">{currentChannelDescription()}</button>
      </div>
      {/* {channelusers()} */}
      
      <div className="workspace-header-right">
        <div className="workspace-header-profiles"></div>
        <div className="workspace-header-number">{currentMemberAmount()}</div>
        {channelButtons()}
        
        
      </div>
    </div>
    )
    
  }
  
  


}


export default WorkSpaceHeader;