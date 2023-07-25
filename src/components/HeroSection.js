import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import WorkExperience from './pages/WorkExperience';

function HeroSection () {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src={process.env.PUBLIC_URL + "/images/bg-1.jpg"} />
      {/* <img src='../images/bg-1.jpg'/> */}
      <div className="info">
        <p> I am Nivina Christy.</p>
      </div>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
      <div id="aboutme" className="aboutme-container">
        <div className="aboutme-wrap">
        <div className="aboutme-content">
          <h2>About Me</h2>
          <p>
           As a Robotics and Autonomous Engineering master's student at Arizona State University, I hold a bachelor's degree in Electronics and Communication from TKM College of Engineering. With practical experience in the industry, I am an enthusiastic developer driven by a genuine curiosity to broaden my expertise across diverse domains.
          </p>
        </div>
        <div className="aboutme-info">
          <p>Name: Nivina Christy</p>
          <p>Email: nivinachristy10@gmail.com</p>
          <p>Phone: (213)421-6412</p>
        </div>
        </div>
        <div className="mypic">
          <img src={process.env.PUBLIC_URL + "/images/mypic.jpg"} />
          {/* <img src='/images/mypic.jpg'/> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;