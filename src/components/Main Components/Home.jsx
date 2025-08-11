import React from 'react';
import Hero from '../../pages/Hero';
import AboutMe from '../../pages/AboutMe';
import { Helmet } from 'react-helmet';
import Skills from "../../pages/Skills";
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mahatab Portfolio</title>
            </Helmet>
            <Element name='home-section'>
                <Hero/>
            </Element>
            <Element name='about-section'>
                <AboutMe />
            </Element>
            <Element name='skill-section'>
                <Skills/>
            </Element>
            <Element name='project-section'>
                <Projects/>
            </Element>
            <Element name='contact-section'>
                <Contact/>
            </Element>
        </div>
    );
};

export default Home;