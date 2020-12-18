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
    return ((e) => {
      if (field === "name"){
        let temp = e.currentTarget.value;
        temp = temp.replace(/\s/g ,"-")
        this.setState({name: temp})}
      else{
        this.setState({[field]: e.currentTarget.value})}
    })}

//handle submit form
  handleSubmit(e){
    e.preventDefault();
    const cchannel = Object.assign({}, this.state);
    delete cchannel.show;
    this.handleNotShow(e);
    this.props.processForm(cchannel)
    // .then(window.location.reload())
  }


  
  render() {

  const showform = this.state.show === "yes"? "cchannel-form-show" : "cchannel-form";
  const showformbg = this.state.show === "yes"? "cchannel-form-show-bg" : "cchannel-form-bg";
  const submitButtonStatus = this.state.name === ""? true: false;
  
  
  return (
    
  // <div className="createchannel">
  <div className="side-bar-channels-create">
   
    <button className='cchannel-add-channel' onClick={this.handleShow}>    <img src={window.images.plus} ></img>Add channels</button>
    



    {/* the modal below */}
    <div className={showformbg}> 

    
    <form onSubmit={this.handleSubmit} className={showform}>

      <button className='cchannel-button-close' onClick={this.handleNotShow} >X</button>

      <div className='cchannel-flexpart'>
      <h3 className='cchannel-flexpart1'>Create a channel</h3>
      <div className='cchannel-flexpart2'>Channels are where your team communicates. They're best when organized around a topic.</div>
      
      <div className='cchannel-flexpart3'>
      <label>Name</label>
      <input type="text" placeholder="# e.g. monthly-plan"
      value={this.state.name}
      onChange={this.update('name')}
      className="cchannel-input"/></div>
      
      <div className='cchannel-flexpart4'>
      <label>Description (optional)</label>
      <input type="text" value={this.state.description} onChange={this.update('description')} className="cchannel-input" placeholder="What's this channel about?"></input>
      </div>
      
      <div className='cchannel-flexpart5'>
      <div> Make it private?</div>
      <label className="cchannel-switch">        
        <input type="checkbox" onChange={this.handleToggle}/>
        <span className="cchannel-slider"></span>
      </label>
      </div>

      <div className='cchannel-flexpart6'>
      <input className="cchannel-submit" type="submit" value="Create Channel"  disabled={submitButtonStatus}  /></div>
      

      </div>
    </form>
    </div>
  
  </div>
    )
    
  }
  
  


}


export default CreateChannel;