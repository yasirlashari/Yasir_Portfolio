import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import bss from '../assets/bss.png'
import MERN from '../assets/mern.JPG'

const Skills = () => {
  return (
    <div className='border border-white bg-slate-800 text-white md:h-[150px] max-w-[1700px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
      <h2 className="text-white text-xl md:text-4xl font-bold m-4">
        My <br/> Tech <br/> Stack
      </h2>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
<img src={html} alt=""/>
<p className="mt-2">HTML</p>
</div>

<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
<img src={css} alt="" width={100} height={100}/>
<p className="mt-2">css</p>
</div>

<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
<img src={javascript} alt="" width={100} height={100}/>
<p className="mt-2">JavaScript</p>
</div>

<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
<img src={tailwind} alt="" width={100} height={100}/>
<p className="mt-2">Tailwind</p>
</div>

<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
<img src={bss} alt="" width={100} height={100}/>
<p className="mt-2">BootStrape</p>
</div>

<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
<img src={MERN} alt="" width={100} height={100}/>
<p className="mt-2">MERN</p>
</div>  
    </div>
    

  );
  
  
}

export default Skills;
