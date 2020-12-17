import React from 'react';
import { Link } from 'react-router-dom';
import Channel from './channels/channel_container';
import CreateChannel from './create_channel/createchannel_container'
import DirectMessage from './direct_message/direct_message_container'



class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      channels: "side-bar-channels",
      dms: "side-bar-direct-messages",
      channelRotate: " fa-rotate-90",
      messageRotate: ' fa-rotate-90',
    }
    this.handleToggleChannel = this.handleToggleChannel.bind(this);
    this.handleToggleMessage = this.handleToggleMessage.bind(this);
    
   
  }

  handleToggleChannel() {
    if (this.state.channels === "side-bar-channels"){
      this.setState({channels: "side-bar-channels-noshow",channelRotate: "" })
    }else{
      this.setState({channels: "side-bar-channels", channelRotate: " fa-rotate-90"})
    }
  }

  handleToggleMessage() {
    if (this.state.dms === "side-bar-direct-messages"){
      this.setState({dms: "side-bar-direct-messages-noshow", messageRotate:""})
    }else{
      this.setState({dms: "side-bar-direct-messages", messageRotate:" fa-rotate-90"})
    }
  }

 
  
  render() {
    const currentId = this.props.currentUser;
    const channels = Object.values(this.props.channels);
    let restUser = Object.assign({}, this.props.users) ;
    
    delete restUser[this.props.currentUser]
    const users = Object.values(restUser);
    
    const currentUserName = this.props.users[this.props.currentUser].username;
    
  return (
 
  <div className="side-bar">
      
    <div className="side-bar-user">{this.props.users[currentId].username}</div>

    {/* <div className="side-bar-channel-control"> */}
      <button  className="side-bar-channel-control" onClick={this.handleToggleChannel}>
        {/* <img className={this.state.channelRotate} src={window.images.triangle3}></img> */}
        <i className={`fas fa-caret-right${this.state.channelRotate}`}></i>
      Channels</button>
    {/* </div> */}

    <div className={this.state.channels}>
    {channels.map(c => (<Channel key={`side-bar-${c.id}`} id={c.id} name={c.name}></Channel>))}
    </div>

    <CreateChannel />
    
    <button className="side-bar-message-control" onClick={this.handleToggleMessage}><i className={`fas fa-caret-right${this.state.messageRotate}`}></i>Direct messages</button>
    
    <div className={this.state.dms}>
        <DirectMessage id={this.props.currentUser} username={currentUserName}></DirectMessage>
        {users.map(u => (<DirectMessage key={`side-bar-${u.id}`} id={u.id} username={u.username}></DirectMessage>))}
    </div>
    
    </div>
    )
    
  }
  
  


}


export default SideBar;
