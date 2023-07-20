import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import WorkExperience from './pages/WorkExperience';

const HeroSection =() => {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src='images/bg-1.jpg'/>
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
            I am a master's student in Robotics and Autonomous Engineering from Arizona State University, with an electronics and communication bachelors degree from TKM, college of engineering.
            I am a passionate developer with industrial experience who has genuine interest to expand knowledge in various domain. 
          </p>
        </div>
        <div className="aboutme-info">
          <p>Name: Nivina Christy</p>
          <p>Email: nivinachristy10@gmail.com</p>
          <p>Phone: (213)421-6412</p>
        </div>
        </div>
        <div className="mypic">
          <img src='/images/mypic.jpg'/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;