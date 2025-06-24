"use client"
import React, { useEffect, useState } from 'react'
import HeroButton from './HeroButton'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='hero'>
      <div className="bg-shape"></div>
        <div className="hero-text max-width">
            <h2 className={`font-medium text-white text-4xl pt-10 hero-title ${isVisible ? 'animate-slide-in' : ''}`}>
              <span className='alt-color font-extrabold hero-highlight'>Revolutionizing</span> Healthcare with Coordinated Care and Innovative Solutions for Patients and Providers.
            </h2>
            <p className={`mt-8 text-white-300 hero-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Empowering Healthcare Providers with Seamless Care Coordination, Advanced Monitoring, and Comprehensive Patient Support
            </p> 
            <div className={`hero-button-container ${isVisible ? 'animate-bounce-in' : ''}`}>
              <HeroButton/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection