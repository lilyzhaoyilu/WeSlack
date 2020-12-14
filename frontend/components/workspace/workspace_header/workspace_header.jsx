import React from 'react';
import { Link } from 'react-router-dom';


class WorkSpaceHeader extends React.Component {
  constructor(props){
    super(props);
  this.handleLeaveChannel = this.handleLeaveChannel.bind(this);
  }

  // componentDidMount(){
  //   const name 
  // }

  handleLeaveChannel(){
    console.log("ws header", this.props)
    this.props.deleteChannelUser(this.props.currentChannelId, this.props.currentUser);
  }
  
  render() {
    // const currentChannel = this.props.channels[this.props.currentChannelId]
 
   
  return (
    
    <div className="workspace-header">
     {/* <div className="channel-header">
        {this.props.displayname}
      </div> */}
     
      {/* {console.log("workspace header", this.props.displayname.name)} */}
      {/* here are these many people:
      {this.props.amount} */}
      {/* {this.props.channels[this.props.currentChannel].name} */}
      {/* <br></br> */}
      {/* this is the workspace header */}
      
      <div className="workspace-header-left">
        <div className="workspace-header-name">name does not work</div>
        <div className="workspace-header-description"></div>
      </div>
      
      
      <div className="workspace-header-right">
        <div className="workspace-header-profiles"></div>
        <div className="workspace-header-number"># of people in channel{this.props.amount}</div>
        <div><button onClick={this.handleLeaveChannel}>leave channel</button></div>
      </div>
    </div>
    )
    
  }
  
  


}


export default WorkSpaceHeader;