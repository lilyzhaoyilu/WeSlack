import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class SideDetail extends React.Component {
  constructor(props){
    super(props);
    this.handleApprovePending = this.handleApprovePending.bind(this);
    this.handleDenyPending = this.handleDenyPending.bind(this);
   
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

  displayPending(userIdInput){
    
    if(this.props.currentChannel && (this.props.currentChannel.admin_id == this.props.currentUser)){
      
      if(this.props.channelusers[userIdInput] && this.props.channelusers[userIdInput].pending === true){
      return (<span className="details-approval-group">

        <button className="details-approval-approve" onClick={(e)=>this.handleApprovePending(userIdInput,e)}><i className="fas fa-check"></i></button>

        <button className="details-approval-deny" onClick={(e)=>this.handleDenyPending(userIdInput,e)}><i className="fas fa-times"></i></button>

        </span>)}
    }
  }

  handleApprovePending(userIdInput,e){
    e.preventDefault();
    this.props.patchChannelUser(this.props.match.params.channelId, userIdInput, false).then(window.location.reload());
  }

  handleDenyPending(userIdInput,e){
    e.preventDefault();
    this.props.deleteChannelUser(this.props.match.params.channelId, userIdInput).then(window.location.reload());
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
      {this.props.users[channelUserId.userId] ? this.props.users[channelUserId.userId].username : ""}
      </Link>

      {this.displayAdmin(channelUserId.userId)}
      {this.displayPending(channelUserId.userId)}
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