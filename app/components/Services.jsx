import React from 'react'
import CardServices from './CardServices'
import Image from 'next/image'

const Services = () => {
    const cardinfo = [
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
                    {cardinfo.map((cardinf) => (
                        <CardServices key={cardinf.title} props={cardinf} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services