import React from 'react';
import herogb from '../assets/portfoliobg.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaGithub, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';




const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${herogb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(60%)',
          height: 'full'
        }}
      ></div>

      <div className="relative z-10 w-9/12 mx-auto h-full flex flex-col py-10 lg:py-60 text-white space-y-3">
            <p className="text-xl">Hello, I'm</p>
            <h1 className="text-4xl font-bold">Md. Mahatab Hosen Raju</h1>

            <span className="text-white text-xl sm:text-2xl">
            I am a Web App Developer in-<span><br /></span> {' '}
            <TypeAnimation
                sequence={[
                'React.js.',
                1000,
                'Next.js.',
                1000,
                'Node.js.',
                1000,
                'JavaScript.',
                1000,
                'MERN Stack.',
                1000,
                'Express.js.',
                1000,
                'MongoDB.',
                1000,
                'Tailwind CSS.',
                1000,
                'Firebase.',
                1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#00B477] underline text-2xl font-semibold"
            />
            </span>

            <p className="text-xl py-5">
            🌐 Turning complex problems into simple web <br /> solutions using the MERN stack.
            </p>

            <div className="w-46">
            {/* Social Icons */}
            <div className="flex flex-1 space-x-2">
                <Link
                to="https://facebook.com/yourusername"
                target="_blank"
                className="btn bg-base-100 rounded-full p-2 hover:bg-[#00B477]"
                >
                <FaFacebookF size={25} />
                </Link>
                <Link
                to="https://github.com/yourusername"
                target="_blank"
                className="btn bg-base-100 rounded-full p-2 hover:bg-[#00B477]"
                >
                <FaGithub size={25} />
                </Link>
                <Link
                to="https://wa.me/yourphonenumber"
                target="_blank"
                className="btn bg-base-100 rounded-full p-2 hover:bg-[#00B477]"
                >
                <FaWhatsapp size={25} />
                </Link>
                <Link
                to="https://linkedin.com/in/yourusername"
                target="_blank"
                className="btn bg-base-100 rounded-full p-2 hover:bg-[#00B477]"
                >
                <FaLinkedinIn size={25} />
                </Link>
            </div>

            <div className="flex flex-1 justify-center mt-3 gap-1 px-5">
                <Link
                download
                to="/path/to/your/resume.pdf"
                target="_blank"
                className="rounded-md border border-[#00B477] btn bg-base-100  hover:bg-[#00B477]"
                >
                Resume
              </Link>
              <ScrollLink to="about" smooth={true} duration={500} className="rounded-md border  border-[#00B477] btn bg-base-100  hover:bg-[#00B477]" >About me</ScrollLink>
            </div>
            
          </div>
          
      </div>
    </div>
  );
};

export default Hero;
