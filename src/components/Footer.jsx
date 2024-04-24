import React from 'react';

const Footer = () => {
  return (
    <div className='bg-slate-800 max-w-[1700px] sm:h-[150px] p-12 flex justify-between items-center mx-auto border border-white'>
      <span className='text-white'>I am Nothing, I am Just Limited Edition</span>
      <div className='flex justify-center gap-4'>
        <a href="mailto:yasirlashari131@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope text-white text-3xl"></i>
        </a>
        <a href="https://linkedin.com/in/yasir-ali-5173101a3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in text-white text-3xl"></i>
        </a>
        <a href="https://github.com/yasirlashari" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-white text-3xl"></i>
        </a>
      </div>
      <p className='text-white'>Yasir Ali Lashari</p>
    </div>
  );
}

export default Footer;
