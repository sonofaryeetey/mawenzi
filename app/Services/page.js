import React from 'react'
import PatientCenteredFocusHero from '../components/PatientCenteredFocusHero'
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
      <PatientCenteredFocusHero/>
    </div>
  )
}

export default ServicesPage
