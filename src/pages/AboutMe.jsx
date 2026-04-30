import React, { useEffect, useRef } from 'react';
import aboutimg from '../assets/aboutimage.jpg';
import { GoDotFill } from "react-icons/go";
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register outside to avoid redundant calls
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    // Initial refresh to ensure geometry is correct
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // 1. Image and Frame Entrance
      gsap.from(q(".about-image-wrapper"), {
        scrollTrigger: {
          trigger: q(".about-image-wrapper"),
          start: "top 85%",
        },
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 2. Main Content Stagger
      gsap.from(q(".about-content-stagger > *"), {
        scrollTrigger: {
          trigger: q(".about-content-stagger"),
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // 3. Education Timeline Logic
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: q(".education-timeline"),
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(q(".timeline-line"), 
        { scaleY: 0 }, 
        { scaleY: 1, transformOrigin: "top", duration: 1, ease: "power1.inOut" }
      )
      .fromTo(q(".timeline-dot"), 
        { scale: 0 }, 
        { scale: 1, duration: 0.4, ease: "back.out(1.7)" }, 
        "-=0.5"
      )
      .fromTo(q(".education-card"), 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
        "-=0.3"
      );

    }, sectionRef);

    // Refresh on window load to handle images popping in
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      window.removeEventListener("load", () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about-section" className="relative bg-[#070707] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B477]/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className='w-11/12 md:w-9/12 mx-auto'>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className='text-4xl md:text-5xl text-white font-bold inline-block relative'>
            About <span className="text-[#00B477]">Me</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00B477] rounded-full"></span>
          </h2>
        </div>

        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          
          {/* Left Side: Image */}
          <div className='about-image-wrapper flex-1 relative group w-full'>
            <div className="absolute -inset-4 border-2 border-[#00B477]/20 rounded-2xl group-hover:border-[#00B477]/50 transition-colors duration-500"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                src={aboutimg}
                alt="Md. Mahatab Hosen Raju"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>
            
          {/* Right Side: Content */}
          <div className='about-content-stagger flex-[1.2] text-gray-300 space-y-8'>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaCode className="text-[#00B477]" /> My Story
              </h3>
              <p className='text-lg leading-relaxed'>
                Hi! I'm <span className='text-white font-semibold'>Md. Mahatab Hosen Raju</span>, a dedicated Full-Stack Developer specializing in the <span className='text-[#00B477]'>MERN & PERN stacks</span>. I bridge the gap between complex backend logic and seamless frontend experiences.
              </p>
              <p className='text-lg leading-relaxed text-gray-400'>
                With a strong foundation in <span className='text-white'>JavaScript and Next.js</span>, I build scalable SaaS MVPs and role-based dashboards that solve real-world problems.
              </p>
            </div>

            {/* Interests / Tech Focus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B477]/40 transition-all group">
                  <FaLightbulb className="text-[#00B477] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold">Current Focus</h4>
                  <p className="text-sm text-gray-400">AI Integration & Cloud Architecture (Docker/WSL2)</p>
               </div>
               <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B477]/40 transition-all group">
                  <GoDotFill className="text-[#00B477] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold">Beyond Code</h4>
                  <p className="text-sm text-gray-400">Tech Blogging, Traveling, and Cricket</p>
               </div>
            </div>

            {/* Education Section */}
            <div className="education-timeline pt-4">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-[#00B477]" /> Education
              </h3>
              
              <div className="relative pl-8 min-h-[120px]">
                {/* Timeline Line */}
                <div className="timeline-line absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#00B477] to-transparent origin-top will-change-transform"></div>
                
                {/* Timeline Dot */}
                <div className="timeline-dot absolute -left-[7px] top-0 w-4 h-4 bg-[#00B477] rounded-full shadow-[0_0_15px_#00B477] z-10"></div>
                
                <div className="education-card bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-all group">
                  <span className="text-xs font-bold text-[#00B477] uppercase tracking-[0.2em]">2022 — 2025</span>
                  <h4 className='text-xl font-bold text-white mt-2 group-hover:text-[#00B477] transition-colors'>Diploma in Computer Science & Technology</h4>
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