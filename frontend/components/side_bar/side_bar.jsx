import React from 'react';
import { Link } from 'react-router-dom';
import Channel from './channels/channel_container';
import CreateChannel from './create_channel/createchannel_container'
import DirectMessage from './direct_message/direct_message_container'



class SideBar extends React.Component {
  constructor(props){
    super(props);
    
   
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.currentUser);
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
      
      <span className="side-bar-dropdown">{this.props.users[currentId].username}</span>
      
      <span className="side-bar-top">
        <ul className="side-bar-top-ul">
        <li>threds</li>
        <li>metions</li>
        <li>reacts</li>
        </ul>
      </span>
   

  <span className="side-bar-channels">
    Channels</span>

    {channels.map(c => (<Channel key={`side-bar-${c.id}`} id={c.id} name={c.name}></Channel>))}

    <div
    className="side-bar-channels-create"><CreateChannel />
    </div>

    <span className="side-bar-direct-messages">
        Direct messages
        <DirectMessage id={this.props.currentUser} username={currentUserName}></DirectMessage>
        {users.map(u => (<DirectMessage key={`side-bar-${u.id}`} id={u.id} username={u.username}></DirectMessage>))}
    </span>
    </div>
    )
    
  }
  
  


}


export default SideBar;
