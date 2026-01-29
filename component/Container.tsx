"use client";
import { Button, Col, Layout, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

interface props {
    children: ReactNode;
    active: string;
}

export const NavItem = ({ href, label, active, mobile }: { href: string, label: string; active: boolean; mobile?: boolean}) => {
    return(

    <Link href={href}>
      <span className={`md:text-lg text-sm ${active ? 'text-black' : 'text-[#7D7D7D]'} ${mobile ? 'text-lg! font-semibold text-[#1E1E1E]' : ''} text-text`}>{label}</span>
    </Link>
)};

const { Header, Footer, Content } = Layout
const Container: React.FC<props> = ({ children, active }) => {
    const [open, setOpen] = useState(false);
  return (
    <Layout>
         <Header className="bg-white! flex items-center gap-3 w-full justify-between py-4! h-30! px-4! md:px-20! sticky! top-0 z-3" >
                    <div className='flex items-center gap-20'>
                        <Link href="/" className=''>
                        <Image 
                            src="/logored.svg"
                            alt='Quik Wrk Logo'
                            className="bg-white"
                            width={100}
                            height={20}
                        />
                        </Link>
                    </div>
                    <div className="bg-white flex items-center gap-4 md:gap-8">
                        <NavItem href="/" label="Home" active={active === 'Home'} /> 
                        <NavItem href="#" label="Register" active={active === 'Register'} /> 
                        <NavItem href="#" label="Community" active={active === 'Community'} /> 
                    </div>
                    

                    {<div className='items-center gap-4 hidden md:flex'>
                        <Button type='primary' className='h-15! w-63.25!'>Download Now</Button>
                    </div>}

                   

                    {/* {<MenuOutlined className='md:hidden! text-2xl' onClick={() => setOpen(!open)} />} */}

                </Header>
        <Content style={{  }}>
            {children}
        </Content>
        <Footer className='px-0! m-0! bg-white!'>
            <Row className='mb-10! md:px-10 md:py-10! mx-0! border-t border-t-[#E4E2E2]' gutter={[30, 30]}>
                <Col lg={8} sm={12} xs={24}>
                    <Link href="/">
                    <Image 
                        src="/logored.svg"
                        alt='Quik Wrk Logo'
                        className="bg-white"
                        width={100}
                        height={20}
                    />
                    </Link>

                    <p className='text-lg text-[#313030] mt-6!'>Quikwrk is the easiest way to find and hire artisans of all kind, we pride in putting smiles in the face of our users and our vendors. At quikwrk will bring professionals to your doorstep.</p>
                </Col>

                <Col lg={8} sm={12} xs={24} className='flex! items-center flex-col gap-4'>
                    <p className='text-[#7D7D7D] text-xl'>Company</p>

                    <Link href="/" className='text-xl text-black! font-semibold'>Home</Link>
                    <Link href="#" className='text-xl text-black! font-semibold'>Register</Link>
                    <Link href="#" className='text-xl text-black! font-semibold'>Community</Link>


                </Col>

                <Col lg={8} sm={12} xs={24} className='flex! flex-col items-center gap-4'>
                    <p className='text-[#7D7D7D] text-xl'>Follow Us</p>

                    <Link href="https://www.instagram.com/quik_wrk?igsh=MXM5OTdkOTE3YzhxOQ==" className='text-xl text-black! font-semibold'>Instagram</Link>
                    <Link href="#" className='text-xl text-black! font-semibold'>LinkedIn</Link>
                    <Link href="#" className='text-xl text-black! font-semibold'>Twitter</Link>
                </Col>
            </Row>
            <div className='text-[#313030]! flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 py-6! border-t border-t-[#E4E2E2] md:px-10!'>
                <h1 className='text-lg'>&copy; 2026 Quikwrk LLC</h1>
                <div className='flex items-center gap-2'>
                    <Link href="#" className='text-lg text-[#313030]!'>Privacy Policy  /</Link>
                    <Link href="#" className='text-lg text-[#313030]!'>Terms of Service</Link>
                </div>
            </div>
        </Footer>
    </Layout>
  )
}

export default Container