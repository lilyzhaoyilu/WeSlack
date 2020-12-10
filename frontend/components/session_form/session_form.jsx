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
    // this.handleKeypress = this.handleKeypress.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.processForm(user); //TODO:?
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

    return (
      <div className="session-form-container">

      <Link to="/" className="header-to-main" style={{ textDecoration: 'none' }}>
        <div className="header-and-name">
          <img src={window.images.logo} width="50 " height="50"></img>
          <h1> WeSlack</h1>
        </div>
        </Link>
        
        <h1 className="session-welcome"> Welcome to WeSlack</h1>
        
        <div className="session-please">Please {this.props.formType} or {this.props.navLink}</div>

        <div className="session-try-demo"> <a href="#" onClick={this.handleDemo}>demo user</a></div>

        <div className="session-error">{this.renderErrors()}</div>

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
      </div>
    );
  }


  
}

