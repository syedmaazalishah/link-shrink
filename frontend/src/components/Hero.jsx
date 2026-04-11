import React from 'react'
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <section className="w-full -my-10 flex items-center justify-center">
            <img className='w-240' src={heroImg} alt="hero image" />
        </section>
    )
}

export default Hero