import React from 'react'
import PromoCard from './PromoCard'
import Image from 'next/image'



const promoInfo=[
        {
            title: `Evidence-Based Protocols:`,
            info: ` Mawenzi Health utilizes evidence-based protocols to ensure
                    accurate and effective triage decisions`,
            image: `/evidence.jpg`,
            icon: `/stamp.png`
        },

        {
            title: `EHR Integration: `,
            info: `Seamless integration with Electronic Health Records (EHRs) enhances
                    clinical workflows, improves data management, and streamlines care coordination.
`,
            image: `/health_records.jpg`,
            icon: `/Electronic.png`
        },

        {
            title: `Care Coordination`,
            info: `Our team ensures that patients receive continuous, coordinated care throughout their
                   healthcare journey, reducing fragmentation and improving outcomes.`,
            image: `/care_cordination2.jpg`,
            icon: `/network.png`
     
        },
        {
            title: `Improved Patient Engagement:`,
            info: `  Providing patients with timely and accessible care through
nurse triage can improve patient satisfaction and engagement.`,
            image: `/Patient_engagement.jpg`,
            icon: `/Engagement.png`
        },

        {
            title: `New Opportunities for Financial Growth: `,
            info: ` By reducing unnecessary costs and improving
patient outcomes, Mawenzi Health helps healthcare providers create new opportunities
for financial growth.
`,
            image: `/financial_growth.jpg`,
            icon: `/Opportunity.png`
        },

        {
            title: `Better Health Outcomes:`,
            info: `By ensuring patients receive timely and appropriate care,
Mawenzi Health contributes to better health outcomes for individuals and communities.`,
            image: `/better_health.jpg`,
            icon: `/Better_health.png`
     
        }
    ]

const PromoPoints = () => {
  return (
    <div className="max-width">
        <h2 className="font-Outfit text-gray-600  font-medium text-3xl text-center mt-10 mb-3">WHY CHOOSE <span className='font-extralight'>US</span></h2>
        
                        <Image className='underliner'
                        src={'/underliner.png'}
                        width={100}
                        height={20}
                        alt={'underliner'}
                        />
        <div className='flex justify-center gap-4 flex-wrap'>
                
            {promoInfo.map((prom, index)=>(
                    <PromoCard key={prom.title} props={prom} index={index}/>
            ))}
       
        </div>
    </div>
  )
}

export default PromoPoints