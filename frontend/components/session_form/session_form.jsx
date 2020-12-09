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
      <div className="session-form-container">
         <h3> Welcome to WeSlack!</h3>
        
        Try <a href="#" onClick={this.handleDemo}>DemoLogin</a>

        <div className="session-error">{this.renderErrors()}</div>

        <form onSubmit={this.handleSubmit} className="session-form-box">
          
          <br/>
          Please {this.props.formType} or {this.props.navLink}

          <div className="session-form">

          <br/>

          <label>
          <input type="text" placeholder="Username"
          value={this.state.username}
          onChange={this.update('username')}
          className="session-input"/>
          </label>

          <br/>

          <label>
          <input type="password" placeholder="Password"
          value={this.state.password}
          onChange={this.update('password')}
          className="session-input"/>
          </label>

          <br/>

          <input className="session-submit" type="submit" value={this.props.formType}   />
          </div>


        </form>
      </div>
    );
  }


  
}

