import React from 'react';
import { Link } from 'react-router-dom';



class User extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);

  }

  handleLogOut(event){   ///log out and redirect to main page
  event.preventDefault();
  this.props.logout().then(() => this.props.history.push(`/`));
  }
  
  render() {
    let currentId = this.props.currentUser
    let picturePath = this.props.users[currentId].image_url



    return (
    <hgroup className="top-user">
     
    <h2 className="top-user-name">{this.props.users[currentId].username}</h2>

    <img className="top-user-pic"  src={ picturePath === 'defaultpicture' ? window.images.dprofile : picturePath} ></img>
    

    <button className="top-user-logout" onClick={this.handleLogOut}>Log Out</button>

    </hgroup>
  )
     
        
      
  }
    
    
};


export default User;
