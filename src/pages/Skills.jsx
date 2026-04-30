import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub, FaStripe 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
import { 
  SiTailwindcss, SiFirebase, SiMongodb, SiExpress, 
  SiRedux, SiReactquery, SiSupabase, SiNextdotjs, SiPrisma, 
  SiPostgresql, SiJsonwebtokens 
} from "react-icons/si";
import { TbBrandAuth0 } from "react-icons/tb";

const skills = [
  { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML" },
  { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS" },
  { icon: <SiTailwindcss />, color: "text-cyan-400", name: "Tailwind" },
  { icon: <FaJs />, color: "text-yellow-400", name: "JavaScript" },
  { icon: <FaReact />, color: "text-blue-400", name: "React" },
  { icon: <SiNextdotjs />, color: "text-white", name: "Next.js" },
  { icon: <SiRedux />, color: "text-purple-500", name: "Redux" },
  { icon: <SiReactquery />, color: "text-rose-500", name: "React Query" },
  { icon: <FaNode />, color: "text-green-500", name: "Node.js" },
  { icon: <SiExpress />, color: "text-gray-400", name: "Express" },
  { icon: <SiMongodb />, color: "text-green-600", name: "MongoDB" },
  { icon: <SiPostgresql />, color: "text-blue-600", name: "PostgreSQL" },
  { icon: <SiPrisma />, color: "text-white", name: "Prisma" },
  { icon: <SiFirebase />, color: "text-yellow-500", name: "Firebase" },
  { icon: <SiSupabase />, color: "text-emerald-500", name: "Supabase" },
  { icon: <SiJsonwebtokens />, color: "text-pink-500", name: "JWT" },
  { icon: <TbBrandAuth0 />, color: "text-orange-400", name: "Better-Auth" },
  { icon: <FaStripe />, color: "text-indigo-500", name: "Stripe" },
  { icon: <FaGithub />, color: "text-white", name: "GitHub" },
];

const SkillsGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation: Staggered Fade-in & Scale-up
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });

      // Continuous Floating Animation
      gsap.to(".skill-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skill-section" className="py-24 bg-[#070707] relative overflow-hidden" ref={gridRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00B477]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white font-bold inline-block relative">
            Technical <span className="text-[#00B477]">Arsenal</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00B477] rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            The modern technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-[#00B477]/10 hover:border-[#00B477]/50"
            >
              {/* Tooltip on Hover */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 bg-[#00B477] text-black text-xs font-bold px-2 py-1 rounded">
                {skill.name}
              </span>

              {/* Logo */}
              <div className={`text-4xl md:text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;