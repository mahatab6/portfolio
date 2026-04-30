import React from 'react';
import Logo from '../Reusable Components/Logo';
import { Link } from 'react-router';
import { AiFillHome } from 'react-icons/ai';
import { FaTools, FaProjectDiagram } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowDown } from "react-icons/fa";


const Navbar = () => {
  const links = (
    <>
      <li>
        <ScrollLink
          to="home-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          className="flex items-center gap-2 hover:text-[#00B477] transition-colors cursor-pointer"
        >
          <AiFillHome /> Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          className="flex items-center gap-2 hover:text-[#00B477] transition-colors cursor-pointer"
        >
          <FaTools /> About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="skill-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          className="flex items-center gap-2 hover:text-[#00B477] transition-colors cursor-pointer"
        >
          <FaTools /> Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="project-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          className="flex items-center gap-2 hover:text-[#00B477] transition-colors cursor-pointer"
        >
          <FaProjectDiagram /> Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active-link"
          className="flex items-center gap-2 hover:text-[#00B477] transition-colors cursor-pointer"
        >
          <MdContactMail /> Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    /* Glassmorphism Container */
    <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300">
      <div className="navbar w-11/12 md:w-9/12 mx-auto py-2 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="pr-5 lg:hidden text-white hover:text-[#00B477]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black/90 backdrop-blur-xl rounded-box mt-3 w-52 p-4 shadow-2xl border border-white/10 gap-3 text-white z-[100]"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            to="https://drive.google.com/file/d/1WhQDp8-YrDlqt5vB06cBHCEt0_kewkfZ/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-[#00B477] bg-transparent px-5 py-2 text-white hover:bg-[#00B477] hover:text-black transition-all duration-300 font-semibold text-sm group"
          >
            <FaArrowDown className="group-hover:animate-bounce" />
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;