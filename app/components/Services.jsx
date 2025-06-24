'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import CardServices from './CardServices'

// Original homepage services data (old design)
const homepageCardinfo = [
  {
    title: `Comprehensive Nurse Triage`,
    info: `Skilled nurses assess patient needs, prioritize care, and provide timely advice to ensure the
            right level of care, reducing unnecessary ER visits and ensuring continuity of care.`,
    image: `/card_nurses.png`
  },
  {
    title: `Patient Scheduling`,
    info: `We handle appointment scheduling, reminders, and follow-ups, ensuring seamless patient
            access and optimizing provider resources.`,
    image: `/patient_scheduling.png`
  },
  {
    title: `Care Coordination`,
    info: `Our team ensures that patients receive continuous, coordinated care throughout their
healthcare journey, reducing fragmentation and improving outcomes.`,
    image: `/care_cordination.jpg`
  }
]

// New services page data (previous design)
const serviceCards = [
  {
    title: 'Comprehensive Nurse Triage',
    desc: '24/7 nurse support for patient assessment, quick response, and expert advice—improving satisfaction and reducing unnecessary ER visits.',
    icon: '/nurse.svg',
    iconAlt: 'Nurse Triage Icon',
    details: {
      overview: 'Our skilled nurses are available around the clock to assess patient needs, prioritize care, and provide expert advice. Whether during regular hours or after-hours, our nurse triage services ensure that patients get timely, accurate guidance for their healthcare concerns.',
      features: [
        'Daytime & After-Hours Support: Whether it\'s daytime or late at night, our nurses are available to address patient concerns, triage cases, and direct patients to the right level of care.',
        'Quick Response Times: Our nurses respond promptly to inquiries, helping patients avoid long wait times while ensuring healthcare professionals can make informed decisions.',
        'Improved Patient Satisfaction: With timely and professional responses, patients feel heard and supported, leading to improved patient satisfaction and reduced frustration.',
        'Reduced ER Visits: By providing expert advice and directing patients to appropriate care pathways, we help reduce unnecessary emergency room visits and hospitalizations.',
        'Continuity of Care: We maintain a consistent, high level of care across every patient interaction, ensuring no disruption to the treatment process.'
      ]
    }
  },
  {
    title: 'Patient Scheduling',
    desc: 'Seamless appointment scheduling, reminders, and follow-ups to optimize provider resources and enhance patient access.',
    icon: '/calendar.svg',
    iconAlt: 'Patient Scheduling Icon',
    details: {
      overview: 'Our patient scheduling service ensures seamless appointment management and access to care, optimizing provider resources and enhancing the patient experience.',
      features: [
        'Efficient Appointment Scheduling: We streamline the process of scheduling appointments, ensuring that patients are seen at convenient times, while reducing wait times and maximizing provider availability.',
        'Automated Reminders & Follow-ups: Patients receive timely reminders about upcoming appointments, reducing the number of no-shows and last-minute cancellations.',
        'Optimized Provider Resources: By efficiently managing appointment scheduling and follow-ups, we help healthcare providers optimize their resources, ensuring they can focus on delivering high-quality care.'
      ]
    }
  },
  {
    title: 'Care Coordination',
    desc: 'Continuous, integrated care management—connecting providers, specialists, and patients for better outcomes and less fragmentation.',
    icon: '/coordination.svg',
    iconAlt: 'Care Coordination Icon',
    details: {
      overview: 'Our care coordination service ensures that patients receive seamless, continuous care throughout their healthcare journey. We work closely with providers, specialists, and patients to reduce gaps in care and improve patient outcomes.',
      features: [
        'Integrated Communication: We facilitate communication between healthcare providers, specialists, and patients to ensure all aspects of care are connected and managed.',
        'Chronic Disease Management: Our care coordinators monitor patients with chronic conditions, ensuring they receive the right care, education, and interventions at every stage.',
        'Patient Advocacy: We advocate for patients, ensuring they understand their treatment plans, medications, and follow-up requirements, resulting in better patient compliance.',
        'Reduced Fragmentation: By managing transitions of care, from hospital discharge to follow-up visits, we reduce fragmentation in care, ensuring a cohesive healthcare experience.'
      ]
    }
  },
  {
    title: 'Remote Patient Monitoring (RPM)',
    desc: 'Real-time remote monitoring for chronic conditions, enabling early intervention and empowering patients to manage their health.',
    icon: '/monitoring.svg',
    iconAlt: 'Remote Patient Monitoring Icon',
    details: {
      overview: 'Mawenzi Health leverages cutting-edge technology to remotely monitor patients with chronic conditions, offering real-time tracking and intervention.',
      features: [
        'Continuous Monitoring: We track key health metrics such as blood pressure, glucose levels, weight, and more, providing patients with continuous monitoring from the comfort of their homes.',
        'Early Intervention: Our RPM system flags any concerning changes in health data, allowing healthcare providers to intervene early and adjust care plans before conditions worsen.',
        'Better Chronic Disease Management: RPM enables healthcare teams to proactively manage chronic conditions, improving long-term health outcomes and reducing the need for emergency interventions.',
        'Patient Empowerment: Patients have greater control over their health as they can monitor their conditions and receive immediate guidance or interventions when needed.'
      ]
    }
  },
  {
    title: 'Chronic Care Management (CCM)',
    desc: 'Ongoing support and personalized care plans for chronic conditions, improving outcomes and preventing complications.',
    icon: '/chronic.svg',
    iconAlt: 'Chronic Care Management Icon',
    details: {
      overview: 'Our Chronic Care Management services are designed to provide ongoing support for patients with long-term health conditions. We focus on delivering comprehensive care, improving health outcomes, and preventing complications.',
      features: [
        'Regular Check-ins: Our care teams conduct regular check-ins with patients to assess their health status, provide support, and address any challenges they may be facing in managing their conditions.',
        'Personalized Care Plans: We create individualized care plans tailored to each patient\'s specific needs, helping them manage their conditions effectively and stay on track with their treatment goals.',
        'Multidisciplinary Approach: We coordinate care between primary care providers, specialists, and other healthcare professionals, ensuring patients receive the best possible support from all sides.',
        'Health Education & Support: We empower patients with the knowledge they need to manage their conditions and make informed health decisions, improving compliance and reducing the risk of complications.',
        'Improved Health Outcomes: By closely managing chronic conditions and providing tailored interventions, we help reduce hospitalizations, prevent disease progression, and enhance the quality of life for patients.'
      ]
    }
  },
]

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-icon">
            <Image src={service.icon} width={32} height={32} alt={service.iconAlt} />
          </div>
          <h2 className="modal-title">{service.title}</h2>
        </div>
        
        <div className="modal-body">
          <p>{service.details.overview}</p>
          
          <h3>Key Features:</h3>
          <ul>
            {service.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Original homepage services component (old design)
const HomeServices = () => {
  return (
    <section className='max-width'>
      <div className='services'>
        <h2 className="font-Outfit text-gray-600  font-medium text-3xl text-center">WHAT WE <span className='font-extralight'>DO</span></h2>

        <Image className='underliner'
        src={'/underliner.png'}
        width={100}
        height={20}
        alt={'underliner'}
        />
        <p className='para' >{`At Mawenzi Health, we provide comprehensive healthcare support services designed to improve
patient outcomes, streamline operations, and reduce healthcare costs. Our solutions include:`}</p>
        <div className="card-container">
          {homepageCardinfo.map((cardinf, index) => (
            <CardServices key={cardinf.title} props={cardinf} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

// New services page component (previous design)
const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [animatedSections, setAnimatedSections] = useState({
    header: false,
    services: false,
    info: false,
    benefits: false
  });

  useEffect(() => {
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.section;
            if (sectionId) {
              setAnimatedSections(prev => ({
                ...prev,
                [sectionId]: true
              }));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleCardClick = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section className="max-width">
      <div className={`services services-section ${animatedSections.header ? 'animate-header-in' : ''}`} data-section="header">
        <h2 className={`font-Outfit text-gray-600 font-medium text-3xl text-center services-title ${animatedSections.header ? 'animate-title-in' : ''}`}>
          WHAT WE <span className="font-extralight">DO</span>
        </h2>
        <Image className={`underliner services-underline ${animatedSections.header ? 'animate-underline-in' : ''}`} src={'/underliner.png'} width={100} height={20} alt={'underliner'} />
        <p className={`para services-description ${animatedSections.header ? 'animate-description-in' : ''}`}>
          At Mawenzi Health, we provide a suite of comprehensive healthcare support services tailored to improve patient outcomes, streamline operations, and reduce healthcare costs. Our solutions are designed to assist healthcare providers in delivering high-quality care while ensuring patients receive the attention and support they need.
        </p>
        <div className={`service-card-grid services-grid ${animatedSections.services ? 'animate-grid-in' : ''}`} data-section="services">
          {serviceCards.map((card, index) => (
            <div 
              className={`service-card service-card-animated ${animatedSections.services ? `animate-service-card-${index}` : ''}`}
              key={card.title}
              onClick={() => handleCardClick(card)}
            >
              <div className="service-card-icon">
                <Image src={card.icon} width={36} height={36} alt={card.iconAlt} />
              </div>
              <div className="service-card-title">{card.title}</div>
              <div className="service-card-desc">{card.desc}</div>
              <button className="read-more">See More</button>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        service={selectedService} 
      />
      <section className={`service-info-section info-section ${animatedSections.info ? 'animate-info-in' : ''}`} data-section="info">
        <div className="service-info-grid">
          <div className="service-info-img">
            <Image src="/mawenzi_trust.jpg" width={600} height={420} alt="Why Choose Mawenzi Health" style={{borderRadius: '30px'}} />
          </div>
          <div className="service-info-content">
            <div className="service-info-label">Why Choose Mawenzi Health?</div>
            <h2 className="service-info-title">Why Choose Mawenzi Health?</h2>
            <p className="service-info-desc">
              At Mawenzi Health, we are committed to supporting healthcare providers—clinics, hospitals, and health centers, including Federally Qualified Health Centers (FQHCs) and Rural Health Clinics—by delivering tailored healthcare solutions that improve clinical outcomes, streamline operations, and reduce costs. Our services are designed to help providers offer high-quality care while addressing the unique challenges faced by underserved populations. Here's why you should choose Mawenzi Health:
            </p>
            {/* <button className="service-info-btn">More About us</button> */}
          </div>
        </div>
      </section>
      {/* Benefits for Healthcare Providers Section (Discover Grid Style) */}
      <section className={`discover-services-section benefits-section ${animatedSections.benefits ? 'animate-benefits-in' : ''}`} data-section="benefits">
        <h2 className="discover-services-title">Benefits for Healthcare Providers</h2>
        <div className="discover-section-img">
          <Image src="/happy_labtec.jpg" width={600} height={220} alt="Benefits for Healthcare Providers" style={{borderRadius: '18px', margin: '0 auto'}} />
        </div>
        <p className="discover-services-subtitle">
          Explore the key advantages Mawenzi Health brings to your organization and care teams.
        </p>
        <div className="discover-grid">
          <div className="discover-card discover-card--highlight">
            <div className="discover-card__icon">
              <Image src="/icons/health-monitoring.svg" width={24} height={24} alt="Cost Savings Icon" />
            </div>
            <h3 className="discover-card__title">Cost Savings and Financial Growth</h3>
            <p className="discover-card__desc">By reducing unnecessary emergency room visits, hospitalizations, and care fragmentation, Mawenzi Health helps healthcare providers lower operational costs. Our services are designed to prevent costly interventions and ensure that patients receive the right care at the right time, preventing the escalation of medical issues. Additionally, our services create new financial opportunities by increasing patient volume, improving billing accuracy, and optimizing resource utilization.</p>
          </div>
          <div className="discover-card">
            <div className="discover-card__icon">
              <Image src="/icons/integrated-care.svg" width={24} height={24} alt="Clinical Outcomes Icon" />
            </div>
            <h3 className="discover-card__title">Improved Clinical Outcomes</h3>
            <p className="discover-card__desc">Mawenzi Health's services are rooted in evidence-based protocols, which allow healthcare providers to make informed decisions and deliver timely, appropriate care. By coordinating care and improving communication between care teams, our solutions drive improved clinical outcomes, particularly for patients with chronic conditions. The proactive management of patient health ensures better disease control, reduced readmission rates, and overall improvements in health quality.</p>
          </div>
          <div className="discover-card">
            <div className="discover-card__icon">
              <Image src="/icons/holistic-health.svg" width={24} height={24} alt="Efficient Workflows Icon" />
            </div>
            <h3 className="discover-card__title">Efficient Patient Care and Enhanced Workflows</h3>
            <p className="discover-card__desc">We streamline key healthcare processes, including nurse triage, patient scheduling, and care coordination, ensuring that your team can focus on providing quality care without unnecessary administrative burdens. With our efficient workflows, providers can optimize their time and resources, reducing bottlenecks and improving overall operational efficiency. Mawenzi Health integrates seamlessly with your existing systems, ensuring a smooth transition and enhancing your team's ability to deliver care.</p>
          </div>
          <div className="discover-card">
            <div className="discover-card__icon">
              <Image src="/icons/recovery-center.svg" width={24} height={24} alt="EHR Integration Icon" />
            </div>
            <h3 className="discover-card__title">EHR Integration for Seamless Data Management</h3>
            <p className="discover-card__desc">Mawenzi Health integrates seamlessly with your Electronic Health Records (EHR) systems, enhancing clinical workflows and improving data management. By allowing for real-time access to patient information, our integration ensures that healthcare providers have the most accurate and up-to-date data available. This leads to more informed decision-making, reduces duplication of efforts, and ensures consistent and efficient care coordination across all levels of the healthcare team.</p>
          </div>
          <div className="discover-card">
            <div className="discover-card__icon">
              <Image src="/icons/telemedicine.svg" width={24} height={24} alt="Revenue Opportunities Icon" />
            </div>
            <h3 className="discover-card__title">New Revenue Opportunities</h3>
            <p className="discover-card__desc">Our solutions empower healthcare providers to expand services while reducing overhead costs, leading to new revenue opportunities. By optimizing patient scheduling, reducing missed appointments, and streamlining care coordination, healthcare providers can see more patients and improve their financial performance. Furthermore, by improving patient satisfaction and engagement, providers may experience higher retention and growth.</p>
          </div>
        </div>
      </section>
    </section>
  )
}

// Main component that determines which version to show
const ServicesComponent = ({ variant = 'homepage' }) => {
  if (variant === 'services-page') {
    return <Services />
  }
  return <HomeServices />
}

export default ServicesComponent