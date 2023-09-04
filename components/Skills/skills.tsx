import React from 'react'
import Image from 'next/image'

import HTMLAsset from '/public/assets/skills/html.png'
import CSSAsset from '/public/assets/skills/css.png'
import JSAsset from '/public/assets/skills/javascript.png'
import AWSAsset from '/public/assets/skills/aws.png'
import MongoAsset from '/public/assets/skills/mongo.png'
import NodeAsset from '/public/assets/skills/node.png'
import reactAsset from '/public/assets/skills/react.png'
import GithubAsset from '/public/assets/skills/github1.png'
const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4 text-gray-600'>What I can do!</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={HTMLAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>


            </div>

                 
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={GithubAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>Github</h3>
            </div>


            </div>

                 
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={CSSAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>CSS</h3>
            </div>


            </div>

                 
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={AWSAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>AWS</h3>
            </div>


            </div>

                 
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={JSAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>Javascript</h3>
            </div>


            </div>

                 
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={MongoAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>MongoDB</h3>
            </div>


            </div>

                 
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={NodeAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>Node</h3>
            </div>


            </div>

                 
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                <Image src={reactAsset} alt='/' width={64} height={64}></Image>


            </div>

            <div className='flex flex-col items-center justify-center'>
              <h3>React</h3>
            </div>


            </div>

                 
            </div>


            </div>

        </div>
    </div>
  )
}

export default Skills