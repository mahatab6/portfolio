import React from 'react';
import Hero from '../../pages/Hero';
import AboutMe from '../../pages/AboutMe';
import { Helmet } from 'react-helmet';
import Skills from "../../pages/Skills";
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mahatab Portfolio</title>
            </Helmet>
            <Hero/>
            <AboutMe />
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;