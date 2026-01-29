import { Col, Divider, Image, Row } from 'antd'
import React from 'react'

const DownloadApp = () => {
  return (
    <Row gutter={[15, 15]} className='m-0! md:px-16 py-12'>
        <Col lg={12} sm={12} xs={24} className='p-0! flex! flex-col justify-center'>
            <h1 className='text-5xl font-bold text-center md:text-left'>Download Our</h1>
            <h1 className='text-5xl font-bold text-center md:text-left'><span className='text-[#CD2B2B]'>Artisans App</span> Today!</h1>

            <div className='mt-6 text-[#313030] font-medium text-lg leading-7 text-center md:text-left'>
                <p>Quikwrk is the easiest way to find and hire artisans of all kind, we pride</p>
                <p>in putting smiles in the face of our users and our vendors. At quikwrk</p>
                <p>will bring professionals to your doorstep.</p>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-6 mt-6'>
                <div className='flex flex-col gap-1 text-center md:text-left'>
                    <p className='font-extrabold text-2xl text-[#7F007C]'>5million+</p>
                    <p className='font-semibold text-lg text-[#313030]'>Total number of active users</p>
                </div>

                <Divider orientation="vertical" size="large" className='h-20! border-[#7D7D7D]!' />

                <div className='flex flex-col gap-1 text-center md:text-left'>
                    <p className='font-extrabold text-2xl text-[#7F007C]'>102+</p>
                    <p className='font-semibold text-lg text-[#313030]'>Task Completed</p>
                </div>

                <Divider orientation="vertical" size="large" className='h-20! border-[#7D7D7D]!' />

                 <div className='flex flex-col gap-1 text-center md:text-left'>
                    <p className='font-extrabold text-2xl text-[#7F007C]'>98+</p>
                    <p className='font-semibold text-lg text-[#313030]'>Vendors</p>
                </div>
            </div>

        </Col>

        <Col lg={12} sm={12} xs={24} className='p-0! flex! justify-center py-10!'>
            <Image src="/phones.svg" style={{ width: "100%" }} className='w-full! object-cover!' preview={false} alt="app-download" />
        </Col>
    </Row>
  )
}

export default DownloadApp