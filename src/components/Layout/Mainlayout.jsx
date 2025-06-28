import React from 'react';
import Navbar from '../Main Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Main Components/Footer';

const Mainlayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar/>
            </header>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;