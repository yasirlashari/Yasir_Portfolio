import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='bg-slate-800 text-white h-[100px] max-w-[1700px] mx-auto flex justify-between items-center px-4 border border-white'>
            <h1 className='text-3xl font-bold text-primary ml-4'>WELCOME TO MY PORTFOLIO</h1>
            <ul className={`md:flex ${nav ? 'flex' : 'hidden'} absolute md:static bg-black md:bg-transparent left-0 w-full md:w-auto`}>
                <li className='p-4 md:p-5'><a href='#about'>About</a></li>
                <li className='p-4 md:p-5'><a href='#work'>Work</a></li>
                <li className='p-4 md:p-5'><a href='#contact'>Contact</a></li>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer z-10 '>
                {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[100%]'}>
                <h1 className='text-3xl text-primary ml-4 mt-4'>Yasir Ali</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#home'>Home</a></li>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-2'><a href='#work'>Work</a></li>
                    <li className='p-2'><a href='#experience'>Experience</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
