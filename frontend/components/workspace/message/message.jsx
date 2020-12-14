import React from 'react';
import { Link } from 'react-router-dom';
import MessageFrom from '../message_form/message_form_container'

class Message extends React.Component {
  constructor(props){
    super(props);
  
  }
  componentDidMount(){
    console.log("messagejsx", this.props)
    if(this.props.match.params.channelId){
    // this.props.fetchChannelUsers(this.props.match.params.channelId)
    this.props.fetchCMessages(this.props.match.params.channelId)}
    else if(this.props.match.params.dmId){
      this.props.fetchDMessages(this.props.currentUser, this.props.match.params.dmId)
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.channelId){
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      // this.props.fetchChannelUsers(this.props.match.params.channelId)
      this.props.fetchCMessages(this.props.match.params.channelId)
    }}else if(this.props.match.params.dmId){if (prevProps.match.params.dmId !== this.props.match.params.dmId){
      this.props.fetchDMessages(this.props.currentUser,this.props.match.params.dmId)}}
  }
  
  render() {
    const messages = Object.values(this.props.messages)
 
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