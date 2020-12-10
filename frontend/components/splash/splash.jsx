import React from 'react';
import { Link } from 'react-router-dom';




class Splash extends React.Component {
  constructor(props){
    super(props);
    
  
  }
  
  render() {
    // const currentId = this.props.currentUser
    // console.log(this.props)

    const sessionLinks = () => {
      return (
      <nav className="splash-session-container">
        
        <div className="splash-links">
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

  return (
 
    <div className="splash-header">
      
      <Link to="/" className="header-to-main" style={{ textDecoration: 'none' }}>
        <div className="header-and-name">
          <img src={window.images.logo} width="50 " height="50"></img>
          <h1> WeSlack</h1>
        </div>
      </Link>
        
        <h1 className="session-welcome"> Welcome to WeSlack</h1>
        <br></br>
        <div className="splash-temp">
        The owner of this website is working hard to get a pretty picture here.</div>
        

        {this.props.currentUser ? personalGreeting() : sessionLinks()}
    </div>
    )
    
  }
  
  


}


export default Splash;
