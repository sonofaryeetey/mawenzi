import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CustomHero = ({props}) => {
    return (
        <div>
            <div className='custom-hero'>

                <Image
                    src={props.image}
                    alt='bg'
                    layout='fill'
                    objectFit='cover'
                />
                <div className="overlay" >
                    <div className="max-width flex items-center h-full w-full ">
                        <div className='overlay-text'>
                            <div className='blur'></div>
                            <p className='text-6xl font-medium'>{props.name}</p>
                            <span className='flex mt-3'><Link href={`/`}><p className='mr-2  font-light primary-col'>Home</p> </Link><span className='mt-0.5 mr-3'>{`>`}</span><span>{props.name}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomHero