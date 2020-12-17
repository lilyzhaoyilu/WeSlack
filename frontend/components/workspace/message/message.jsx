import React from 'react';
import { Link } from 'react-router-dom';
import MessageFrom from '../message_form/message_form_container'
import MessageDetail from '../message_detail/message_detail_contailer'
class Message extends React.Component {
  constructor(props){
    super(props);
    this.bottom = React.createRef();
  
  }

  componentDidMount(){
    
    console.log("mount channel", this.props.match.params.channelId);
    console.log("mount dm",this.props.match.params.dmId );
    if(this.props.match.params.channelId){
      this.props.fetchCMessages(this.props.match.params.channelId)

      // const that=this;
      // App.cable.subscriptions.create(
      // {channel: 'ChatChannel',
      // channelId: this.props.match.params.channelId,},
      // // dmId: this.props.match.params.dmId},   extra }, above
      // {
      //   received: data => {
      //     // debugger;
      //     that.props.hahareceiveCMessage(data.message);
      //   }, 
      //   speak: function (data) {
      //     return this.perform('speak',data)
      //   }
      // }
      // )
    }
    else if(this.props.match.params.dmId){
      this.props.fetchDMessages(this.props.currentUser, this.props.match.params.dmId)
      
      // const that=this;
      // App.cable.subscriptions.create(
      // {channel: 'ChatChannel',
      // // channelId: this.props.match.params.channelId,},
      // dmId: this.props.match.params.dmId},
      //   //  extra }, above
      // {
      //   received: data => {
      //     // debugger;
      //     that.props.hahareceiveCMessage(data.message);
      //   }, 
      //   speak: function (data) {
      //     return this.perform('speak',data)
      //   }
      // }
      // )
    }


    const that=this;
    App.cable.subscriptions.create(

      {channel: 'ChatChannel',
      channelId: this.props.match.params.channelId,
      dmId: this.props.match.params.dmId},

      {
        received: data => {
          console.log("mount subssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
          that.props.hahareceiveCMessage(data.message);
        }, 
        speak: function (data) {
          return this.perform('speak',data)
        }
      }
    )

  }

  componentDidUpdate(prevProps){
    
    console.log("update channel", this.props.match.params.channelId);
    console.log("update dm",this.props.match.params.dmId );

    if (this.props.match.params.channelId !== prevProps.match.params.channelId){
      this.props.fetchCMessages(this.props.match.params.channelId)
    }else if (prevProps.match.params.dmId !== this.props.match.params.dmId){
      this.props.fetchDMessages(this.props.currentUser,this.props.match.params.dmId)
    }
    
    
    const that=this;
    App.cable.subscriptions.create(

      {channel: 'ChatChannel',
      channelId: this.props.match.params.channelId,
      dmId: this.props.match.params.dmId},

      {
        received: data => {
          console.log("update sub")
          that.props.hahareceiveCMessage(data.message);
        }, 
        speak: function (data) {
          return this.perform('speak',data)
        }
      }
    )




    // if (this.props.match.params.channelId !== undefined){
    //   if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      
    //   this.props.fetchCMessages(this.props.match.params.channelId)
    
    //   const that=this;
    //   App.cable.subscriptions.create(
    //   {channel: 'ChatChannel',
    //   channelId: this.props.match.params.channelId,},
    //   // dmId: this.props.match.params.dmId},   extra }, above
    //   {
    //     received: data => {
    //       // debugger;
    //       that.props.hahareceiveCMessage(data.message);
    //     }, 
    //     speak: function (data) {
    //       return this.perform('speak',data)
    //     }
    //     }
    //     )
    //   }
    // }else if(this.props.match.params.dmId !== undefined){
    //   if (prevProps.match.params.dmId !== this.props.match.params.dmId){
    //     this.props.fetchDMessages(this.props.currentUser,this.props.match.params.dmId)

    //     const that=this;
    //     App.cable.subscriptions.create(
    //       {channel: 'ChatChannel',
    //       // channelId: this.props.match.params.channelId,
    //       dmId: this.props.match.params.dmId},

    //       {
    //         received: data => {
    //           // debugger;
    //           that.props.hahareceiveCMessage(data.message);
    //         }, 
    //         speak: function (data) {
    //           return this.perform('speak',data)
    //         }
    //       }
    //     )
    //   }}


    if(this.bottom.current != null){
      document.getElementById('message-bottom').scrollIntoView()
    }

    
  }
  
  render() {
    const messages = Object.values(this.props.messages)
    
    
  return (
    
    <div className="message">
      
      {messages.map((message=> (<MessageDetail message={message} key={`message-container-${message.id}`} />)))}



      <div id="message-bottom" ref={this.bottom}></div>

      
    </div>
    )
    
  }
  
  


}


export default Message;