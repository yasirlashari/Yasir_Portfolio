import React from 'react';
import heroimage from '../assets/Yasir.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1700px] md:h-[70vh] mx-auto py-8 bg-slate-800'>
      <div className='my-auto mx-auto'>
        <div className='w-[300px] h-auto lg:w-[400px]'>
          <img src={heroimage} alt="Profile picture of a developer" />
        </div>
      </div>
      <div className='col-span-2 px-5'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span><br/>
          <TypeAnimation
            sequence={[
              "Full STACK DEVELOPER",
              1000,
              "MERN STACK DEVELOPER",
              1000,
              "SOFTWARE ENGINEER",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Yasir Ali Lashari and I am Frontend Developer at TEAL CLIMATE ORGANIZATION. 
        </p>
        <div className='my-8'>
          <a href='/' className='px-6 py-3 w-full rounded-x1  bg-gradient-to-br from-orange-500 to-pink-500 text-white' >DownLoad CV</a>

<a href='#contact' className='px-6 py-3 w-full rounded-x1  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
