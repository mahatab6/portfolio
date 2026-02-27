import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub, FaStripe 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiFirebase, SiMongodb, SiVite, SiExpress, 
  SiRedux, SiReactquery, SiSupabase, SiNextdotjs, SiPrisma, 
  SiPostgresql, SiJsonwebtokens 
} from "react-icons/si";
import { TbBrandAuth0 } from "react-icons/tb";

const skills = [
  // FRONT-END
  {
    icon: <FaHtml5 size={50} className="text-orange-500" />,
    title: "HTML",
    description: "Semantic structure and layout foundation.",
    category: "Frontend"
  },
  {
    icon: <FaCss3Alt size={50} className="text-blue-500" />,
    title: "CSS",
    description: "Custom design and styling of websites.",
    category: "Frontend"
  },
  {
    icon: <SiTailwindcss size={50} className="text-cyan-400" />,
    title: "Tailwind CSS",
    description: "Utility-first framework for fast UI building.",
    category: "Frontend"
  },
  {
    icon: <FaJs size={50} className="text-yellow-400" />,
    title: "JavaScript",
    description: "Core scripting language for interactivity.",
    category: "Frontend"
  },
  {
    icon: <FaReact size={50} className="text-blue-400" />,
    title: "React.js",
    description: "Component-based UI development.",
    category: "Frontend"
  },
  {
    icon: <SiRedux size={50} className="text-purple-500" />,
    title: "Redux RTK",
    description: "Advanced state management and logic.",
    category: "Frontend"
  },
  {
    icon: <SiReactquery size={50} className="text-rose-500" />,
    title: "React Query",
    description: "Server-state management and data fetching.",
    category: "Frontend"
  },
  {
    icon: <SiNextdotjs size={50} className="text-white" />,
    title: "Next.js",
    description: "Full-stack React framework for production.",
    category: "Frontend"
  },
  // BACK-END & DB
  {
    icon: <FaNode size={50} className="text-green-500" />,
    title: "Node.js",
    description: "JavaScript runtime for backend development.",
    category: "Backend"
  },
  {
    icon: <SiExpress size={50} className="text-gray-400" />,
    title: "Express.js",
    description: "Fast backend web application framework.",
    category: "Backend"
  },
  {
    icon: <SiMongodb size={50} className="text-green-600" />,
    title: "MongoDB",
    description: "NoSQL database for flexible data storage.",
    category: "Database"
  },
  {
    icon: <SiPostgresql size={50} className="text-blue-600" />,
    title: "PostgreSQL",
    description: "Powerful open-source relational database.",
    category: "Database"
  },
  {
    icon: <SiPrisma size={50} className="text-white" />,
    title: "Prisma ORM",
    description: "Next-generation Node.js and TypeScript ORM.",
    category: "Backend"
  },
  {
    icon: <SiFirebase size={50} className="text-yellow-500" />,
    title: "Firebase",
    description: "Authentication and real-time cloud services.",
    category: "Backend"
  },
  {
    icon: <SiSupabase size={50} className="text-emerald-500" />,
    title: "Supabase",
    description: "The open source Firebase alternative.",
    category: "Backend"
  },
  {
    icon: <SiJsonwebtokens size={50} className="text-pink-500" />,
    title: "JWT",
    description: "Secure data transmission using JSON tokens.",
    category: "Auth"
  },
  {
    icon: <TbBrandAuth0 size={50} className="text-orange-400" />,
    title: "Better-Auth",
    description: "Comprehensive authentication for modern apps.",
    category: "Auth"
  },
  {
    icon: <FaStripe size={50} className="text-indigo-500" />,
    title: "Stripe",
    description: "Payment processing integration and management.",
    category: "Backend"
  }
];

const SkillsGrid = () => {
  return (
    <div className="py-10 px-5 bg-[#060407] min-h-screen">

      <h1 className="text-4xl font-bold text-green-400 text-center py-10">My Skills</h1>
      
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
