import React from 'react'
import user from '../assets/user.png';
import db from '../assets/db.png';
import wallet from '../assets/wallet.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white font-poppins'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4 '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 items-center rounded-lg hover:scale-105 duration-300'>
                    <img className='mx-auto mt-[-3rem] bg-white' src={user} alt="" />
                    <h2 className='font-semibold text-2xl text-center'>Single User</h2>
                    <p className='text-center font-bold text-3xl'>$149</p>
                    <div className='text-center font-medium mt-2 mx-auto'>
                        <ul className=''>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>500gb Storage</p>
                            </li>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>1 Granted User</p>
                            </li>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>Send up to 2gb</p>
                            </li>
                        </ul>
                    </div>
                    <button className='bg-[#00df9a] hover:bg-[#009C6B] ease-out duration-300 text-black rounded-lg px-4- py-2 w-[150px] font-semibold mt-[12px] tracking-widest mx-auto md:mx-0'>Start Trial</button>
                </div>
                
                <div className='w-full shadow-xl flex flex-col p-4 my-4 items-center rounded-lg hover:scale-105 duration-300'>
                    <img className='mx-auto mt-[-3rem] bg-white' src={wallet} alt="" />
                    <h2 className='font-semibold text-2xl text-center'>Single User</h2>
                    <p className='text-center font-bold text-3xl'>$149</p>
                    <div className='text-center font-medium mt-2 mx-auto'>
                        <ul className=''>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>500gb Storage</p>
                            </li>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>1 Granted User</p>
                            </li>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>Send up to 2gb</p>
                            </li>
                        </ul>
                    </div>
                    <button className='bg-black  ease-out duration-300 text-[#00df9a] rounded-lg px-4- py-2 w-[150px] font-semibold mt-[12px] tracking-widest mx-auto md:mx-0'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 items-center rounded-lg hover:scale-105 duration-300'>
                    <img className='mx-auto mt-[-3rem] bg-white' src={db} alt="" />
                    <h2 className='font-semibold text-2xl text-center'>Single User</h2>
                    <p className='text-center font-bold text-3xl'>$149</p>
                    <div className='text-center font-medium mt-2 mx-auto'>
                        <ul className=''>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>500gb Storage</p>
                            </li>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>1 Granted User</p>
                            </li>
                            <li className='flex items-center'>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#00df9a] dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <p className='py-[4px] pl-2'>Send up to 2gb</p>
                            </li>
                        </ul>
                    </div>
                    <button className='bg-[#00df9a] hover:bg-[#009C6B] ease-out duration-300 text-black rounded-lg px-4- py-2 w-[150px] font-semibold mt-[12px] tracking-widest mx-auto md:mx-0'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards