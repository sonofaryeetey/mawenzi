import React from 'react';
import Image from 'next/image';

const focusCards = [
  {
    title: 'Enhanced Care for Underserved Populations',
    icon: '/icons/integrated-care.svg',
    desc: `Mawenzi Health is particularly focused on serving underserved communities, including rural and low-income populations. By providing access to care when it's needed most, our services reduce health disparities and ensure that vulnerable populations receive the support they need to manage their health effectively. Through nurse triage, chronic care management, and remote patient monitoring, we bridge the gap between patients and healthcare providers, improving access to care in remote or under-resourced areas.`
  },
  {
    title: 'Better Health Outcomes for Patients',
    icon: '/icons/holistic-health.svg',
    desc: `With a focus on proactive care management and early intervention, Mawenzi Health ensures that patients receive the right care at the right time. By preventing disease progression, reducing hospital readmissions, and addressing chronic conditions before they worsen, we contribute to better long-term health outcomes. Timely care and consistent follow-up also increase patient satisfaction and engagement, leading to improved overall health and quality of life for patients.`
  },
  {
    title: 'Improved Patient Engagement',
    icon: '/icons/health-monitoring.svg',
    desc: `Providing patients with easy access to care through nurse triage, chronic care management and remote monitoring fosters increased patient engagement. By involving patients in their care and giving them the tools to manage their health from home, we empower them to take an active role in their well-being. This leads to improved compliance with treatment plans, better understanding of health conditions, and a higher likelihood of positive health outcomes.`
  },
  {
    title: 'Evidence-Based Protocols for Effective Care',
    icon: '/icons/preventive-health.svg',
    desc: `At Mawenzi Health, we utilize evidence-based protocols to guide our care delivery, ensuring that every decision made in patient care is backed by the latest clinical research and best practices. This allows for accurate triage decisions and effective interventions, ensuring that patients receive the most appropriate care for their conditions, leading to better outcomes and patient satisfaction.`
  },
  {
    title: 'Timely, Accessible Care',
    icon: '/icons/telemedicine.svg',
    desc: `Our nurse triage services provide patients with quick, accessible support for their healthcare concerns, reducing wait times and ensuring timely responses. This immediate access to care helps reduce anxiety for patients and ensures they receive the appropriate level of care, whether that's self-care advice, an appointment, or referral to urgent care.`
  },
];

function highlightFirstWord(title) {
  const [first, ...rest] = title.split(' ');
  return (
    <>
      <span className="text-[#2563EB] font-bold">{first}</span>{' '}{rest.join(' ')}
    </>
  );
}

const PatientCenteredFocusHero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center rounded-3xl py-12 px-4 md:px-12 my-12 shadow-md gap-10 md:gap-16">
      {/* Hero Row: Text and Image Side by Side */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {/* Text Side */}
        <div className="max-w-xl w-full flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-4 py-1 mb-4">Revolutionary!</span>
          <h2 className="font-Outfit text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Patient-Centered Focus
          </h2>
          <p className="text-gray-600 text-lg">
            At Mawenzi Health, we believe that high-quality healthcare begins with a patient-centered approach. Our services are designed to directly benefit patients, especially those in underserved populations, ensuring that they receive timely, coordinated, and effective care.
          </p>
        </div>
        {/* Image Side */}
        <div className="flex items-center justify-center relative min-w-[320px]">
          <div className="relative w-[320px] h-[340px] md:w-[360px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/doctorsmall.png"
              alt="Doctor"
              fill
              style={{objectFit: 'cover'}}
              className="rounded-3xl"
            />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md px-6 py-4 flex flex-col items-start w-[85%] border border-gray-100">
              <span className="text-sm font-semibold text-gray-700 mb-1">Checkup progress</span>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#3B82F6"/><path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                22 August, 2024
              </div>
            </div>
          </div>
          {/* Decorative border shape */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-200 rounded-tl-3xl z-0 hidden md:block" />
        </div>
      </div>
      {/* Cards Grid Underneath */}
      <div className="w-full mt-16">
        <div className="service-card-grid">
          {focusCards.map(card => (
            <div className="service-card flex flex-col items-center" key={card.title}>
              <div className="service-card-icon mb-3">
                <Image src={card.icon} alt={card.title + ' icon'} width={48} height={48} />
              </div>
              <div className="service-card-title">{highlightFirstWord(card.title)}</div>
              <div className="service-card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientCenteredFocusHero; 