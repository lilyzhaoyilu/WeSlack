

import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TopBar from '../top_bar/top_bar_container';
import SideBar from '../side_bar/side_bar_container';
import WorkSpace from '../workspace/workspace_container'



class MainBoard extends React.Component {
  constructor(props){
    super(props);
  
  }

  componentDidMount(){
    {this.props.fetchUsers()}
    {this.props.fetchChannels(this.props.currentUser)}
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentUser !== this.props.currentUser){
      {this.props.fetchUsers()}
      {this.props.fetchChannels(this.props.currentUser)}
    }
  }
  
  render() {
    
   
  return (
    <div className='main-board'>
      
      

      {/* <div className="main-top-nav"><TopBar /></div> */}
      <TopBar />
      

      <div className="main-not-top-nav">
        
        <div className="main-side-nav"><SideBar />
        </div>

        <div className="main-workspace">
          <Route exact path="/client/channel/:channelId" component={WorkSpace}/>
          <Route exact path="/client/dm/:dmId" component={WorkSpace}/>
        </div>

      </div>
     
    </div>
  )
  }

}


export default MainBoard;