import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiVite, SiExpress } from "react-icons/si";
import { PiBracketsCurlyDuotone } from "react-icons/pi";

const skills = [
  {
    icon: <FaHtml5 size={50} className="text-orange-500" />,
    title: "HTML",
    description: "Semantic structure and layout foundation.",
  },
  {
    icon: <FaCss3Alt size={50} className="text-blue-500" />,
    title: "CSS",
    description: "Custom design and styling of websites.",
  },
  {
    icon: <SiTailwindcss size={50} className="text-cyan-400" />,
    title: "TailwindCSS",
    description: "Utility-first framework for fast UI building.",
  },
  {
    icon: <FaJs size={50} className="text-yellow-400" />,
    title: "JavaScript",
    description: "Core scripting language for interactivity.",
  },
  {
    icon: <FaReact size={50} className="text-blue-400" />,
    title: "React",
    description: "Component-based UI development.",
  },
  {
    icon: <SiFirebase size={50} className="text-yellow-500" />,
    title: "Firebase",
    description: "Authentication and real-time database.",
  },
  {
    icon: <FaNode size={50} className="text-green-500" />,
    title: "Node.js",
    description: "JavaScript runtime for backend development.",
  },
  {
    icon: <SiExpress size={50} className="text-white" />,
    title: "Express.js",
    description: "Fast backend web application framework.",
  },
  {
    icon: <SiMongodb size={50} className="text-green-600" />,
    title: "MongoDB",
    description: "NoSQL database for storing JSON-like data.",
  },
  {
    icon: <SiVite size={50} className="text-purple-500" />,
    title: "Vite",
    description: "Fast development server and bundler.",
  },
  {
    icon: <PiBracketsCurlyDuotone size={50} className="text-rose-400" />,
    title: "Shadcn/UI",
    description: "Beautiful UI components for React.",
  },
  {
    icon: <FaGithub size={50} className="text-white" />,
    title: "Git & GitHub",
    description: "Version control and collaboration.",
  },
];

const SkillsGrid = () => {
  return (
    <div className="py-10 px-5 bg-[#0F172A] h-screen-full">
      <h1 className="text-4xl font-bold text-green-400 text-center mb-10">My Skills</h1>
      
      <div className="w-9/12 mx-auto lg:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1E293B] hover:shadow-2xl p-5 text-center space-y-2 w-full rounded-2xl border-2 border-transparent hover:border-blue-500 transition duration-300"
          >
            <div className="flex justify-center">{skill.icon}</div>
            <h2 className="text-xl font-bold text-white">{skill.title}</h2>
            <p className="text-gray-300 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
