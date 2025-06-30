import React from 'react';
import aboutimg from '../assets/imageportfolio.png';
import { GoDotFill } from "react-icons/go";

const AboutMe = () => {
  
  return (
    <section id="about">
      <div className='bg-[#060407] py-10'>
      <div className='w-9/12 mx-auto border border-green-500 p-10'>
        <h2 className='text-3xl text-center text-green-400 font-bold pb-5'>About Me</h2>

        <div className='md:flex mb-10'>
          <div className='flex-1 flex justify-center items-center'>
            <img className='w-100 rounded-full ' src={aboutimg} alt="Profile" />
          </div>
          <div className='flex-1 text-white'>
            <p className='text-xl p-2'>
              Hello, I'm <span className='text-4xl text-green-400 font-bold'>Mahatab Hosen Raju</span>
            </p>
            <p className='text-xl p-2 max-w-3xl'>
              I'm a passionate and proactive MERN Stack Developer from Bangladesh. I specialize in building dynamic, scalable, and user-friendly web applications using React, Next.js, Node.js, Express, and MongoDB.
            </p>
            <p className='text-xl p-2 max-w-3xl'>
              With a strong focus on clean code, modern UI/UX, and performance optimization, I love transforming ideas into real-world applications. Whether it's crafting intuitive front-end experiences or architecting robust back-end systems, I’m always exploring new tools, frameworks, and technologies to level up my development skills.
            </p>
            <p className='text-xl p-2 max-w-3xl pb-2'>
              🌱 Constantly learning, always building. Let's create something amazing, one project at a time.
            </p>

            <div className="divider divider-success"></div>
              <div>
                <p className='text-4xl font-bold text-gray-200 mb-8'>Education</p>
                <div>
                  <h2 className='text-xl font-bold text-green-500 flex items-center gap-1'><GoDotFill /> Secondary School</h2>
                  <div className='px-5'>
                    <p className='text-base font-semibold '>2019 - 2021</p>
                    <p className='text-base font-semibold '>Konabari M A Kuddus High School</p>
                  </div>
                </div>
                <div>
                  <h2 className='text-xl font-bold text-green-500 flex items-center gap-1'><GoDotFill /> Diploma in CST</h2>
                  <div className='px-5'>
                    <p className='text-base font-semibold '>2021 - 2025</p>
                    <p className='text-base font-semibold '>Barishal Polytechnic Institute</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
      </div>
    </div>
    </section>
  );
};

export default AboutMe;
