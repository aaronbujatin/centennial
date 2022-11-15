import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>growing with data analystics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 '>Grow with data</h1>
                <div className='flex justify-center'>
                    <p className='md:text-2xl sm:text-xl text-base font-bold'>Fast, flexible financing for</p>
                    <Typed className='md:text-2xl sm:text-xl text-base font-bold pl-2' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='font-bold md:text-2xl text-gray-500 px-6'>Monitor your data analystics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-[#00df91] py-2 px-2 text-black rounded-lg w-[150px] mx-auto font-bold m-4'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero