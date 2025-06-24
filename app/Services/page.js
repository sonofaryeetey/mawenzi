import React from 'react'
import CustomHero from '../components/CustomHero'
import ServicesComponent from '../components/Services'

const ServicesPage = () => {
  const pageInfo = {
    name: 'Services',
    image: '/services.jpeg',
  }

  return (
    <div>
      <CustomHero props={pageInfo}/>
      <ServicesComponent variant="services-page"/>
    </div>
  )
}

export default ServicesPage
