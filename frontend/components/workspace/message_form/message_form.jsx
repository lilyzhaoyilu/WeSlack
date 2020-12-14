import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentChannel !== this.props.currentChannel){
      ///TODO: setState doe snt work
      console.log("compoenent updated!!!");
      this.setState({
        body: ""
      });
      console.log("updated state", this.state)
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
    const message = Object.assign({}, this.state, {channel_id: this.props.currentChannel.id, author_id: this.props.currentUser});
    this.props.createCMessage(message);}
    else if(this.props.currentDM){
      const message = Object.assign({}, this.state, {receiver_id: this.props.currentDM, author_id:this.props.currentUser});
      console.log("created message", message);
      this.props.createDMessage(message)
    }
    this.setState({
      body:""
    })
      
  }

 


  
  render() {
    const sendButtonStatus = this.state.body === ""? true: false;
//   
  return (
    
   

    <form onSubmit={this.handleSubmit} className="messageform-form">
      
      <textarea type="text" placeholder="Send message here"
        value={this.state.username}
        onChange={this.update()}
        className="messageform-input"/>

      <button className="messageform-submit" disabled={sendButtonStatus}><img src={window.images.send}></img></button>
    </form>

  
    )
    
  }
}

export default MessageForm;