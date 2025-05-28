import Image from 'next/image'
import React from 'react'

const PromoCard = ({props}) => {
    return (
        <div className='promocard text-center pt-10'>
            
           <div className="icon-outline mb-3">
             <Image
                src={props.icon}
                width={30}
                height={30}
                alt='icon'
                
                
            />
           </div>
            <h2 className='font-Outfit text-gray-600 '>{props.title}
            </h2>
            <Image
            className='pt-8'
                src={props.image}
                width={500}
                height={500}
                alt='icon'
            />
            
            <p className='text-sm text-gray-800 pt-8'>{props.info}</p>
        </div>
    )
}

export default PromoCard