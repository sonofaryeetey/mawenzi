"use client"
import React, { useEffect, useState } from 'react'
import CustomHero from '../components/CustomHero'
import ServicesComponent from '../components/Services'

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const pageInfo = {
    name: 'Services',
    image: '/services.jpeg',
  }

  return (
    <div className={`services-page ${isVisible ? 'animate-page-in' : ''}`}>
      <CustomHero props={pageInfo}/>
      <ServicesComponent variant="services-page"/>
    </div>
  )
}

export default ServicesPage
