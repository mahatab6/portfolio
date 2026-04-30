import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub, FaStripe 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiFirebase, SiMongodb, SiExpress, 
  SiRedux, SiReactquery, SiSupabase, SiNextdotjs, SiPrisma, 
  SiPostgresql, SiJsonwebtokens 
} from "react-icons/si";
import { TbBrandAuth0 } from "react-icons/tb";

// Register ScrollTrigger outside the component
gsap.registerPlugin(ScrollTrigger);

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
    // 1. Initial refresh to catch the correct layout height
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // ENTRANCE ANIMATION
      // We use a "fromTo" to ensure the starting and ending states are locked
      gsap.fromTo(".skill-card", 
        { 
          y: 60, 
          opacity: 0, 
          scale: 0.8 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%", // Triggers when the top of the grid is 85% down the screen
            toggleActions: "play none none none", // Only play once
          },
        }
      );

      // CONTINUOUS FLOATING ANIMATION
      gsap.to(".skill-card", {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    }, gridRef);

    // 2. Extra refresh after images/content load
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      window.removeEventListener("load", () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <section 
      id="skill-section" 
      className="py-24 bg-[#070707] relative" 
      ref={gridRef}
    >
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white font-bold inline-block relative">
            Technical <span className="text-[#00B477]">Arsenal</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00B477] rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            The modern technologies I use to build robust, scalable applications.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-[#00B477]/5 hover:border-[#00B477]/40"
            >
              {/* Tooltip */}
              <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all duration-300 bg-[#00B477] text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-tighter">
                {skill.name}
              </span>

              {/* Logo with Glow on Hover */}
              <div className={`text-4xl md:text-5xl ${skill.color} filter drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(0,180,119,0.5)] transition-all duration-500 group-hover:scale-110`}>
                {skill.icon}
              </div>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(0,180,119,0.1)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;