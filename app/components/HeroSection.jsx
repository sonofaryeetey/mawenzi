import React from 'react'
import HeroButton from './HeroButton'

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className="hero-text max-width ">
            <h2 className='font-medium text-white text-4xl  pt-10'><span className='alt-color font-extrabold'>Revolutionizing</span> Healthcare with Coordinated Care and Innovative Solutions for Patients
and Providers.</h2>
            <p className='mt-8 text-white-300'>Empowering Healthcare Providers with Seamless Care Coordination, Advanced
Monitoring, and Comprehensive Patient Support</p> 
            <HeroButton/>
        </div>
    </div>
  )
}

export default HeroSection