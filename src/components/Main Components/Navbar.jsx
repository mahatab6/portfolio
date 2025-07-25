import React from 'react';
import Logo from '../Reusable Components/Logo';
import { Link, NavLink } from 'react-router';
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
        
        <div className='bg-black shadow-sm '>
            <div className="navbar w-9/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                    </div>
                    <Logo/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                    download
                    to="https://drive.google.com/file/d/1zEcNjNKyTWByo9u5RQ6EWF4b-MMiHl4U/view"
                    target="_blank"
                    className="rounded-md border-none border-[#00B477] btn bg-base-100  hover:bg-[#00B477]"
                    >
                    Resume
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;