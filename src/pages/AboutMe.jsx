import React from 'react';
import aboutimg from '../assets/aboutimage.jpg';
import { GoDotFill } from "react-icons/go";

const AboutMe = () => {
  
  return (
    <section id="about">
      <div className='bg-[#060407] pt-20 min-h-screen'>
      <div className='w-11/12 md:w-9/12 mx-auto  p-10'>
        <h2 className='text-3xl text-center text-green-400 font-bold pb-5'>About Me</h2>

        <div className='md:flex mb-10'>
          <div className='flex-1 flex justify-center items-center'>
            <img
              className="w-80 my-10  md:w-120 border-4 border-green-400/30 "
              src={aboutimg}
              alt="Profile"
            />
          </div>
           
          <div className='flex-1 text-white'>
            <p className='text-xl p-2'>
              Hi! I'm <span className='font-bold'>Md. Mahatab Hosen Raju</span>, a passionate <span className='font-bold'>MERN Stack Developer</span> who loves building clean, responsive, and user-friendly web applications.
            </p>
            <p className='text-xl p-2 max-w-3xl'>
              My programming journey started with curiosity about how websites work, and over time I mastered <span className='font-bold'>JavaScript, React, Node.js, Express, and MongoDB.</span>  I enjoy developing projects that solve real-world problems — from<span className='font-bold'> authentication systems to role-based dashboards and seamless UI/UX experiences.</span>
            </p>
            <p className='text-xl p-2 max-w-3xl'>
            I believe in continuous learning and my career objective is to grow as a professional developer while exploring fields like <span className='font-bold'>Artificial Intelligence, Cloud Deployment, and Sustainable Tech Solutions.</span>
            </p>
            <p className='text-xl p-2 max-w-3xl pb-2'>
              Beyond coding, I enjoy traveling, keeping up with tech trends, and sometimes playing cricket. 🚀
            </p>

            <div className="divider divider-success"></div>
              <div>
                <p className='text-4xl font-bold text-gray-200 mb-8'>Education</p>
                <div>
                  <h2 className='text-xl font-bold text-green-500 flex items-center gap-1'><GoDotFill /> Diploma in Computer Science and Technology (2022 – Present)</h2>
                  <div className='px-5'>
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
