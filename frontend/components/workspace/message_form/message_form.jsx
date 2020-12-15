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
    const message = Object.assign({}, this.state, {channel_id: this.props.currentChannel.id, author_id: this.props.currentUser});
    // debugger;
    //actual broadcasting, happens from the backend, triggered here 
    App.cable.subscriptions.subscriptions[0].speak(message);
    
    }
    else if(this.props.currentDM){
      const message = Object.assign({}, this.state, {receiver_id: this.props.currentDM, author_id:this.props.currentUser});

      App.cable.subscriptions.subscriptions[0].speak(message);
      
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
        value={this.state.body}
        onChange={this.update()}
        className="messageform-input"/>

      <button className="messageform-submit" disabled={sendButtonStatus}><img src={window.images.send}></img></button>
    </form>

  
    )
    
  }
}

export default MessageForm;