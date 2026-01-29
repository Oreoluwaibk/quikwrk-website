import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

const KeyFeatures = () => {
  return (
    <Row gutter={[30, 30]} className='m-0! md:px-16 py-16! bg-white!'>
        <Col lg={16} sm={12} xs={24} className='p-0! flex! flex-col gap-4 text-center md:text-left'>
            <h1 className='text-2xl font-bold text-[#CD2B2B]'>Key Features</h1>
            <h1 className='text-5xl font-bold'>Track Your Progress And </h1>
            <h1 className='text-5xl font-bold'>Make Money Swiftly </h1>

            <div className='mt-6 text-[#313030] font-medium text-lg leading-7'>
                <p className='md:pr-6'>Quikwrk is the ultimate platform that connects skilled artisans and service providers with people who needs their expertise. whether you are an electrician, plumber, cleaner, tailor or mechanic, Quikwrk helps you find real jobs near you and get paid instantly. with just a few taps, users can hire trusted professionals, and artisans can showcase their skills, build credibility, and grow their income.</p>
            </div>

        </Col>

        <Col lg={8} sm={12} xs={24} className='p-0! flex! flex-col gap-6 justify-center py-10!'>
            <Card classNames={{ body: 'flex flex-col gap-4 p-8! shadow-xs!' }} >
                <Image src="/camera.svg"width={50} height={50}  alt="key-features" />
                <h2 className='font-bold text-lg tex-[#1A1A1A]'>Make Money</h2>
                <p className='text-[#313030] text-base'>Quikwrk is the easiest way to find and hire artisans of all kind, we pride in putting smiles in the face of our users and our vendors. At quikwrk will bring professionals to your doorstep and the vendors get paid instantly.</p>
            </Card>

            <Card classNames={{ body: 'flex flex-col gap-4 p-8! shadow-xs!' }} >
                <Image src="/bin.svg"width={50} height={50}  alt="key-features" />
                <h2 className='font-bold text-lg tex-[#1A1A1A]'>Convenience</h2>
                <p className='text-[#313030] text-base'>Quikwrk is the easiest way to find and hire artisans of all kind, User can hire trusted professionals from the comfort of their home just with few taps.</p>
            </Card>
        </Col>
    </Row>
  )
}

export default KeyFeatures