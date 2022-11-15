import {
    FaLinkedinIn,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 font-poppins'>
            <div>
                <h1 className='text-[3rem] font-teko w-full tracking-widest text-[#00df9a]'>Wholesale Inventory</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa necessitatibus cumque esse dolore consectetur aliquid, iste dolorum qui nesciunt voluptatibus?</p>
                <div className='flex md:[75%] my-4 space-x-4'>
                    <FaFacebookSquare size={25} />
                    <FaInstagramSquare size={25} />
                    <FaTwitterSquare size={25} />
                    <FaGithubSquare size={25} />
                    <FaLinkedinIn size={25} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h3 className='font-bold text-xl'>Solutions</h3>
                    <ul>
                        <li className='py-2 hover:text-[#00df9a] '>Analytics</li>
                        <li className='py-2'>Company</li>
                        <li className='py-2'>Commerce</li>
                        <li className='py-2'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Support</h3>
                    <ul>
                        <li className='py-2'>Pricing </li>
                        <li className='py-2'>Documentation</li>
                        <li className='py-2'>Guide</li>
                        <li className='py-2'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Company</h3>
                    <ul>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Jobs</li>
                        <li className='py-2'>Press</li>
                        <li className='py-2'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Legal</h3>
                    <ul>
                        <li className='py-2'>Policy</li>
                        <li className='py-2'>Claim</li>
                        <li className='py-2'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer