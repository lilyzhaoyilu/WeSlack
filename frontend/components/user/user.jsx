import React from 'react';



class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdown: "top-user-dropdown-noshow"
    }
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
   
  }

  handleLogOut(event){
    event.preventDefault();
    this.props.logout().then(() => this.props.history.push(`/`));
  }

  handleDropdownToggle(event){
    event.preventDefault();
    if (this.state.dropdown === "top-user-dropdown-noshow"){
      this.setState({dropdown: "top-user-dropdown"})
    }else{
      this.setState({dropdown: "top-user-dropdown-noshow"})
    }
  }

 

  render() {
    
    const picturePath = this.props.users[this.props.currentUser].image_url


    return (
    <div className="top-user">
     
   

    <button onClick={this.handleDropdownToggle}><img className="top-user-pic"  src={ picturePath === 'defaultpicture' ? window.images.dprofile : picturePath} ></img></button>
    
    <div className={this.state.dropdown}>
      <li className="top-user-name">
        <img className="top-user-pic"  src={ picturePath === 'defaultpicture' ? window.images.dprofile : picturePath} ></img>

        <div className="top-user-pic-flex">
        <div className="top-user-pic-flex-name">{this.props.users[this.props.currentUser].username}</div>
        <div className="top-user-pic-flex-status">
          <img className="top-user-dot" src={window.images.dot}></img>active
        </div>
        </div>
      </li>
      <hr></hr>
      <li><button className="top-user-logout" onClick={this.handleLogOut}>Sign out of {this.props.users[this.props.currentUser].username}</button></li>
    </div>
    </div>
  ) 
  }
};


export default User;
