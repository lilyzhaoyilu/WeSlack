import React from 'react';

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
    return (
      <div className="login-form-container">
          Welcome to WeSlack!
        <button value='demo' onClick={this.handleDemo}>DemoLogin</button>
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <br/>
          Please {this.props.formType} or {this.props.navLink}
          

          {this.renderErrors()}
          <div className="login-form">
          <br/>


          <label>Username:
          <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="login-input"/>
          </label>

          <br/>

          <label>Password:
          <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className="login-input"/>
          </label>

          <br/>

          <input className="session-submit" type="submit" value={this.props.formType}   />

          </div>
        </form>
      </div>
    );
  }


  
}

