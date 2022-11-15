import React from 'react'


const Newsletter = () => {
    return (
        <div className=' w-full py-14 px-4'>
            <div className='max-w-[1240px] mx-auto font-poppins grid lg:grid-cols-3'>
                <div className='lg:col-span-2 p-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-4 text-white'>Want tips & tricks to optimize your flow?</h1>
                    <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-2 p-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='py-2 px-2 hover:outline-2 outline-[#00df91] border border-[gray] font-medium flex w-full rounded-md text-black'
                            type="email" placeholder='Enter your email' />
                        <button className='bg-[#00df91] py-2 px-2 text-black rounded-lg w-[150px] font-bold ml-4 my-6'>Notify me</button>
                    </div>
                    <p className='text-white'>We care about the protection of your data. Read our <span className='text-[#00df91]'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter