import React from 'react';
import { Link } from 'react-router-dom';


class WorkSpaceHeader extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
  
  const channelHeader = () => {
    
    return(
      <div className="channel-header">
        {this.props.displayname}
      </div>
    )

  }

  const dmHeader = () => {

  }
   
  return (
    
    <div>
     {channelHeader}
      
      
    
    </div>
    )
    
  }
  
  


}


export default WorkSpaceHeader;