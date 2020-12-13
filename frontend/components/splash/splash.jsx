import React from 'react';
import { Link, Redirect } from 'react-router-dom';




class Splash extends React.Component {
constructor(props){
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
    // this.mark= React.createRef();
    // this.focusMark = this.focusMark.bind(this);
    
  
  }

  handleDemo(e){
    e.preventDefault();
    this.props.processDemo().then(() => this.props.history.push(`/client/`));
  }

  // focusMark(){
  //   this.mark.current.focus();
  // }
  
  render() {
   
  return (
    <div className="splash">
      <div className="splash-header">
        <div className="splash-header-left">
        <Link to="/" className="splash-logo-container" style={{ textDecoration: 'none' }} color='inherit'>
          <div className="splash-logo">
            <img src={window.images.logo} ></img>
            <h1> WeSlack</h1>
          </div>
        </Link>

        <div className="splash-logo-bro">
          <h2>Features</h2>
          {/* <h2> <button onClick={this.focusMark}>Feature</button></h2> */}
          <h2> About Me</h2>
          
        </div>
        </div>

        <div className='splash-header-right'>


        <button onClick={this.handleDemo}>Try Demo</button>
        <Link to='/login'>Launch WeSlack</Link>
       
        </div>
        
      </div>
        
        

      <div className="splash-content-one">
        <div className="splash-one-words">
          <div className="splash-one-weslack">WeSlack</div>
          <br></br>
          <div className="splash-one-clone">A clone of slack, a demo project</div>
          
          <div className="splash-one-framworks">more words here but i do not know what</div>
        </div>

        <div className="splash-one-image">
          <img src={window.images.wfh1}></img>
        </div>

      </div>



      <div className="splash-content-two">

      <div className="splash-content-two-image">
          <img src={window.images.feature2}></img>
      </div>

      <div className="splash-two-words" >
        <div className="splash-two-features" ref={this.mark}>Key features</div>
        <br></br>
        <div className="splash-content-two-features">It uses React, Redux, JavaScript, CSS, HTML, Ruby on Rails, and PostgreSQL
        <br></br>
        how to make this part prettier?
        </div>
      </div>
      </div>



    <div className="splash-content-three">
      
      <div className="splash-three-words">
        <div className="splash-three-about">About The Creator</div>
        <br></br>
        <div className="splash-content-three-introduction">Like the project? Here is my linkedin, github, and how to reach me</div>
      </div>

      <div className="splash-content-three-image">
          <img src={window.images.feature}></img>
      </div>
    </div>
        

    </div>
    )
    
  }
  
  


}


export default Splash;
