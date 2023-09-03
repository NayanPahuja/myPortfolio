"use client";

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import ImageAsset from '/public/assets/logo_final.svg'
import Link from 'next/link'
import { AiOutlineAlignRight, AiOutlineMail } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
function Navbar() {

  const [nav, setNav] = useState(false)
  const [shadow,setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)

  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
  
    window.addEventListener('scroll', handleShadow);
  
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []); 
  
 
  return (
    <div style = {{backgroundColor: '#ecf0f3'}}className={shadow ? 'fixed w-full h-20 shadow-2xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full  h-full px-2'>
          <Link href={'/'}>
        <Image src={ImageAsset} width={85} height={50}  alt='/'></Image>
          </Link>

        
        <div>
          <ul className='hidden md:flex'>
            <Link href={'/'}>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href={'/#about'}>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href={'/#Skills'}>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href={'/#Projects'}>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href={'/#contact'}>
              <li className='ml-10 mr-5 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineAlignRight size = {25}/>
          </div>
        </div>

        </div>

      <div className= {nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/75 ': ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
          <div>

          
          <div className='flex w-full items-center justify-between'>
            <Link href={'/'}>
          <Image src={ImageAsset} alt='/' width={87} height={35}/>

            </Link>

          
          <div onClick = {handleNav}className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
            <AiOutlineClose size = {20}/>
          </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
          <p className='w-[85%] md:w-[90%] py-6'>Trying to become something of a legend!</p>
          </div>

          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href={'/'} ><li onClick={() => setNav(false)} className='py-4 text-sm'>
                Home
              </li></Link>
              <Link href={'/#about'} ><li onClick={() => setNav(false)} className='py-4 text-sm'>
                About
              </li></Link>
              <Link href={'/#Skills'} ><li onClick={() => setNav(false)}className='py-4 text-sm'>
                Skills
              </li></Link>
              <Link href={'/#Projects'} ><li onClick={() => setNav(false)} className='py-4 text-sm'>
                Projects
              </li></Link>
              <Link href={'/#contact'} ><li onClick={() => setNav(false)} className='py-4 text-sm'>
                Contact
              </li></Link>
              
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]' >
                <a
                    href='https://www.linkedin.com/in/nayanpahuja'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/nayanpahuja'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href='https://instagram.com/pahuja.nayan'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaInstagram />
                  </div>
                  </a>
                  <Link href={'https://drive.google.com/file/d/1lcHM_cR_8mnb-n4Qe0KtiV_QRjPY0p8Y/view?usp=sharing'} legacyBehavior>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar