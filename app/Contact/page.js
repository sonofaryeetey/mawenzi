import React from 'react'
import CustomHero from '../components/CustomHero'

const Contact = () => {
   const pageInfo =
  {
    name: 'Contact Us',
    image: '/Contact-us.jpeg',
  }

  return (
    <div><CustomHero props={pageInfo}/></div>
  )
}

export default Contact