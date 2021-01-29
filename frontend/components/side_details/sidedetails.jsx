import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class SideDetail extends React.Component {
  constructor(props){
    super(props);
   
  // this.handleGoBackToChannel = this.handleGoBackToChannel.bind(this);
  }


  // handleGoBackToChannel(){
  //   let copy_url = (' ' + this.props.match.params.channelId).slice(1);
  //   console.log("copy",copy_url);
  //   // let newUrl = `client/channel/${copy_url}`;
  //   // <Redirect to={`client/channel/${copy_url}`} />
  //   ()=>(this.props.history.push(`/client/channel/${copy_url}`));
  // }

  displayAdmin(userIdInput){
    if(this.props.currentChannel){
      
      if(this.props.currentChannel.admin_id === userIdInput){return <span className="details-admin">  admin</span>}
    }
  }




  channelusers ()  { 
    if (this.props.match.params.channelId){
      return(
    Object.values(this.props.channelusers).map(channelUserId => 
    {
      let actualUrl = [this.props.currentUser, channelUserId.userId].sort((a, b) => (a-b)).join('');
      
      return(
      <li key={`channelusers-${channelUserId.userId}`}>

      <Link to={`/client/dm/${actualUrl}`}>
      <img src={window.images.dprofile}></img>
      {this.props.users[channelUserId.userId] ? this.props.users[channelUserId.userId].username : ""}</Link>
      {this.displayAdmin(channelUserId.userId)}
      </li>)
  }
  ))}}



  

  render() {
  

   

    return (
    <div className="details">
      <Link to={`/client/channel/${this.props.match.params.channelId}`}><i className="fas fa-times"></i></Link>
      <div className="details-title">Member List</div>
      <div className="details-subtitle">click a member to message</div>
    
      {this.channelusers()}
      </div>
    

  ) 
  }
};


export default SideDetail;
  /* <button onClick={this.handleGoBackToChannel}><i className="fas fa-times"></i></button> */