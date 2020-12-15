import React from 'react';
import { Link, Redirect } from 'react-router-dom';




class Channel extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    

    
    this.props.updateCurrentChannel(this.props.id);
    this.props.fetchCMessages(this.props.id).then(() => this.props.history.push(`/client/channel/${this.props.id}`));

  }
  
  render() {
    const imageDisplay = () => {
      let id = this.props.id;
      let res = this.props.channels[id].public;
      if (res === true){
        return  <img src={window.images.jinghao}></img>
      }else{
        return <img src={window.images.lock}  ></img>
      }
    }
   

  return (
    <div className="side-bar-channel">
      
      
    
    
    <button style={{textDecoration:'none', color:'inherit'}}  onClick={this.handleClick}>{imageDisplay()}{this.props.name}</button>
    {/* <Link className="side-bar-channel" to={`/client/channel/${this.props.id}`}>{imageDisplay()}{this.props.name}</Link> */}
    
    </div>
    
  )
  }
  
  


}


export default Channel;
