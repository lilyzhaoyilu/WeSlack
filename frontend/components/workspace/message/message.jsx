import React from 'react';
import { Link } from 'react-router-dom';
import MessageFrom from '../message_form/message_form_container'

class Message extends React.Component {
  constructor(props){
    super(props);
  
  }

  componentDidMount(){
  
    if(this.props.match.params.channelId){
      this.props.fetchCMessages(this.props.match.params.channelId)

      const that=this;
      App.cable.subscriptions.create(
      {channel: 'ChatChannel',
      channelId: this.props.match.params.channelId,},
      // dmId: this.props.match.params.dmId},   extra }, above
      {
        received: data => {
          // debugger;
          that.props.hahareceiveCMessage(data.message);
        }, 
        speak: function (data) {
          return this.perform('speak',data)
        }
      }
      )}
    else if(this.props.match.params.dmId){
      this.props.fetchDMessages(this.props.currentUser, this.props.match.params.dmId)
      const that=this;
      App.cable.subscriptions.create(
      {channel: 'ChatChannel',
      // channelId: this.props.match.params.channelId,},
      dmId: this.props.match.params.dmId},
        //  extra }, above
      {
        received: data => {
          // debugger;
          that.props.hahareceiveCMessage(data.message);
        }, 
        speak: function (data) {
          return this.perform('speak',data)
        }
      }
      )
    }



    //listening, the other is broadcasting
    //set up for action cable
    ///////
    // const that=this;
    // App.cable.subscriptions.create(
    //   {channel: 'ChatChannel',
    //   channelId: this.props.match.params.channelId,
    //   dmId: this.props.match.params.dmId},
    //   {
    //     received: data => {
    //       debugger;
    //       that.props.hahareceiveCMessage(data.message);
    //     }, 
    //     speak: function (data) {
    //       return this.perform('speak',data)
    //     }
    //   }
    //   )
      ///////////////
      
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.channelId){
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      
      this.props.fetchCMessages(this.props.match.params.channelId)
      
      const that=this;
      App.cable.subscriptions.create(
      {channel: 'ChatChannel',
      channelId: this.props.match.params.channelId,},
      // dmId: this.props.match.params.dmId},   extra }, above
      {
        received: data => {
          // debugger;
          that.props.hahareceiveCMessage(data.message);
        }, 
        speak: function (data) {
          return this.perform('speak',data)
        }
      }
      )


    }}else if(this.props.match.params.dmId)
    {
      if (prevProps.match.params.dmId !== this.props.match.params.dmId)
      {
        this.props.fetchDMessages(this.props.currentUser,this.props.match.params.dmId)
        const that=this;
        App.cable.subscriptions.create(
          {channel: 'ChatChannel',
          // channelId: this.props.match.params.channelId,
          dmId: this.props.match.params.dmId
          },
          {
            received: data => {
              // debugger;
              that.props.hahareceiveCMessage(data.message);
            }, 
            speak: function (data) {
              return this.perform('speak',data)
            }
          }
          )
      }}

    
  }
  
  render() {
    const messages = Object.values(this.props.messages)
 
  return (
    
    <div className="message">
       this is the messages
      {messages.map((message=>(<div className={`message-${message.id}`}>{message.body}</div>)))}
{/* 
      {messages.map((message=>(<div key={`channel-${this.props.currentChannel.id}-message-${message.id}`}>{message.body}</div>)))} */}
     
      
      {/* <MessageFrom /> */}
    </div>
    )
    
  }
  
  


}


export default Message;