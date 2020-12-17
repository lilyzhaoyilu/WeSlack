import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


class MessageDetail extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
  const authorProfilePicture = (authorId) => {
      if(this.props.users[authorId]){
      const picture = this.props.users[authorId].image_url
      if (picture === 'defaultpicture'){
        return <img src={window.images.dprofile} width="20px"></img>
      }
       
    }}

  const authorName = (authorId) => {
      if(this.props.users[authorId]){
      return this.props.users[authorId].displayed_name ? this.props.users[authorId].displayed_name : this.props.users[authorId].username
  }}

  const displayCreatedAt = (time) => {
    let display = moment(time);
    return display.format("h:mm a ddd MMM D YYYY");
  }
 
    
  return (
    
    <div className={`message-${this.props.message.id}`}>
     

      <div  className={`message-picture`}> {authorProfilePicture(this.props.message.author_id)}
      </div>

      <div className={`message-name-container`}> 
        <div className={`message-name`}>
          <div>{authorName(this.props.message.author_id)}</div> <span className={`message-time`}>{displayCreatedAt(this.props.message.created_at)}</span>
        </div>
      
        <div className={`message-body`}>{this.props.message.body
        }</div>
    
    </div>
  </div>
  )
  }

}


export default MessageDetail;