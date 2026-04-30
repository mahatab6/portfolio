import React, { useEffect, useRef } from "react";
import herogb from "../assets/portfoliobg.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
  FaArrowDown,
} from "react-icons/fa";
import { Link } from "react-router";
import heroimage from "../assets/mahatab-profile.png";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const q = gsap.utils.selector(heroRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(q(".hero-text-content > *"), {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
        .from(
          q(".hero-image-container"),
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.8",
        )
        .from(
          q(".social-btn"),
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.5",
        );

      // Floating animation for profile image
      gsap.to(q(".hero-image"), {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Mouse move glow effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(q(".glow-orb"), {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen bg-[#070707] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${herogb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(25%)",
        }}
      ></div>

      {/* Glow Orbs */}
      <div className="glow-orb absolute top-1/4 -left-20 w-80 h-80 bg-[#00B477]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="glow-orb absolute bottom-1/4 -right-20 w-80 h-80 bg-[#006F74]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 py-20 lg:py-32">
        {/* Left Side - Text Content */}
        <div className="hero-text-content flex-1 text-center md:text-left space-y-6">
          <div className="space-y-3">
            <p className="text-[#00B477] font-semibold tracking-[0.3em] uppercase text-xs">
              Available for Projects
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
              Mahatab <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Hosen Raju
              </span>
            </h1>

            <div className="h-16 flex items-center justify-center md:justify-start">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Next.js & Node.js Expert",
                  1500,
                  "SaaS MVP Specialist",
                  1500,
                  "MERN & PERN Expert",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-medium text-[#00B477]"
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Crafting high-performance web applications with a focus on user
            experience and scalable architecture. Let's turn your vision into
            code.
          </p>

          {/* Social Icons + Resume Button */}
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/mahatab6"
                target="_blank"
                rel="noopener noreferrer"
                className=" group p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-[#00B477]/50 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <FaGithub
                  size={24}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/mahatab6"
                target="_blank"
                rel="noopener noreferrer"
                className=" group p-4 rounded-2xl bg-white/5 border border-white/10 text-[#0077B5] hover:bg-white/10 hover:border-[#00B477]/50 hover:text-[#0077B5] transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedinIn
                  size={24}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+8801743643156"
                target="_blank"
                rel="noopener noreferrer"
                className=" group p-4 rounded-2xl bg-white/5 border border-white/10 text-[#25D366] hover:bg-white/10 hover:border-[#00B477]/50 hover:text-[#25D366] transition-all duration-300 flex items-center justify-center"
              >
                <FaWhatsapp
                  size={24}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            </div>

            {/* Download Resume Button */}
            <Link
              to="https://drive.google.com/file/d/1WhQDp8-YrDlqt5vB06cBHCEt0_kewkfZ/view?usp=sharing"
              target="_blank"
              className="group flex items-center gap-3 bg-[#00B477] hover:bg-[#00d48c] text-black font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform active:scale-95 shadow-[0_10px_20px_rgba(0,180,119,0.2)]"
            >
              <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="hero-image-container flex-1 flex justify-center md:justify-end relative">
          <div className="absolute inset-0 m-auto w-72 h-72 md:w-[450px] md:h-[450px] bg-[#00B477]/20 rounded-full blur-[120px] z-0"></div>

          <div className="relative z-10 aspect-[3/4] w-[300px] md:w-[420px] group">
            <div className="absolute -inset-2 bg-gradient-to-b from-[#00B477]/30 to-transparent rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            <img
              className="hero-image relative w-full h-full object-cover rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-[#00B477]/50"
              src={heroimage}
              alt="Mahatab Hosen Raju"
            />

            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-[#00B477] rounded-br-[2rem] opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-[#00B477] to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
