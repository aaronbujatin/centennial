import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const[nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='text-white flex justify-between items-center h-26 mx-auto px-4 max-w-[1240px]'>
            <h1 className='text-[3rem] font-teko w-full tracking-widest text-[#00df9a]'>Centennial</h1>
            <ul className='hidden md:flex font-roboto tracking-widest'>
                <li className='p-4 font-semibold '>Home</li>
                <li className='p-4 font-semibold '>Company</li>
                <li className='p-4 font-semibold '>Resources</li>
                <li className='p-4 font-semibold '>About</li>
                <li className='p-4 font-semibold '>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />} 
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 font-roboto tracking-widest bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] '}>
                <h1 className='text-[3rem] font-teko w-full tracking-widest text-[#00df9a] m-[1rem] mt-[1px]'>Centennial</h1>
                <ul className='p-2 font-normal'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 '>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar