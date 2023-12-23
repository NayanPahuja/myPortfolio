import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '/public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-justify'>
            👋 Hello, I&apos;m Nayan Pahuja, a dedicated student at Thapar Institute, majoring in Electronics and Computer Science. During my academic journey, I&apos;ve ventured into the world of technology, coding, and problem-solving.
            </p> 


            <p className='py-2 text-gray-600 text-justify'>📊 Beyond coding, I&apos;ve taken on roles as an event coordinator for E-Summit&apos;23, leading a team of over 250 individuals, and managing marketing and public relations for the Thapar Food Festival.</p>

            <p className='py-2 text-gray-600 text-justify'>
            📝 I&apos;m also passionate about technical writing, with a collection of 100+ articles on data structures and algorithms on dev.to, where I&apos;ve gained a following of 2200+ readers.

            🌐 Whether it&apos;s web development, app creation, event coordination, or problem solving, I&apos;m here to contribute to the tech world with a blend of skills and knowledge. Let&apos;s explore the digital realm together! 👨‍💻🌐
            </p>
          <Link href='/#Projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
