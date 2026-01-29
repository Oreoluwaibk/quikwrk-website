import { Button } from 'antd'
import React from 'react'

const Banner = () => {
  return (
    <div style={{ backgroundImage: 'url(/banner.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full h-140 flex flex-col items-start justify-center text-center md:px-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Connecting Skilled </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hands with Real Jobs</h1>

        <p>At quikwrk, we celebrate your skill, hustle and your dedication keep</p>
        <p>shining, keep building, and keep doing what you do best. The world</p>
        <p>runs on your craftmanship</p>

        <div className='flex flex-col md:flex-row w-full md:justify-start justify-center items-center gap-6 mt-8 '>
            <Button type="primary" className="h-12 w-48 text-lg font-medium">Download Now</Button>
            <Button type="primary" className="bg-white! text-black! h-12 w-48 font-medium">Register</Button>
        </div>
    </div>
  )
}

export default Banner