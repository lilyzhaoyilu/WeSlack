import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify-icons/logos/redux';
import reactIcon from '@iconify-icons/logos/react';
import javascriptIcon from '@iconify-icons/logos/javascript';
import railsIcon from '@iconify-icons/logos/rails';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import checkCircleOutlined from '@iconify-icons/ant-design/check-circle-outlined';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';



class Splash extends React.Component {
constructor(props){
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }

  handleDemo(e){
    e.preventDefault();
    this.props.processDemo().then(() => this.props.history.push(`/client/`));
  }

  scrollToAnchor (anchorId){
    if (anchorId) {   
        let anchorElement = document.getElementById(anchorId);
        if(anchorElement) {       
			anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
		    }
    }
  }



  render() {
  return (

    <div className="splash">
      
      <div className="splash-header">
        
        <div className="splash-header-left">
        <Link to="/" className="splash-logo" style={{ textDecoration: 'none' }} color='inherit'>
       
            <img src={window.images.logo} ></img>
            
            <h1> WeSlack</h1>
          
        </Link>

        <div className="splash-logo-bro">
        
          <h1> <button onClick={()=>(this.scrollToAnchor("splash-content-two"))}>Features</button></h1>
          <h1><button onClick={()=>(this.scrollToAnchor("splash-content-three"))}>Frameworks</button></h1>
          <h1><button onClick={()=>(this.scrollToAnchor("splash-content-footer"))}>About Me</button></h1>
          
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
          
          <div className="splash-one-framworks">A communication platform</div>
          <div className="splash-one-framworks">where you can send live messages</div>
        </div>

        <div className="splash-one-image">
          <img src={window.images.wfh1}></img>
        </div>

      </div>



      <div className="splash-content-two" id='splash-content-two'>

      <div className="splash-content-two-image">
          <img src={window.images.feature2}></img>
      </div>

      <div className="splash-two-words" >
        <div className="splash-two-features" >Key features</div>
        <br></br>
        <div className="splash-content-two-features">
        
          <li><Icon icon={checkCircleOutlined} color="#611f69" />Real-time messaging</li>
          <li><Icon icon={checkCircleOutlined} color="#611f69" />User authentication</li>
          <li><Icon icon={checkCircleOutlined} color="#611f69" />Join, leave, create public and private channels</li>
          <li><Icon icon={checkCircleOutlined} color="#611f69" />Search channels and users</li>
          <li><Icon icon={checkCircleOutlined} color="#611f69" />See who's in the channel</li>
        </div>
      </div>
      </div>



    <div className="splash-content-three" id='splash-content-three'>
      
      <div className="splash-three-words">
        <div className="splash-three-about">Main Frameworks</div>
        
        <div className="splash-content-three-introduction">
          <li>React<Icon icon={reactIcon} /></li>
          <li>Redux<Icon icon={reduxIcon} /></li>
          <li>JavaScript<Icon icon={javascriptIcon} /></li>
          <li>Ruby on Rails<Icon icon={railsIcon} /></li>
          <li>PostgreSQL<Icon icon={postgresqlIcon} /></li>
        </div>
      </div>

      <div className="splash-content-three-image">
          <img src={window.images.feature}></img>
      </div>
    </div>


    <div className="splash-content-footer" id='splash-content-footer'>
      <div className="splash-content-footer-aboutme">About Me</div>
      <div className="splash-content-footer-icons">
      <a target="_blank" href="https://github.com/lilyzhaoyilu"><Icon icon={githubFilled} /></a>
      <a target="_blank" href="https://www.linkedin.com/in/lilyzhaoyilu/"><Icon icon={linkedinFilled} /></a>
      <a target="_blank" href="http://www.lilylu.me"><i className="far fa-address-card"></i></a>
      
      </div>
    </div>
        

    </div>
    )
    
  }
  
  


}


export default Splash;
