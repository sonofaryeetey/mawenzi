import React from 'react'
import CustomHero from '../components/CustomHero'

const Services
 = () => {

  const pageInfo =
  {
    name: 'Services',
    image: '/services.jpeg',
  }

  
  return (
    <div>
        <CustomHero props={pageInfo}/>
    </div>
  )
}

export default Services
