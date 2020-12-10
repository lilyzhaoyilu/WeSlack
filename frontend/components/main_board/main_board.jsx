

import React from 'react';

import { Link } from 'react-router-dom';

import TopNavBar from '../top_nav_bar/top_nav_bar'



class MainBoard extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  render() {
    const haveCurrentUser = () =>{
      
    }
  return (
    <div>
      <TopNavBar />
      this is the main board
    </div>
  )
  }

}


export default MainBoard;