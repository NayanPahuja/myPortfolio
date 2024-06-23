import React from 'react'
import Image from 'next/image'
import VideoChatAsset from '/public/assets/VideoChatLObby.png'
import ProjectItem from '../projectConstants'
import GameAsset from '/public/assets/FULL STACK LEETCODE CLONE.png'
// import TwitterAsset from '/public/assets/FLUTTER TWITTER CLONE.png'
import LeetCodeAsset from '/public/assets/Game01.png'
import GitAsset from '/public/assets/verFlow.png'

const Projects = () => {
  return (
    <div id='Projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
          <h2 className='py-4 text-gray-600'>What I&apos;ve built!</h2> 
          <div className='grid md:grid-cols-2 gap-8'>


          <ProjectItem
            title='VideoChatClone'
            backgroundImg={VideoChatAsset}
            projectUrl='https://github.com/NayanPahuja/VideoChatClone'
            tech='Web RTC'
          />
          <ProjectItem
            title='LeetCode Full Stack Clone'
            backgroundImg={GameAsset}
            projectUrl='https://github.com/NayanPahuja/DeadlyGuy'
            tech='React, Mongo'
          />
          <ProjectItem
            title='2D RPG GAME'
            backgroundImg={LeetCodeAsset}
            projectUrl='https://github.com/NayanPahuja/LeetCodeClone'
            tech='Godot Engine'
          />
          <ProjectItem
            title='verFlow'
            backgroundImg={GitAsset}
            projectUrl='https://github.com/NayanPahuja/verFlow'
            tech='Python, Shell'
          />



          </div>
        </div>
    </div>
  )
}

export default Projects