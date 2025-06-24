import React from 'react'
import CustomHero from '../components/CustomHero'
import Image from 'next/image'

const About = () => {

  const pageInfo =
  {
    name: 'About Us',
    image: '/About-us.jpeg',
  }

  return (
    <div>
      <CustomHero props={pageInfo} />

      <div className=' about-us max-width '>
        <h2 className='text-center font-medium mb-10 '>Our Story</h2>
        <p className=''>{`Founded in 2023, Mawenzi Health is dedicated to transforming healthcare delivery by
            providing comprehensive nurse triage, patient scheduling, and care coordination
            services for healthcare providers. We work closely with private clinics, federally
            qualified health centers (FQHCs), rural health clinics, and health systems to improve
            patient access, streamline operations, and enhance health outcomes.
            Our mission is to support health centers in reducing utilization, improving patient
            outcomes, and optimizing quality metrics—leading to a lower total cost of care
            through expert care management solutions. We bridge the gap between providers and
            patients, ensuring timely access to care, reduced emergency room utilization, and
            better chronic disease management`}
        </p>
        <p className='mt-5'>{`At the core of our approach is a commitment to health equity, integrating social
            determinants of health (SDOH) into patient care. We partner with clinics, hospitals,
            and healthcare organizations that share our vision for sustainable, high-quality patient
            care.`}
        </p>
      </div>

      <div className='max-width'>
        <div className='card-about flex'>
          <div className='card-content '>
            <h2 className='text-2xl font-medium mb-3 font-Outfit'>Our Vision</h2>
            <p className='text-gray-400'>{`To redefine the future of healthcare by delivering innovative solutions that enhance access and
            improve outcomes for underserved populations.` }
            </p>
          </div>
          <div>
            <Image
              src={'/vision.jpeg'}
              width={500}
              height={500}
              alt="vision"
            />
          </div>
        </div>

        <div className={`card-about mat flex flex-row-reverse`}>
          <div className='card-content '>
            <h2 className='text-2xl font-medium mb-3 font-Outfit'>Our Mission</h2>
            <p className='text-gray-400'>{`To redefine the future of healthcare by delivering innovative solutions that enhance access and
            improve outcomes for underserved populations.` }
            </p>
          </div>
          <div>
            <Image
              src={'/mission.jpeg'}
              width={500}
              height={500}
              alt="Mission"
            />
          </div>
        </div>

        <div className={`card-about mat flex `}>
          <div className='card-content '>
            <h2 className='text-2xl font-medium mb-3 font-Outfit'>Our Mission</h2>
            <p className='text-gray-400'>{`To redefine the future of healthcare by delivering innovative solutions that enhance access and
            improve outcomes for underserved populations.` }
            </p>
          </div>
          <div>
            <Image
              src={'/culture.jpeg'}
              width={500}
              height={400}
              alt="Mission"
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default About