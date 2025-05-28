import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardServices = ({props}) => {
    console.log(props)
    return (
        <div className='card'>
            <div className='img-container'>
                <Image
                    src={props.image}
                    width={1000}
                    height={1000}
                    // layout="fixed"
                    // objectFit='cover'
                    alt='card'
                />
            </div>
            <div className="card-text">
                <h2>{props.title}</h2>
                <p className='text-sm'>
                    {props.info}
                </p>
                <Link href={"/Services"}>
                    <button className='text-sm'>
                        Learn More
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default CardServices