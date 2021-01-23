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
    this.handleClearSessionErrors = this.handleClearSessionErrors.bind(this);
    
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

  // componentDidUpdate(prevProps){
    
  //   this.props.clearSessionErrors();
  // }
   
  handleClearSessionErrors(){
    console.log("fire")
    this.props.clearSessionErrors();
  }
 


  render() {
    

    const buttonValue = this.props.formType === 'signup' ? 'Sign Up' : 'Log In'

    
    return (

      
    <div className="session-form-container">
          


      <Link to="/" style={{ textDecoration: 'none' }} color='inherit'>
      <div className="session-logo">
        <img src={window.images.logo} width="50 " height="50"></img>
        <h1> WeSlack</h1>
      </div>
      </Link>



      <div className="session-words">
        <h2>Let's get started</h2>
        <br/>
        <h3>Please {this.props.formType} or <button className="session-switch" onClick={this.handleClearSessionErrors}>{this.props.navLink}</button></h3>
      </div>


      <div className="session-below-words">
        <form onSubmit={this.handleSubmit} className="session-form">
          <input type="text" placeholder="Username"
            value={this.state.username}
            onChange={this.update('username')}
            className="session-input"/>

          <input type="password" placeholder="Password"
          value={this.state.password}
          onChange={this.update('password')}
          className="session-input"/>
          
          <input className="session-submit" type="submit" value={buttonValue} />
        </form>

          <button className="session-try-demo" onClick={this.handleDemo}>Demo User</button>

          <div className="session-error" color='red'>{this.renderErrors()}</div>
      </div>
        
    </div>
    );
  }


  
}

