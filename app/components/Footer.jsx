import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="max-width">
            <div className="footer">
                <div className='quick-links flex justify-evenly'>
                    <div className='quick-logo'>
                        <Image
                            src={'/mawenzi_logo.png'}
                            width={100}
                            height={100}
                            alt='logo'
                        />
                        <p className='text-white font-Outfit mt-5'>Empowering Providers, <br></br>Transforming Care</p>
                    </div>
                    <div className='flex flex-col justify-evenly'>
                        <h2>Quick Links</h2>
                        <Link href={'/'}>
                            Home                            
                        </Link>
                        <Link href={'/'}>
                            About Us                            
                        </Link>
                        <Link href={'/'}>
                            Services                           
                        </Link>
                        <Link href={'/'}>
                            Contact Us                           
                        </Link>
                        <Link href={'/'}>
                            Privacy Policy                           
                        </Link>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p>Mawenzi Health</p>
                        <p>3 Columbus Circle, 15th Floor,</p>
                        <p>New York, NY 10019</p>
                        <p>Support@mawenzihealth.com </p>
                        <p>3472613722</p>
                    </div>
                    <div>
                        <h2>
                            Connect with Us
                        </h2>
                        <div className='flex gap-3'>
                            <Link href={'https://www.facebook.com'}>
                            <Image
                                src={'/facebook.png'}
                                width={25}
                                height={25}
                                alt="facebook"
                            />
                        </Link>
                        <Link href={'#'}>
                            <Image
                                src={'/Instagram.png'}
                                width={25}
                                height={25}
                                alt="instragram"
                            />
                        </Link>
                        <Link href={'/'}>
                            <Image
                                src={'/X.png'}
                                width={25}
                                height={25}
                                alt="X"
                            />
                        </Link>
                        <Link href={'/'}>
                            <Image
                                src={'/Whatsapp.png'}
                                width={25}
                                height={25}
                                alt="whatsapp"
                            />
                        </Link>
                        <Link href={'/'}>
                            <Image
                                src={'/facebook.png'}
                                width={25}
                                height={25}
                                alt="facebook"
                            />
                        </Link>
                        </div>
                    </div>
                </div>
            <div className='copyright'></div>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer