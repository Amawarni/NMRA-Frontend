import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
       <h1>NMRA APPROVED PRODUCTS</h1>
      <p>What are you waiting for?</p>
      
      <p>GET STARTED</p>
      
        
      
    </div>
  );
}

export default HeroSection;
