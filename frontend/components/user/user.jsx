import React from 'react';



class User extends React.Component {
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event){
  event.preventDefault();
  this.props.logout().then(() => this.props.history.push(`/`));
  }
  

  render() {
    
    const picturePath = this.props.users[this.props.currentUser].image_url


    return (
    <div className="top-user">
     
    <div className="top-user-name">{this.props.users[this.props.currentUser].username}</div>

    <img className="top-user-pic"  src={ picturePath === 'defaultpicture' ? window.images.dprofile : picturePath} ></img>
    

    <button className="top-user-logout" onClick={this.handleLogOut}>Log Out</button>

    </div>
  ) 
  }
};


export default User;
