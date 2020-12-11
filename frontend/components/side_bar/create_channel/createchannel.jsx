import React from 'react';
import { Link } from 'react-router-dom';


class CreateChannel extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      name: "",
      description: "",
      public: true,
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
    let pub = this.state.public;
    if(pub === false){
      pub = true;
    }else{
      pub = false;
    }
    this.setState({public: pub})
  }

// updating state value while inputing
  update(field) {
    return (e => this.setState({[field]: e.currentTarget.value}))
  }

//handle submit form
  handleSubmit(e){
    e.preventDefault();
    const cchannel = Object.assign({}, this.state);
    delete cchannel.show;
    this.props.processForm(cchannel); 
    this.handleNotShow(e);
  }


  
  render() {

  const showform = this.state.show === "yes"? "cchannel-form-show" : "cchannel-form";
  const showformbg = this.state.show === "yes"? "cchannel-form-show-bg" : "cchannel-form-bg";
  const submitButtonStatus = this.state.name === ""? true: false;
  
  
  return (
    
  <div>
    <button className='cchannel-add-channel' onClick={this.handleShow}>add chanel</button>

    <div className={showformbg}>

    <form onSubmit={this.handleSubmit} className={showform}>
      <button className='cchannel-button-close' onClick={this.handleNotShow} >X</button>
      <br/>
        
      <input type="text" placeholder="Channel name"
      value={this.state.name}
      onChange={this.update('name')}
      className="cchannel-input"/>
      
      <br/>
      
      <label className="cchannel-switch">
        Make it private?
      <input type="checkbox" onChange={this.handleToggle}/>
      <span className="cchannel-slider"></span>
      </label>


      <label>
        Description (optional)
      <input type="text" value={this.state.description} onChange={this.update('description')} className="cchannel-input" placeholder="What's this channel about?"></input>
      </label>
      

      <input className="cchannel-submit" type="submit" value="Create Channel"  disabled={submitButtonStatus}  />

    </form>
    </div>
  
  </div>
    )
    
  }
  
  


}


export default CreateChannel;