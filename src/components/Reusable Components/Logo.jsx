import React from 'react';
import code from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center '>
            <img className='w-[35px]' src={code} alt="" />
            <p className='text-xl font-bold pl-1 text-[#00B477]'>mahatab</p>
        </div>
    );
};

export default Logo;