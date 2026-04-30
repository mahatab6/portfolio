import React from "react";
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

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#070707] flex items-center overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${herogb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(30%)",
        }}
      ></div>

      {/* Animated Gradient Orbs for Depth */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#00B477]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#006F74]/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      {/* Content Container */}
      <div className="relative z-10 w-11/12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 py-20">
        {/* Left Section: Info */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-[#00B477] font-medium tracking-widest uppercase text-sm">
              Available for Projects
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Mahatab Hosen Raju
            </h1>
            <div className="h-20 md:h-auto">
              {" "}
              {/* Fixed height to prevent layout shift */}
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Next.js & Node.js Expert",
                  1500,
                  "SaaS MVP Specialist",
                  1500,
                  "AI Integration Enthusiast",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-gray-300 block"
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
            Building the future one stack at a time. I craft high-performance
            web applications with a focus on user experience and scalable
            architecture.
          </p>

          {/* Socials & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/mahatab6" },
                {
                  icon: <FaLinkedinIn />,
                  link: "http://www.linkedin.com/in/mahatab6",
                },
                { icon: <FaWhatsapp />, link: "https://wa.me/+8801743643156" },
              ].map((social, index) => (
                <Link
                  key={index}
                  to={social.link}
                  target="_blank"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#00B477] hover:border-[#00B477] transition-all duration-300"
                >
                  {React.cloneElement(social.icon, { size: 22 })}
                </Link>
              ))}
            </div>

            <Link
              to="https://drive.google.com/file/d/1WhQDp8-YrDlqt5vB06cBHCEt0_kewkfZ/view?usp=sharing"
              target="_blank"
              className="group flex items-center gap-2 bg-[#00B477] hover:bg-[#00d48c] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FaArrowDown className="group-hover:animate-bounce" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Right Section: Tall Portrait Image with Refined Glow & Accents */}
        <div className="flex-1 flex justify-center md:justify-end relative mt-12 md:mt-0">
          <div className="absolute inset-0 m-auto w-72 h-full md:w-[400px] bg-[#00B477]/25 rounded-full blur-[100px] opacity-80 z-0"></div>

          <div className="relative z-10 aspect-[2/3] w-[280px] sm:w-[320px] md:w-[380px] lg:w-[408px] group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#00B477]/40 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <img
              className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-[0_0_30px_rgba(0,180,119,0.15)] transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[#00B477]/40"
              src={heroimage}
              alt="Mahatab Hosen Raju - Full Stack Developer"
            />

            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-[#00B477] rounded-bl-3xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
