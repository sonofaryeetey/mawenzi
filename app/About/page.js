import React from 'react'
import CustomHero from '../components/CustomHero'

const About = () => {

  const pageInfo =
  {
    name: 'About Us',
    image: '/About-us.jpeg',
  }

  return (
    <div>
      <CustomHero props={pageInfo} />

    </div>
  )
}

export default About