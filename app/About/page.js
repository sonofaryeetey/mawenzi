import React from 'react'
import CustomHero from '../components/CustomHero'
import PromoPoints from '../components/PromoPoints'
import BannerCta from '../components/BannerCta'
import AboutShowcase from '../components/AboutShowcase'
import Image from 'next/image'

const About = () => {
  const pageInfo = {
    name: 'About Us',
    image: '/About-us.jpeg',
  }

  return (
    <div>
      {/* Hero Section */}
      <CustomHero props={pageInfo} />

      {/* Our Story Section */}
      <section className="max-width py-16 flex flex-col items-center bg-white rounded-2xl shadow-md mt-[-60px] relative z-10">
        <h2 className="font-Outfit text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-800">Our Story</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mb-4">
          Founded in 2023, Mawenzi Health is dedicated to transforming healthcare delivery by providing comprehensive nurse triage, patient scheduling, and care coordination services for healthcare providers. We work closely with private clinics, federally qualified health centers (FQHCs), rural health clinics, and health systems to improve patient access, streamline operations, and enhance health outcomes.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-3xl mb-4">
          Our mission is to support health centers in reducing utilization, improving patient outcomes, and optimizing quality metrics—leading to a lower total cost of care through expert care management solutions. We bridge the gap between providers and patients, ensuring timely access to care, reduced emergency room utilization, and better chronic disease management.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-3xl">
          At the core of our approach is a commitment to health equity, integrating social determinants of health (SDOH) into patient care. We partner with clinics, hospitals, and healthcare organizations that share our vision for sustainable, high-quality patient care.
        </p>
      </section>

      {/* About Showcase Section (replaces Tagline) */}
      <section className="py-16">
        <AboutShowcase />
      </section>

      {/* Vision, Mission, Culture Section */}
      <section className="max-width grid md:grid-cols-3 gap-10 py-16">
        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 text-center">
          <Image src={'/vision.jpeg'} width={220} height={180} alt="Vision" className="rounded-xl mb-6 object-cover" />
          <h3 className="font-Outfit text-2xl font-bold mb-3 text-blue-700">Our Vision</h3>
          <p className="text-gray-500">To redefine the future of healthcare by delivering innovative solutions that enhance access and improve outcomes for underserved populations.</p>
        </div>
        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 text-center">
          <Image src={'/mission.jpeg'} width={220} height={180} alt="Mission" className="rounded-xl mb-6 object-cover" />
          <h3 className="font-Outfit text-2xl font-bold mb-3 text-purple-700">Our Mission</h3>
          <p className="text-gray-500">To empower healthcare providers and organizations to deliver high-quality, patient-centered care through technology, compassion, and collaboration.</p>
        </div>
        {/* Culture */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 text-center">
          <Image src={'/culture.jpeg'} width={220} height={180} alt="Culture" className="rounded-xl mb-6 object-cover" />
          <h3 className="font-Outfit text-2xl font-bold mb-3 text-teal-700">Our Culture</h3>
          <p className="text-gray-500">We foster a culture of innovation, inclusivity, and continuous improvement, ensuring our team and partners are equipped to meet the evolving needs of healthcare.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#F0F4F8]">
        <PromoPoints />
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <BannerCta />
      </section>
    </div>
  )
}

export default About