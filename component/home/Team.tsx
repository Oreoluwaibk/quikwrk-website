import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
<div className='md:px-16 py-16! bg-white'>
    <h1 className='text-5xl font-bold text-center mb-4'>Team Core</h1>
    <div className='flex flex-col items-center'>
        <p className='text-lg text-[#313030] text-center md:text-left'>Meet our team core, the brain behind the Quikwrk brand</p>
    </div>

    <Row gutter={[30, 30]} className='mt-10 m-0!'>
    <Col
        lg={6}
        sm={12}
        xs={24}
        className="group relative h-100 md:h-150 rounded-2xl overflow-hidden"
        //   style={{
        //     // backgroundImage: 'url(/chidinma.svg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}
        >
        {/* Background zoom layer */}
        <div
            className="
            absolute inset-0
            bg-cover bg-center
            transition-transform duration-700 ease-out
            group-hover:scale-110
            w-full md:w-4/5 group-hover:w-[92%]
            "
            style={{ backgroundImage: 'url(/chidinma.svg)' }}
        />

        {/* Overlay content */}
        <div
            className="
            absolute inset-x-0 bottom-0
            mx-auto
            flex flex-col items-center
            w-4/5 group-hover:w-full
            transition-all duration-700 ease-in-out
            "
        >
            <div
            className="
                relative
                flex flex-col items-center gap-4
                opacity-100 md:opacity-0 translate-y-12
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-700 ease-out
                pb-5
            "
            style={{ bottom: '20px' }}
            >
            <h2 className="text-4xl font-bold text-white">
                Chidinma
            </h2>

            <p className="text-[#CD2B2B] text-lg">
                Head of Digital Marketing
            </p>
            
            <span className="rounded-full border border-dashed w-18.75 h-18.75 border-white flex justify-center items-center">
                <a
                href="https://www.linkedin.com/in/chidinma"
                className="text-[#CD2B2B]"
                >
                <Image src="/linkd.svg" alt="LinkedIn" width={24} height={24} />
                </a>
            </span>
            </div>
        </div>
    </Col>

      <Col
        lg={6}
        sm={12}
        xs={24}
        className="group relative h-100 md:h-150 rounded-2xl overflow-hidden"
        //   style={{
        //     // backgroundImage: 'url(/chidinma.svg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}
        >
        {/* Background zoom layer */}
        <div
            className="
            absolute inset-0
            bg-cover bg-center
            transition-transform duration-700 ease-out
            group-hover:scale-110
            w-full md:w-4/5 group-hover:w-[92%]
            "
            style={{ backgroundImage: 'url(/imos.svg)' }}
        />

        {/* Overlay content */}
        <div
            className="
            absolute inset-x-0 bottom-0
            mx-auto
            flex flex-col items-center
            w-4/5 group-hover:w-full
            transition-all duration-700 ease-in-out
            "
        >
            <div
            className="
                relative
                flex flex-col items-center gap-4
                opacity-100 md:opacity-0 translate-y-12
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-700 ease-out
                pb-5
            "
            style={{ bottom: '20px' }}
            >
            <h2 className="text-4xl font-bold text-white">
                Imos
            </h2>

            <p className="text-[#CD2B2B] text-lg">
                Digital Design
            </p>
            
            <span className="rounded-full border border-dashed w-18.75 h-18.75 border-white flex justify-center items-center">
                <a
                href="https://www.linkedin.com/in/solomon-akhigbe-80ba831a2"
                className="text-[#CD2B2B]"
                >
                <Image src="/linkd.svg" alt="LinkedIn" width={24} height={24} />
                </a>
            </span>
            </div>
        </div>
    </Col>

      <Col
        lg={6}
        sm={12}
        xs={24}
        className="group relative h-100 md:h-150 rounded-2xl overflow-hidden"
        //   style={{
        //     // backgroundImage: 'url(/chidinma.svg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}
        >
        {/* Background zoom layer */}
        <div
            className="
            absolute inset-0
            bg-cover bg-top md:bg-center
            transition-transform duration-700 ease-out
            group-hover:scale-110
            w-full md:w-4/5 group-hover:w-[92%]
            "
            style={{ backgroundImage: 'url(/mcCarty.svg)' }}
        />

        {/* Overlay content */}
        <div
            className="
            absolute inset-x-0 bottom-0
            mx-auto
            flex flex-col items-center
            w-4/5 group-hover:w-full
            transition-all duration-700 ease-in-out
            "
        >
            <div
            className="
                relative
                flex flex-col items-center gap-4
                opacity-100 md:opacity-0 translate-y-12 
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-700 ease-out
                pb-5
            "
            style={{ bottom: '20px' }}
            >
            <h2 className="text-4xl font-bold text-white">
              Marcateen
            </h2>

            <p className="text-[#CD2B2B] text-lg">
                Head of Operations
            </p>
            
            <span className="rounded-full border border-dashed w-18.75 h-18.75 border-white flex justify-center items-center">
                <a
                href="https://www.linkedin.com/in/imossan-macarten-170180125/"
                className="text-[#CD2B2B]"
                >
                <Image src="/linkd.svg" alt="LinkedIn" width={24} height={24} />
                </a>
            </span>
            </div>
        </div>
    </Col>


     <Col
        lg={6}
        sm={12}
        xs={24}
        className="group relative h-100 md:h-150 rounded-2xl overflow-hidden"
        //   style={{
        //     // backgroundImage: 'url(/chidinma.svg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}
        >
        {/* Background zoom layer */}
        <div
            className="
            absolute inset-0
            bg-cover bg-center
            transition-transform duration-700 ease-out
            group-hover:scale-110
            w-full md:w-4/5 group-hover:w-full
            "
            style={{ backgroundImage: 'url(/oreoluwa.jpeg)' }}
        />

        {/* Overlay content */}
        <div
            className="
            absolute inset-x-0 bottom-0
            mx-auto
            flex flex-col items-center
            w-4/5 group-hover:w-full
            transition-all duration-700 ease-in-out
            "
        >
            <div
            className="
                relative
                flex flex-col items-center gap-4
                opacity-100 md:opacity-0 translate-y-12
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-700 ease-out
                pb-5
            "
            style={{ bottom: '20px' }}
            >
            <h2 className="text-4xl font-bold text-white">
                Oreoluwa
            </h2>

            <p className="text-[#CD2B2B] text-lg">
                Software Engineer
            </p>
            
            <span className="rounded-full border border-dashed w-18.75 h-18.75 border-white flex justify-center items-center">
                <a
                href="https://www.linkedin.com/in/oreoluwa-ibikunle-306761158"
                className="text-[#CD2B2B]"
                >
                <Image src="/linkd.svg" alt="LinkedIn" width={24} height={24} />
                </a>
            </span>
            </div>
        </div>
    </Col>

    </Row>

</div>
  )
}

export default Team