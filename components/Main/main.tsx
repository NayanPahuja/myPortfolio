"use client";
import React, {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
    
  return (
    <div id='Home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center p-2 items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s build something together!</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m <span className='text-[#5651e5]'>Nayan</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Software Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] mx-auto'>
                    I&apos;m an aspiring software developer and engineer and I wish to specialize in developing scalable and robust applications.
                    Currently I am focussed on my problem solving skills and learning devops such as docker.

                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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
    
  )
}

export default Main