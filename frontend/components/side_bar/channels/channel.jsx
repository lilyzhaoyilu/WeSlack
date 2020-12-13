import React from 'react';
import { Link, Redirect } from 'react-router-dom';




class Channel extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    
    this.props.fetchChannelUsers(this.props.id);
    this.props.fetchCMessages(this.props.id).then(() => this.props.history.push(`/client/channel/${this.props.id}`));
  }
  
  render() {
    const imageDisplay = () => {
      let id = this.props.id;
      let res = this.props.channels[id].public;
      if (res === true){
        return  <img src={window.images.jinghao}width="25 " height="25"></img>
      }else{
        return <img src={window.images.lock}  width="25 " height="25"></img>
      }
    }
   

  return (
    <div>
      
      {imageDisplay()}
    <li>
    
    <button style={{textDecoration:'none', color:'inherit'}} onClick={this.handleClick}>{this.props.name}</button>
    </li>
    </div>
    
  )
  }
  
  


}


export default Channel;
