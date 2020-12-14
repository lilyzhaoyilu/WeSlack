import React from 'react';
import { Link } from 'react-router-dom';
import MessageFrom from '../message_form/message_form_container'

class Message extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
    const messages = Object.values(this.props.cmessages)
 
  return (
    
    <div className="message">
      {messages.map((message=>(<li key={`channel-${this.props.currentChannel}-message-${message.id}`}>{message.body}</li>)))}
      this is the messages
      
      {/* <MessageFrom /> */}
    </div>
    )
    
  }
  
  


}


export default Message;