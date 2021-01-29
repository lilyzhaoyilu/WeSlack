import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      prompt: "messageform-permission-noshow",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleNewLine = this.handleNewLine.bind(this);
    this.handleJoinChannel = this.handleJoinChannel.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentChannel !== this.props.currentChannel){    
      this.setState({
        body: ""
      });
    }
  }
 
  
  update() {
    return (e) => {
      this.setState({
      body: e.currentTarget.value
    })};
  }


  handleSubmit(e){
    e.preventDefault();

    if (this.props.currentChannel){
     let dummy = Object.assign({},this.state)
     delete dummy[prompt]
    const message = Object.assign({}, dummy, {channel_id: this.props.currentChannel.id, author_id: this.props.currentUser});
   
    // debugger;
    //actual broadcasting, happens from the backend, triggered here 
    App.cable.subscriptions.subscriptions[0].speak(message);
    
    }
    else if(this.props.currentDM){
      let dummy = Object.assign({},this.state)
     delete dummy[prompt]
      const message = Object.assign({}, dummy, {receiver_id: this.props.currentDM, author_id:this.props.currentUser});

      App.cable.subscriptions.subscriptions[0].speak(message);
      
    }


    this.setState({
      body:""
    })
      
  }

  handleNewLine(e){
    e.preventDefault();
    this.setState({body: this.state.body + '\r\n'})
  }

  handleKeypress(e){
    //it triggers by pressing the enter key
    // e.preventDefault();
  if (e.key === 'Enter' && e.ctrlKey) {
    this.handleNewLine(e);
  }else if (e.key === 'Enter' ){
   
    this.handleSubmit(e);
  }
  };

  handleJoinChannel(e){
    e.preventDefault();

    if(this.props.allchannels[this.props.match.params.channelId].public === true){
    this.props.createChannelUser(this.props.match.params.channelId, this.props.currentUser).then(window.location.reload());
    }else{
      this.props.createChannelUser(this.props.match.params.channelId, this.props.currentUser, "true")
      this.setState({prompt: "messageform-permission"})
    }}
  
  joinChannelBlock(){
    if (this.props.currentChannel){
      // debugger;
      if((this.props.channelUsers[this.props.currentUser]) == undefined){
    return(
    <div className="messageform-joinchannel">
      You are viewing <strong>#{this.props.allchannels[this.props.match.params.channelId].name}</strong>
      <br></br>
    <button onClick={this.handleJoinChannel}>Join Channel</button>
    <br></br>
    <span className={this.state.prompt}>request has been sent to the channel admin</span>
    </div>)
    }}
      
  if(this.props.channelUsers[this.props.currentUser]){
    if(this.props.channelUsers[this.props.currentUser].pending === true){
        return(
          <div className="messageform-joinchannel">
            You are viewing <strong>#{this.props.allchannels[this.props.match.params.channelId].name}</strong>
            <br></br>
          <button onClick={this.handleJoinChannel}>Join Channel</button>
          <br></br>
          <span className="messageform-permission">request has been sent to the channel admin</span>
          </div>)
      }
    }
  }



  render() {
    const sendButtonStatus = this.state.body === ""? true: false;
  
   
  return (
    
    <form onSubmit={this.handleSubmit} className="messageform-form" onKeyPress={this.handleKey}>
      {this.joinChannelBlock()}
      <textarea type="text" placeholder="Send message here"
        value={this.state.body}
        onChange={this.update()}
        className="messageform-input"
        onKeyDown={this.handleKeypress}/>
      
      <div className="messageform-form-gray"><button className="messageform-submit" disabled={sendButtonStatus}><i className="far fa-paper-plane"></i></button></div>

      
      
      <div className="messageform-prompt"><strong>Return</strong> to send      <strong>Shift + Return</strong> to add a new line</div>
     
    </form>

    

  
    )
    
  }
}

export default MessageForm;