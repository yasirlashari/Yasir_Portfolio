import React from 'react';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <div className="text-white bg-slate-800 max-w-[1700px] mx-auto my-0 border border-white" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16 ">
        <div className="flex text-left my-auto mx-6">
          <div>
            <h2 className="text-5xl font-bold mb-4 text-primary">About Me</h2>
            <p className="text-base lg:text-lg">
           <b> I am  graduated from Sukkur IBA University with a degree in Computer Science and have completed internships at InternSavy, The Spark Foundation, Grow Intern, and AIM Software House. I am currently working as a Frontend Developer at TEAL Climate Organization, a Canadian startup focused on environmental solutions.
           </b> </p>
          </div>
        </div>
        <img className="mx-auto rounded-lg py-8 md:py-0" src={aboutImg} width={400} alt="About Me"></img>
      </div>
    </div>
  );
}

export default About;
