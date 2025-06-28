import React from 'react';
import Logo from '../Reusable Components/Logo';
import { NavLink } from 'react-router';
import { AiFillHome } from 'react-icons/ai';
import { FaTools, FaBriefcase, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';


const Navbar = () => {

    const link = (
        <>
            <li>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-[#00B477] text-base flex items-center gap-2" : "flex items-center gap-2"}>
                <AiFillHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/skills' className={({ isActive }) => isActive ? "text-[#00B477] text-base flex items-center gap-2" : "flex items-center gap-2"}>
                <FaTools /> Skills
                </NavLink>
            </li>
            <li>
                <NavLink to='/experience' className={({ isActive }) => isActive ? "text-[#00B477] text-base flex items-center gap-2" : "flex items-center gap-2"}>
                <FaBriefcase /> Experience
                </NavLink>
            </li>
            <li>
                <NavLink to='/education' className={({ isActive }) => isActive ? "text-[#00B477] text-base flex items-center gap-2" : "flex items-center gap-2"}>
                <FaGraduationCap /> Education
                </NavLink>
            </li>
            <li>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "text-[#00B477] text-base flex items-center gap-2" : "flex items-center gap-2"}>
                <FaProjectDiagram /> Projects
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({ isActive }) => isActive ? "text-[#00B477] text-base flex items-center gap-2" : "flex items-center gap-2"}>
                <MdContactMail /> Contact
                </NavLink>
            </li>
        </>

    )

    return (
        
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <Logo/>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {link}
                    </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;