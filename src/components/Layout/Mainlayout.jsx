import React from 'react';
import Navbar from '../Main Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Main Components/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;