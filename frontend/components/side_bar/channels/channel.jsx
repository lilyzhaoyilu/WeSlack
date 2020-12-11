import React from 'react';
import { Link } from 'react-router-dom';




class Channel extends React.Component {
  constructor(props){
    super(props);
    

  }


  
  render() {
   
  return (
    <li>
      {this.props.name}
    </li>
  )
  }
  
  


}


export default Channel;
