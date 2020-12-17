import React from 'react';
import { Link } from 'react-router-dom';




class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      showSearch: 'search-li-noshow'
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFocuse = this.handleFocuse.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    this.container = React.createRef();
  }


///handle searching
  handleInput(event) {
    this.setState({inputValue: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    this.props.channels.forEach(channel => {
      const sub = channel.name.slice(0, this.state.inputValue.length);
      if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
        matches.push(<button onMouseDown={() => this.props.history.push(`/client/channel/${channel.id}`)}>#{channel.name}</button>);
      }
    });

    this.props.users.forEach(user => {
      const sub = user.username.slice(0, this.state.inputValue.length);
      if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
        let dmUrl = [user.id, this.props.currentUser].sort((a, b) => (a-b)).join('')
        matches.push(<button onMouseDown={() => this.props.history.push(`/client/dm/${dmUrl}`)}>{user.username}</button>);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }
    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputValue: name});
  }
//////

///////////////handle search clicking & hidding/show dropdown

  handleFocuse(event) {
    event.preventDefault();
    if (this.state.showSearch === 'search-li-noshow'){
      this.setState({showSearch:'search-li'})}
  }

  handleClose(event) {
    event.preventDefault();
    if (this.state.showSearch === 'search-li'){
        this.setState({showSearch:'search-li-noshow'})
      }
  }
/////////////////////
componentDidUpdate(prevProps){
  if(prevProps.match.params.channelId){
    if(prevProps.match.params.channelId !== this.props.match.params.channelId) {this.setState({
      inputValue: '',
      showSearch: 'search-li-noshow'
    })}
  }else if(prevProps.match.params.dmId){
    if(prevProps.match.params.dmId !== this.props.match.params.dmId){
      this.setState({
        inputValue: '',
        showSearch: 'search-li-noshow'
      })
    }
  }

}






  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={`search-result-${i}`} onClick={this.selectName}>{result}</li>
      );
    });
    
     
  return (
    
    <div className='search' ref={this.container} onFocus={this.handleFocuse} onBlur={this.handleClose}>
      {console.log(this.state)}
          <input
          className='search-input'
          onChange={this.handleInput}
          value={this.state.inputValue}
          
            placeholder='Search...'/>
            <ul className={this.state.showSearch} >{results}</ul>
   
   
    </div>
    )
    
  }
}


export default Search;