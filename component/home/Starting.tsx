import { Col, Divider, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

const Starting = () => {
  return (
    <div className='md:px-16 py-16! '>
        <div className='flex flex-col items-center gap-4 md:py-10 text-center md:text-left'>
            <h1 className='text-2xl font-bold text-[#CD2B2B]'>Starting</h1>
            <h1 className='text-5xl font-bold'>Getting Started is Simple!</h1>
            <div className='flex flex-col items-center'>
                <p className='text-lg text-[#313030]'>Quikwrk is the ultimate platform that connects skilled artisans and service</p>
                <p className='text-lg text-[#313030]'>providers with people who needs their expertise.</p>
            </div>
           
        </div>

        <Row gutter={[15, 15]} className='md:mt-12 m-0!'>
            <Col lg={8} sm={12} xs={24}>
                <Image src="/arrow.svg" width={50} height={50} alt="step-1" />

                <Divider className='border-[#595959]! my-8!' size='large' />
                <h2 className='text-2xl font-bold mt-4!'>Signup on the Quikwrk app as a new user</h2>
                <p className='text-[#313030] mt-2!'>Quikwrk is the easiest way to find and hire artisans of all kind, User can hire trusted professionals from the comfort of their home just with few taps.</p>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <Image src="/tools.svg" width={42} height={40} alt="step-1" />

                <Divider className='border-[#595959]! my-8!' />
                <h2 className='text-2xl font-bold mt-4!'>Request for a Quikwrk artisan or vendor close to you.</h2>
                <p className='text-[#313030] mt-2!'>Quikwrk is the easiest way to find and hire artisans of all kind, User can hire trusted professionals from the comfort of their home just with few taps.</p>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <Image src="/checked.svg" width={50} height={50} alt="step-1" />

                <Divider className='border-[#595959]! my-8!' />
                <h2 className='text-2xl font-bold mt-4!'>Quikwrk artisan accept your request and come to you.</h2>
                <p className='text-[#313030] mt-2!'>Quikwrk is the easiest way to find and hire artisans of all kind, User can hire trusted professionals from the comfort of their home just with few taps.</p>
            </Col>
        </Row>
       
    </div>
  )
}

export default Starting