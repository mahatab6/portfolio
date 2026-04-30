import React from 'react';
import aboutimg from '../assets/aboutimage.jpg';
import { GoDotFill } from "react-icons/go";
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about-section" className="relative bg-[#070707] py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B477]/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className='w-11/12 md:w-9/12 mx-auto'>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl text-white font-bold inline-block relative'>
            About <span className="text-[#00B477]">Me</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00B477] rounded-full"></span>
          </h2>
        </div>

        <div className='flex flex-col lg:flex-row gap-16 items-center'>
          
          {/* Left Side: Image with Creative Frame */}
          <div className='flex-1 relative group'>
            <div className="absolute -inset-4 border-2 border-[#00B477]/20 rounded-2xl group-hover:border-[#00B477]/50 transition-colors duration-500"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                className="w-full max-w-md mx-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                src={aboutimg}
                alt="Md. Mahatab Hosen Raju"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Experience Tag floating */}
            {/* <div className="absolute -bottom-6 -right-6 bg-[#1A1A1A] border border-white/10 p-5 rounded-2xl shadow-xl backdrop-blur-md">
                <p className="text-[#00B477] font-bold text-2xl">30+</p>
                <p className="text-gray-400 text-xs uppercase font-semibold">Projects Done</p>
            </div> */}
          </div>
            
          {/* Right Side: Content */}
          <div className='flex-1 text-gray-300 space-y-6'>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaCode className="text-[#00B477]" /> My Story
              </h3>
              <p className='text-lg leading-relaxed'>
                Hi! I'm <span className='text-white font-semibold'>Md. Mahatab Hosen Raju</span>, a dedicated Full-Stack Developer specializing in the <span className='text-[#00B477]'>MERN & PERN stacks</span>. I bridge the gap between complex backend logic and seamless frontend experiences.
              </p>
              <p className='text-lg leading-relaxed'>
                With a strong foundation in <span className='text-white'>JavaScript and Next.js</span>, I build scalable SaaS MVPs and role-based dashboards that solve real-world problems. I'm driven by the challenge of turning a blank terminal into a fully functional digital product.
              </p>
            </div>

            {/* Interests / Tech Focus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
               <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B477]/40 transition-colors">
                  <FaLightbulb className="text-[#00B477] mb-2" />
                  <h4 className="text-white font-semibold">Current Focus</h4>
                  <p className="text-sm">AI Integration & Cloud Architecture (Docker/WSL2)</p>
               </div>
               <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B477]/40 transition-colors">
                  <GoDotFill className="text-[#00B477] mb-2" />
                  <h4 className="text-white font-semibold">Beyond Code</h4>
                  <p className="text-sm">Tech Blogging, Traveling, and Cricket</p>
               </div>
            </div>

            {/* Education Section */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-[#00B477]" /> Education
              </h3>
              
              <div className="relative pl-8 border-l-2 border-[#00B477]/30">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#00B477] rounded-full shadow-[0_0_10px_#00B477]"></div>
                
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all">
                  <span className="text-xs font-bold text-[#00B477] uppercase tracking-widest">2022 — 2025</span>
                  <h4 className='text-xl font-bold text-white mt-1'>Diploma in Computer Science & Technology</h4>
                  <p className='text-gray-400 font-medium'>Barishal Polytechnic Institute</p>
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