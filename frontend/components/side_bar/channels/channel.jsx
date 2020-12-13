import React from 'react';
import { Link } from 'react-router-dom';




class Channel extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.fetchCMessages(this.props.id)
  }
  
  render() {

  return (
     
    <li>
      <Link style={{textDecoration:'none', color:'inherit'}} to={`/client/channel/${this.props.id}`} onClick={this.handleClick}>{this.props.name}</Link>
    </li>
    
  )
  }
  
  


}


export default Channel;
