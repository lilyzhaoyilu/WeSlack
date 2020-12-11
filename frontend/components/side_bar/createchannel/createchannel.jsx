import React from 'react';
import { Link } from 'react-router-dom';


class CreateChannel extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      channel:{name: "",
      public: true},
      show: "no"
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleNotShow = this.handleNotShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    
  
  }
// show or not show the model
  handleShow(e){
    e.preventDefault();
    if (this.state.show === "no"){
      this.setState({show: "yes"})}
  }

  handleNotShow(e){
    e.preventDefault();
    if (this.state.show === "yes"){
      this.setState({show: "no"})}
  }
     

// the toggle in model
  handleToggle(){
    let channel = {...this.state.channel}
    if(channel.public === false){
      channel.public = true;
    }else{
      channel.public = false;
    }
    this.setState({channel})
  }

// updating state value while inputing
  update(field) {
    return (e => this.setState(({channel: {[field]: e.currentTarget.value}})))
  }

//handle submit form
  handleSubmit(e){
    e.preventDefault();
    const cchannel = Object.assign({}, this.state.channel);
    this.props.processForm(cchannel); 
  }


  
  render() {

  const showform = this.state.show === "yes"? "cchannel-form-show" : "cchannel-form"
  const showformbg = this.state.show === "yes"? "cchannel-form-show-bg" : "cchannel-form-bg"

  
  
  return (
    
  <div>
  
    <button className='cchannel-add-channel' onClick={this.handleShow}>add chanel</button>

    <div className={showformbg}>

    <form onSubmit={this.handleSubmit} className={showform}>
        
      <input type="text" placeholder="Channel name"
      value={this.state.name}
      onChange={this.update('name')}
      className="cchannel-input"/>
      
      <br/>
      
      <label className="cchannel-switch">
      <input type="checkbox" onChange={this.handleToggle}/>
      <span className="cchannel-slider">
      </span>
      </label>
      
      <button className='cchannel-button-close' onClick={this.handleNotShow}>X</button>
      <br/>

      <input className="cchannel-submit" type="submit" value="Create Channel"   />

    </form>
    </div>
  
  </div>
    )
    
  }
  
  


}


export default CreateChannel;