import { Divider } from 'antd'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between md:px-16 md:py-16! bg-white h-100'>
      <div className='relative flex justify-center w-full md:w-1/2'>
        <h1 className='text-2xl font-bold text-center mb-4 md:absolute left-40 top-0'>Talk to Quikwrk</h1>
        <img src="/arro.svg" alt="arrow" className='w-12 hidden md:block absolute right-0 -top-15' />
        <img src="/curvy.svg" alt="arrow" className='hidden md:block absolute right-10 -top-13 object-cover' />
      </div>
      

     <div className="flex items-center justify-start w-full md:w-1/2 gap-4">
  
  {/* Left Line */}
  <div className="flex-1 border-t border-[#ADADAD]" />

  {/* Circle */}
  <div className='group'>
  <div className="group-hover:border-0 flex flex-col gap-1 items-center justify-center rounded-full border border-dashed w-60 h-60 shrink-0">
    <p className="
    font-bold text-lg text-center
    inset-0
    transition-opacity duration-300
    group-hover:hidden flex items-center justify-center w-full h-full
    ">
      Get in Touch
    </p>

    <p className="
    font-bold text-lg text-center text-white
    opacity-0 scale-75 
    transition-all duration-1000 ease-out
    group-hover:flex
    group-hover:opacity-100
    group-hover:scale-100
    w-full h-full bg-black rounded-full hidden items-center justify-center
    ">
      Get in Touch
    </p>

  </div>
  </div>

  {/* Right Line */}
  <div className="flex-1 border-t border-[#ADADAD]" />

</div>

    </div>
  )
}

export default GetInTouch