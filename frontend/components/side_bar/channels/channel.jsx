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
   

  return (
    <div>
      
     
    <li>

    <button style={{textDecoration:'none', color:'inherit'}} onClick={this.handleClick}>{this.props.name}</button>
    </li>
    </div>
    
  )
  }
  
  


}


export default Channel;
