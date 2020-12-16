import React from 'react';
import { Link } from 'react-router-dom';




class DirectMessage extends React.Component {
  constructor(props){
    super(props);
    

  }
  


  
  render() {
    
    const profilePicDisplay = () => {
      if ((this.props.users[this.props.id].image_url) === 'defaultpicture'){
        return <img src={window.images.dprofile}></img>
      }
    }

    const youDisplay = () => {
      if(this.props.id === this.props.currentUser){
        return <div className="side-bar-direct-message-you">you</div>
      }
    }


    const actualLink = [this.props.id, this.props.currentUser].sort((a, b) => (a-b)).join('')
  return (
    
     
    
    <li className={`side-bar-dm-${this.props.id}`}><Link style={{textDecoration:'none', color:'inherit'}} to={`/client/dm/${actualLink}`}>{profilePicDisplay()}{this.props.username}{youDisplay()}</Link></li>
    
  )
  }
  
  


}


export default DirectMessage;
