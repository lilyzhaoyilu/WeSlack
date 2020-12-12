import React from 'react';
import { Link } from 'react-router-dom';




class DirectMessage extends React.Component {
  constructor(props){
    super(props);
    

  }
  componentDidMount(){
    this.props.fetchUsers();
  }


  
  render() {
    
    // let copy = Object.assign({}, this.props.users);  
    // delete copy[this.props.currentUser];
    // const usersExcludeCurrent = Object.values(copy);
    // const currentUserName = this.props.users[this.props.currentUser].username
  return (
    <div>
      {/* <li  key={`side-dm-user-currentUser`}>{currentUserName}</li>
    {usersExcludeCurrent.map(user => (<li key={`side-dm-user-${user.id}`}>{user.username}</li>))} */}
    
    <li><Link style={{textDecoration:'none', color:'inherit'}} to={`/client/dm/${this.props.id}`}>{this.props.username}</Link></li>
    </div>
  )
  }
  
  


}


export default DirectMessage;
