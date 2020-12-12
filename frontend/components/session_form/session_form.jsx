import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user); 
  }

  handleDemo(e){
    e.preventDefault();
    
    this.props.processDemo(); 
  }
  
  // handleKeypress(e){
  //     //it triggers by pressing the enter key
  //     e.preventDefault();
  //   if (e.keyCode === 13) {
  //     handleSubmit(e);
  //   }
  // };

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    

    const buttonValue = this.props.formType === 'signup' ? 'Sign Up' : 'Log In'

    // const errorMessages = this.renderErrors() ? " " : this.renderErrors()
    return (

      
      <div className="session-form-container">
          
          
        <Link to="/" className="session-logo" style={{ textDecoration: 'none' }}>

          <div className="session-logo-image">
            <img src={window.images.logo} width="50 " height="50"></img>
            <h1> WeSlack</h1>
          </div>
        </Link>



        
        <div className="session-please">Please {this.props.formType} or {this.props.navLink}
        

        <div className="session-error" color='red'>{this.renderErrors()}</div></div>
        
        <div className="session-below-error">
        
        <form onSubmit={this.handleSubmit} className="session-form">
          
          <input type="text" placeholder="Username"
          value={this.state.username}
          onChange={this.update('username')}
          className="session-input"/>
          
          <br/>
          
          <input type="password" placeholder="Password"
          value={this.state.password}
          onChange={this.update('password')}
          className="session-input"/>
         

          <br/>

          <input className="session-submit" type="submit" value={buttonValue}   />
    
        </form>
        <br></br>
        <button className="session-try-demo"   onClick={this.handleDemo}>Demo User</button>
        </div>
      </div>
    );
  }


  
}

