import React from 'react';
import { Link } from 'react-router-dom';



class User extends React.Component {
  constructor(props){
    super(props);
    

  }
  
  render() {

  const sessionLinks = () => {
    return (
    <nav className="login-signup">
      
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
      <Link></Link>
    </nav>
  )};

  
  const personalGreeting = () => {
    let currentId = this.props.currentUser
    return (
    <hgroup className="header-group">
    <h2 className="header-name">Hi, {this.props.users[currentId].username}</h2>
      <button className="header-button" onClick={this.props.logout}>Log Out</button>
    </hgroup>
  )};

 
    return this.props.currentUser ? personalGreeting() : sessionLinks()
     
        
      
  }
    
    
};


export default User;
