import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaReact } from "react-icons/fa";
import { SiAxios, SiExpress, SiFirebase, SiMongodb, SiNodedotjs, SiReacthookform, SiReactrouter, SiStripe, SiTailwindcss } from "react-icons/si";


const projects = [
  {
    title: "GreenMind!",
    description:
      "GreenMind is a modern full-stack web application that encourages sustainable, plant-based living through a beautiful, responsive user interface and powerful backend support. Built with React, TailwindCSS, Node.js, Express, and MongoDB, it offers an intuitive experience for managing plant care and promotes eco-friendly habits.",
    link: "https://i.ibb.co.com/xSX5zFpW/Home-Green-Mind-08-08-2025-09-59-AM.png",
    color: "#00B477",
    githubLink: "https://github.com/mahatab6/GreenMind",
    liveLink: "https://plant-care-60.netlify.app/",
    icon: [
      <SiMongodb size={25} className="text-green-600" title="MongoDB" key="mongodb" />,
      <SiExpress size={25} className="text-gray-700" title="Express.js" key="express" />,
      <SiNodedotjs size={25} className="text-green-500" title="Node.js" key="nodejs" />,
      <SiTailwindcss size={25} className="text-teal-400" title="Tailwind CSS 4" />,
      <SiReactrouter size={25} className="text-purple-600" title="React Router v7" />,
      <SiFirebase size={25} className="text-yellow-400" title="Firebase (Authentication)" />,
      <FaReact size={25} className="text-blue-400" />,
    ],
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "React Router", "Firebase"],
    challenges: "Integrating Firebase authentication with a custom backend and ensuring responsive design across devices.",
    futurePlans: "Add AI-based plant care recommendations and a community feature for user tips.",
  },
  {
    title: "🌐 NodeTalk",
    description:
      "NodeTalk Client is the frontend of a forum platform built with modern React and Tailwind. It provides authentication (Firebase), post creation and moderation tools, tag-based filtering, analytics views, and a Stripe-powered premium membership flow. The UI focuses on speed, accessibility, and mobile responsiveness.",
    link: "https://i.ibb.co.com/VYPFgnVT/NodeTalk.png",
    color: "#D0D2E6",
    githubLink: "https://github.com/mahatab6/Node-Talk-Client-Side",
    liveLink: "https://nodetalk-12.netlify.app/",
    icon: [
      <FaReact size={25} className="text-blue-400" title="React 19" />,
      <SiMongodb size={25} className="text-green-600" title="MongoDB" key="mongodb" />,
      <SiExpress size={25} className="text-gray-700" title="Express.js" key="express" />,
      <SiNodedotjs size={25} className="text-green-500" title="Node.js" key="nodejs" />,
      <SiTailwindcss size={25} className="text-teal-400" title="Tailwind CSS 4" />,
      <SiReactrouter size={25} className="text-purple-600" title="React Router v7" />,
      <SiFirebase size={25} className="text-yellow-400" title="Firebase (Authentication)" />,
      <SiStripe size={25} className="text-indigo-600" title="Stripe (Payments)" />,
      <SiAxios size={25} className="text-blue-600" title="Axios" key="axios" />,
      <SiReacthookform size={25} className="text-purple-600" title="React Hook Form" key="hookform" />,
    ],
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Axios", "React Hook Form"],
    challenges: "Implementing real-time post filtering and ensuring secure Stripe payment integration.",
    futurePlans: "Add real-time chat functionality and improve analytics with custom dashboards.",
  },
  {
    title: "EduHub!",
    description:
      "EduHub – Digital Course Selling Platform EduHub is a full-stack digital course marketplace designed for seamless enrollment, course browsing, and learning. With modern UI components, robust backend APIs, and responsive design, EduHub provides an intuitive platform for both learners and admins.",
    link: "https://i.ibb.co.com/27fm9Lsx/Home-Edu-Hub-08-12-2025-01-41-AM.png",
    color: "#FF850A",
    githubLink: "https://github.com/mahatab6/EduHub",
    liveLink: "https://eduhub-17199.netlify.app/",
    icon: [
      <SiMongodb size={25} className="text-green-600" title="MongoDB" key="mongodb" />,
      <SiExpress size={25} className="text-gray-700" title="Express.js" key="express" />,
      <SiNodedotjs size={25} className="text-green-500" title="Node.js" key="nodejs" />,
      <SiTailwindcss size={25} className="text-teal-400" title="Tailwind CSS 4" />,
      <SiReactrouter size={25} className="text-purple-600" title="React Router v7" />,
      <SiFirebase size={25} className="text-yellow-400" title="Firebase (Authentication)" />,
      <FaReact size={25} className="text-blue-400" />,
    ],
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "React Router", "Firebase"],
    challenges: "Building a scalable course management system and optimizing API performance.",
    futurePlans: "Integrate video streaming for courses and add a review system for user feedback.",
  },
];


export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // New state to track the selected project for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;
      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };
    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  // Function to open modal with selected project data
  const openModal = (project) => {
    setSelectedProject(project);
    document.getElementById('my_modal_1').showModal();
  };

  return (
    <ReactLenis root>
      <main className="bg-[#060407] min-h-screen" ref={container}>
        <section className="text-white bg-[#060407] ">
          <h1 className=" text-4xl font-bold text-green-400 text-center pt-20">My Projects</h1>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project?.githubLink}
                liveLink={project?.liveLink}
                detailslink={project?.detailslink}
                icon={project?.icon}
                challenges={project?.challenges}
                techStack={project?.techStack}
                futurePlans={project?.futurePlans}
                onDetailsClick={() => openModal(project)} // Pass click handler
              />
            );
          })}
        </section>
      </main>

      
      {/* Single modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-5xl">
          {selectedProject ? (
            <>
              {/* Project Image */}
              <div className="w-full h-100 overflow-y-auto rounded-lg mb-4">
                <img
                  src={selectedProject.link}
                  alt={selectedProject.title}
                  className="w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-2xl mb-2">{selectedProject.title}</h3>

              {/* Tech Stack */}
              {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold">Main Technology Stack Used:</h4>
                  <ul className="list-disc pl-5">
                    {selectedProject.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Brief Description */}
              <div className="mb-4">
                <h4 className="font-semibold">Brief Description:</h4>
                <p>{selectedProject.description}</p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mb-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Project
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub (Client)
                  </a>
                )}
              </div>

              {/* Challenges */}
              {selectedProject.challenges && (
                <div className="mb-4">
                  <h4 className="font-semibold">Challenges Faced:</h4>
                  <p>{selectedProject.challenges}</p>
                </div>
              )}

              {/* Future Plans */}
              {selectedProject.futurePlans && (
                <div className="mb-4">
                  <h4 className="font-semibold">Potential Improvements & Future Plans:</h4>
                  <p>{selectedProject.futurePlans}</p>
                </div>
              )}
            </>
          ) : (
            <p>No project selected.</p>
          )}

          {/* Close Button */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  icon,
  onDetailsClick,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-y-auto">
            <motion.img
              src={url}
              alt={title}
              className="w-full "
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
              <p className="mt-4 md:mt-auto pt-4 grid grid-cols-5 md:grid-cols-10 gap-2">
                {icon}
              </p>
            </div>
            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
                <motion.div 
                  onClick={onDetailsClick} 
                  className="group flex items-center gap-2 hover:cursor-pointer"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Details
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};