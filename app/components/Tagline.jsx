import Image from 'next/image'
import React from 'react'

const Tagline = () => {
    return (
        <div>
            <div className="tagline max-width">
                <h2 className='font-Outfit text-gray-600  font-medium text-2xl text-center mb-10'>{`Empowering Providers, Transforming Care`}</h2>
                <div className="text">
                    <div className='quote-text'>
                        <Image
                        src={'/quote.png'}
                        width={50}
                        height={50}
                        alt='quote'
                    />
                    <p className='avatar font-sm text-white mr-20'>{`Empowering Providers, Transforming Care to improve the health and well-being of underserved communities by expanding access to
                    comprehensive, coordinated care, and empowering healthcare providers with the tools to deliver effective, patient-centered care.`} </p>
                    </div>
                    <Image
                        src={'/quote-img.png'}
                        width={180}
                        height={180}
                        // objectFit='cover'
                        alt='tagline'
                    />
                </div>
            </div>
        </div>
    )
}

export default Tagline