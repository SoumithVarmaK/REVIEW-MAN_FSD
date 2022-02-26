import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>NATHAN DARKE'S ADVENTURE</h1>
      <p>A Decently seized tresure</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CHECK REVIEWS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
      
          WATCH TRAILER <i className='far fa-play-circle' />   
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;