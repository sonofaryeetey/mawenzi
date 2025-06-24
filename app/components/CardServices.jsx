"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'

const CardServices = ({props, index = 0}) => {
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
                    }, index * 150);
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
            className={`card card-animated ${isVisible ? 'animate-card-in' : ''} ${isHovered ? 'card-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='img-container'>
                <Image
                    src={props.image}
                    width={1000}
                    height={1000}
                    alt='card'
                    className={`card-image ${isHovered ? 'image-hovered' : ''}`}
                />
                <div className={`card-overlay ${isHovered ? 'overlay-visible' : ''}`}></div>
            </div>
            <div className="card-text">
                <h2 className={`card-title ${isHovered ? 'title-hovered' : ''}`}>{props.title}</h2>
                <p className={`text-sm card-description ${isHovered ? 'description-hovered' : ''}`}>
                    {props.info}
                </p>
                <Link href={"/Services"}>
                    <button className={`text-sm card-button ${isHovered ? 'button-hovered' : ''}`}>
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CardServices