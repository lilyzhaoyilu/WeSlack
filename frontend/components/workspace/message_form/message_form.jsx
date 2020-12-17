import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleNewLine = this.handleNewLine.bind(this);
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
    console.log("Enter and shift key pressed haha")
    this.handleSubmit(e);
  }
};


  render() {
    const sendButtonStatus = this.state.body === ""? true: false;
//   
  return (
    
   

    <form onSubmit={this.handleSubmit} className="messageform-form" onKeyPress={this.handleKey}>
      
      <textarea type="text" placeholder="Send message here"
        value={this.state.body}
        onChange={this.update()}
        className="messageform-input"
        onKeyDown={this.handleKeypress}/>

      <button className="messageform-submit" disabled={sendButtonStatus}><i className="far fa-paper-plane"></i></button>
      <div><strong>Return</strong> to send      <strong>Shift + Return</strong> to add a new line</div>
     
    </form>

  
    )
    
  }
}

export default MessageForm;