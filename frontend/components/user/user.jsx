import React from 'react';
import { Link } from 'react-router-dom';



class User extends React.Component {
  constructor(props){
    super(props);
    

  }
  
  render() {

  const sessionLinks = () => {
    return (
    <nav className="user-login-signup">
      <h3 className="user-login-signup-welcome">Welcome to WeSlack</h3>
      <div className="user-login-signup-links">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up</Link></div>
     
    </nav>
  )};

  
  const personalGreeting = () => {
    let currentId = this.props.currentUser
    let picturePath = this.props.users[currentId].image_url
    return (
    <hgroup className="header-group">
    <h2 className="header-name">Hi, {this.props.users[currentId].username}</h2>

    <img src={ picturePath === 'defaultpicture' ? window.images.dprofile : picturePath} width="100" height="100"></img>
    

    <button className="header-button" onClick={this.props.logout}>Log Out</button>

    </hgroup>
  )};

 
    return this.props.currentUser ? personalGreeting() : sessionLinks()
     
        
      
  }
    
    
};


export default User;
