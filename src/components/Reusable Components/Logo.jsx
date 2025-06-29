import React from 'react';
import code from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className='flex items-center '>
            <img className='w-[35px]' src={code} alt="" />
            <p className='text-xl font-bold pl-1 text-[#00B477]'>mahatab</p>
        </Link>
    );
};

export default Logo;