import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.jpg';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.jpg';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.jpg';

const projects = [
  { 
    id: 1, 
    imgSrc: proj1, 
    title: 'Banking System', 
    liveLink: 'https://yasirlashari.github.io/Bank_System_Task_By_The_Spark_Foundation/',
    codeLink: 'https://github.com/yasirlashari/Bank_System_Task_By_The_Spark_Foundation'
  },
  { id: 2, imgSrc: proj2, title: 'CRUD Application', liveLink: '/', codeLink: '/' },
  { id: 3, imgSrc: proj3, title: 'Charity For Humanity', liveLink: 'https://yasirlashari.github.io/Charity_for_Humanity/', codeLink: 'https://github.com/yasirlashari/Charity_for_Humanity.git' },
  { id: 4, imgSrc: proj4, title: 'Chat App', liveLink: 'https://yasirlashari.github.io/ChatApp/', codeLink: 'https://github.com/yasirlashari/ChatApp.git' },
  { id: 5, imgSrc: proj5, title: 'React Weather App', liveLink: '/', codeLink: 'https://github.com/yasirlashari/weather_app_reactjs.git' },
  { id: 6, imgSrc: proj6, title: 'Mern Book Store', liveLink: '/', codeLink: '/' },
];

const Work = () => {
  return (
    <div className='max-w-[1700px] bg-slate-800 mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p className='text-white text-6xl mb-3 font-bold text-primary'>Work</p>
        <p className='text-white'>Check Out Some Of My Work</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <div key={project.id} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'>
            <img src={project.imgSrc} alt={`Display of ${project.title}`} className='object-cover w-full h-full'/>
            <div className='opacity-0 group-hover:opacity-90 bg-[#00000070] absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>{project.title}</span>
              <div className='pt-8 text-center'>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Work;
