import React from 'react';
import Hero from '../../pages/Hero';
import AboutMe from '../../pages/AboutMe';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mahatab Portfolio</title>
            </Helmet>
            <Hero/>
            <AboutMe />
        </div>
    );
};

export default Home;