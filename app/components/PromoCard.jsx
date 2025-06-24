"use client"
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'

const PromoCard = ({props, index = 0}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the animation based on index
                    setTimeout(() => {
                        setIsVisible(true);
                    }, index * 200);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    return (
        <div 
            ref={cardRef}
            className={`promocard text-center pt-10 promo-card-animated ${isVisible ? 'animate-promo-in' : ''} ${isHovered ? 'promo-card-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
           <div className={`icon-outline mb-3 promo-icon ${isHovered ? 'icon-hovered' : ''}`}>
             <Image
                src={props.icon}
                width={30}
                height={30}
                alt='icon'
                className={`icon-image ${isHovered ? 'icon-image-hovered' : ''}`}
            />
           </div>
            <h2 className={`font-Outfit text-gray-600 promo-title ${isHovered ? 'title-hovered' : ''}`}>{props.title}</h2>
            <Image
                className={`pt-8 promo-image ${isHovered ? 'image-hovered' : ''}`}
                src={props.image}
                width={500}
                height={500}
                alt='icon'
            />
            
            <p className={`text-sm text-gray-800 pt-8 promo-description ${isHovered ? 'description-hovered' : ''}`}>{props.info}</p>
        </div>
    )
}

export default PromoCard