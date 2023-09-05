import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/NavBar/Navbar'
import Main from '@/components/Main/main'
import About from '@/components/About/About'
import Skills from '@/components/Skills/skills'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Blog from './blogs'
export default function Home() {
  return (
    
      <div>
        <Head>
          <title>
            Nayan | Portfolio
          </title>
          <meta title='Nayan Pahuja - Software Developer Portfolio' />
          <meta name='description' content='Nayan Pahuja&apos;s Personal Portfolio. This is where i showcase my projects and experience' />
          <meta name="keywords" content="HTML,CSS,JAVASCRIPT,REACT,KOTLIN,APP DEVELOPER, WEB DEVELOPER, LEETCODE , DSA, STUDENT, NAYAN PAHUJA" />
          <link rel="icon" href="/public/assets/avatartion.svg"/>
        </Head>
        <div><Navbar/></div>
        <div className='px-2'>
        <div><Main/></div>
        <div><About/></div>
        <div><Skills/></div>
        <div><Projects/></div>
        <div><Blog/></div>
        <div><Contact/></div>
        </div>
          
          
        </div>
        
        
      
    
  )
}
