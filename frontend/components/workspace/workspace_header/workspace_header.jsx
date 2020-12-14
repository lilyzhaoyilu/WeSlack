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
    const currentChannel = () => {
      if(this.props.currentChannel){
        return (<div>{this.props.channels[this.props.currentChannelId].name}</div>)
      }else{
        return (<div></div>)
      }
    }
    
   
  return (
    
    <div className="workspace-header">
     
     
      {console.log("wp header",this.props.currentChannelId)}
      {/* {console.log("wp header object", this.props.currentChannel.name)} */}

      {currentChannel()}
      
      
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