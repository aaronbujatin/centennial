import React from 'react'
import Ana1 from '../assets/ana1.jpg'
import Ana2 from '../assets/ana2.jpg'


const Analystics = () => {
  return (
    <div className='bg-white w-full py-16 px-4 font-poppins'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Ana1} alt="Laptop" />
        <div className='flex flex-col justify-center m-2'>
          <p className='uppercase text-[#00df9a] font-semibold'>Data Analystic Dashboard</p>
          <h1 className='font-extrabold text-2xl md:text-3xl my-2'>Manage Data Analystics Centrally</h1>
          <p className=' text-black my-2 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem voluptatem facere sunt consectetur harum quisquam natus soluta molestias totam enim delectus provident laboriosam quae, expedita, laudantium eum excepturi qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti est voluptates cumque quis ex at repellendus asperiores voluptate impedit pariatur!</p>
          <button className='bg-black text-[#00df9a] rounded-lg px-4- py-2 w-[150px] font-semibold mt-2 tracking-widest mx-auto md:mx-0'>More info</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto grid grid-flow-dense md:grid-cols-2 mt-6'>
        <div className='flex flex-col justify center m-6'>
          <p className='uppercase text-[#00df9a] font-semibold'>Data Analystic Dashboard</p>
          <h1 className='font-extrabold text-2xl md:text-3xl my-2'>Manage Data Analystics Centrally</h1>
          <p className=' text-black my-2 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem voluptatem facere sunt consectetur harum quisquam natus soluta molestias totam enim delectus provident laboriosam quae, expedita, laudantium eum excepturi qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti est voluptates cumque quis ex at repellendus asperiores voluptate impedit pariatur!</p>
          <button className='bg-black text-[#00df9a] rounded-lg px-4- py-2 w-[150px] font-semibold mt-2 tracking-widest mx-auto md:mx-0'>More info</button>
        </div>
        <img className='w-[500px] mx-auto my-4 row-start-1 md:row-auto' src={Ana2} alt="Laptop" />
      </div>

    </div>
  )
}

export default Analystics