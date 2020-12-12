import React from 'react';
import { Link } from 'react-router-dom';




class Channel extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {

  return (
     
    <li>
      <Link style={{ textDecoration: 'none' }} to={`/client/channel/${this.props.id}`}>{this.props.name}</Link>
    </li>
    
  )
  }
  
  


}


export default Channel;
