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

    {channels.map(c => (<Channel key={`side-bar-${c.id}`} name={c.name}></Channel>))}

    <span
    className="side-bar-channels-create"><CreateChannel />
    </span>

      <span className="side-bar-direct-messages">
        Direct messages
         <DirectMessage /> </span>
    </div>
    )
    
  }
  
  


}


export default SideBar;
