import { Image as AntdImage } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LearnMore = () => {
  return (
    <div className='md:px-16 py-16! bg-white'>
        <h1 className='text-4xl font-bold text-center mb-4'>Learn more about Quikwrk</h1>
        <div className='flex flex-col items-center'>
            <p className='text-lg text-[#313030]'>We combine ideas, challenges and cutting edge technologies to solve problems</p>
            <p className='text-lg text-[#313030]'>for users. Also creating wealth for artisans and making things easy for users </p> 
            <p className='text-lg text-[#313030]'>to get the best from their comfort.</p>
        </div>

        <div className='mt-10 flex items-center justify-center'>
            <AntdImage src="/map.svg" alt='map' className='w-full h-auto' preview={false} />
        </div>

        <div className='flex md: flex-col md:flex-row items-center justify-center gap-8 md:gap-20 mt-10'>
            <div className='flex flex-col gap-1 items-center justify-center rounded-full border border-[#D9D9D9] w-50 h-50'>
                <p className='font-bold text-3xl'>98</p>
                <p className='font-bold text-xs'>Number of Artisans</p>
            </div>
              <div className='flex flex-col gap-1 items-center justify-center rounded-full border border-[#D9D9D9] w-60 h-60'>
                <p className='font-bold text-4xl'>102</p>
                <p className='font-bold text-sm text-center'>Successfully Completed Projects</p>
            </div>
              <div className='flex flex-col gap-1 items-center justify-center rounded-full border border-[#D9D9D9] w-50 h-50 px-4'>
                <p className='font-bold text-3xl'>4</p>
                <p className='font-bold text-xs wrap-break-word text-center'>Co-ordinating Team Members</p>
            </div>
        </div>

         <div className='flex items-center justify-center gap-4 md:gap-20 mt-10'>
            <Link href="https://www.instagram.com/quik_wrk?igsh=MXM5OTdkOTE3YzhxOQ==" className='text-xl text-black! font-semibold'>
            <div className='group'>
            <div
                className="
                   rounded-full border border-dashed border-black
                    w-25 h-25
                    relative
                    group-hover:border-0
                     flex items-center justify-center
                "
                >
                <div className="relative w-full flex! items-center justify-center h-full">

                    {/* Black Base */}
                    <Image
                    src="/linkblack.svg"
                    alt="Link"
                    width={32}
                    height={32}
                    className="
                        inset-0 w-8 h-8 object-contain
                        transition-opacity duration-300
                        group-hover:opacity-0
                    "
                    />

                    {/* Blue Hover */}
                    <Image
                    src="/linkblue.svg"
                    alt="Link Hover"
                        width={100}
                    height={100}
                    className="
                        absolute inset-0 w-25 h-25 object-contain
                        opacity-0 scale-75
                        transition-all duration-400 ease-out
                        group-hover:opacity-100
                        group-hover:scale-100
                    "
                    />

                </div>
            </div>
            </div>
            </Link>

              <div className='opacity-0 flex flex-col gap-1 items-center justify-center rounded-full border border-dashed border-black w-25 h-25'>
                <AntdImage src='/xblack.svg' className='w-8! h-8!' alt='Number of Artisans' />
            </div>
             <div className='group'>
            <div
                className="
                   rounded-full border border-dashed border-black
                    w-25 h-25
                    relative
                    group-hover:border-0
                     flex items-center justify-center
                "
                >
                <div className="relative w-full flex! items-center justify-center h-full">

                    {/* Black Base */}
                    <Image
                    src="/instablack.svg"
                    alt="Link"
                    width={32}
                    height={32}
                    className="
                        inset-0 w-8 h-8 object-contain
                        transition-opacity duration-300
                        group-hover:opacity-0
                    "
                    />

                    {/* Blue Hover */}
                    <Image
                    src="/igblue.svg"
                    alt="Link Hover"
                        width={100}
                    height={100}
                    className="
                        absolute inset-0 w-25 h-25 object-contain
                        opacity-0 scale-75
                        transition-all duration-400 ease-out
                        group-hover:opacity-100
                        group-hover:scale-100
                    "
                    />

                </div>
            </div>
            </div>
         
        </div>
        <div className='flex items-center justify-center mt-4'>
           
            <div className='group'>
            <div
                className="
                   rounded-full border border-dashed border-black
                    w-25 h-25
                    relative
                    group-hover:border-0
                     flex items-center justify-center
                "
                >
                <div className="relative w-full flex! items-center justify-center h-full">

                    {/* Black Base */}
                    
                    <Image
                    src="/xblack.svg"
                    alt="Link"
                    width={32}
                    height={32}
                    className="
                        inset-0 w-8 h-8 object-contain
                        transition-opacity duration-300
                        group-hover:opacity-0
                    "
                    />

                    {/* Blue Hover */}
                    <Image
                    src="/xblue.svg"
                    alt="Link Hover"
                        width={100}
                    height={100}
                    className="
                        absolute inset-0 w-25 h-25 object-contain
                        opacity-0 scale-75
                        transition-all duration-400 ease-out
                        group-hover:opacity-100
                        group-hover:scale-100
                    "
                    />

                </div>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default LearnMore