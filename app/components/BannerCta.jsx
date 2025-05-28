import Link from 'next/link'
import React from 'react'

const BannerCta = () => {
  return (
    <div className='banner-cta'>
        <div className="max-width banner-text">
            <p>Our solutions are
designed to assist healthcare providers in delivering high-quality care </p>
        <button><Link href={'/Contact'}>Find out more</Link></button>
        </div>
    </div>
  )
}

export default BannerCta