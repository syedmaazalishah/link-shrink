import React from 'react'
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <section className="w-full flex m-20 border item-center justify-center item-center">
            <img className='w-300 ' src={heroImg} alt="hero image" />
        </section>
    )
}

export default Hero