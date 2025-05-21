"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
    const NavLinks = [
        { name: "Home", link: "/", label: "Home" },
        { name: "About", link: "/About", label: "About" },
        { name: "Services", link: "/Services", label: "Services" },
        { name: "Contact", link: "/Contact", label: "Contact" }

    ]
    const pathname = usePathname()
    const[state, setState]=useState(false)
    const ToggleMenu= ()=>setState(!state)

    return (

        <nav>
            <Link href="/">
                <Image
                src={"/mawenzi_logo.png"}
                width={100}
                height={100}
                alt='logo'

                />
            </Link>
            <div className={`hamburger_menu  ${state?"remove":""}`} onClick={ToggleMenu}>
                <Image
                src={"/hamburger_menu.png"}
                width={40}
                height={40}
                alt='menu'

                />
            </div>
            <div className={`hamburger_menu ${!state?'remove':""}`} onClick={ToggleMenu} >
                <Image
                src={"/close.png"}
                width={50}
                height={20}
                alt='close'

                />
            </div>


            <ul className='navlinks'>
                {NavLinks.map((nav) => (
                    <li key={nav.label} className={pathname==nav.link?"active": ""} >
                        <Link href={nav.link} >
                            {nav.name}
                        </Link>
                    </li>                
            ))}                
            </ul>
            <ul className={`navlinks_mob ${!state?"remove":""}`}>
                {NavLinks.map((nav) => (
                    <li key={nav.label} className={pathname==nav.link?"active": ""} onClick={ToggleMenu}>
                        <Link href={nav.link} onClick={()=>setState(true)} >
                            {nav.name}
                        </Link>
                    </li>                
            ))}                
            </ul>
             
        </nav>
        
    )
}

export default Navbar