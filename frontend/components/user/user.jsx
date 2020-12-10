import React from 'react';
import { Link } from 'react-router-dom';



class UserGreeting extends React.Component {
  constructor(props){
    super(props);
    

  }
  
  render() {
    let currentId = this.props.currentUser
    let picturePath = this.props.users[currentId].image_url



    return (
    <hgroup className="top-user">
    <h2 className="top-user-name">{this.props.users[currentId].username}</h2>

    <img className="top-user-pic"  src={ picturePath === 'defaultpicture' ? window.images.dprofile : picturePath} ></img>
    

    <button className="top-user-logout" onClick={this.props.logout}>Log Out</button>

    </hgroup>
  )
     
        
      
  }
    
    
};


export default UserGreeting;
