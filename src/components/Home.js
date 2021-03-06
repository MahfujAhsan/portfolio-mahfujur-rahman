import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resume from "../assets/Mahfujur_Rahman_Resume.pdf";
import profile from "../assets/mahfujur_rahman.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavHashLink } from 'react-router-hash-link';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import MyProjects from './MyProjects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';

const Home = () => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <div className='overflow-hidden'>
            <div className='container container-md max-vh-100 d-flex flex-column justify-content-center align-items-center text-white' id='home'>
                <div className='text-center mt-5'>
                    <h4>HeY, I'm</h4>
                    <h1 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">Mahfujur Rahman</h1>
                    <h3 className='fs-4'>Jr. MERN Stack Developer</h3>
                </div>
                <div className='mt-4 d-flex justify-content-center'>
                    <Link to={resume} target="_blank" download="Mahfujur_Rahman_Resume" className='border border-2 text-white rounded-3 px-2 px-lg-4 py-3 bg-transparent me-4 fw-bold text-decoration-none'>Download CV</Link>
                    <a href="https://www.linkedin.com/in/mahfujurahman/" target="_blank" rel='nooppener noreferrer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: isHovering ? '#fff' : "#6E4035", color: isHovering ? '#000' : '#fff', transition: 'background-color 0.5s ease', border: '2px solid #6E4035' }} className='rounded-3 px-2 px-lg-4 py-3 fw-bold ms-4 text-decoration-none'>Let's Talk</a>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 mx-auto mt-5'>
                    <div className='d-flex flex-column justify-content-between'>
                        <a href="https://www.linkedin.com/in/mahfujurahman/" target="_blank" rel='nooppener noreferrer' className='text-decoration-none text-white'><FontAwesomeIcon icon={faLinkedin} size="2x" title='Linkedin' beatFade /></a>
                        <a href="https://github.com/MahfujAhsan" target="_blank" rel='nooppener noreferrer' className='text-decoration-none text-white'><FontAwesomeIcon icon={faGithub} size="2x" className='my-5' title='GitHub' beatFade /></a>
                        <a href="https://www.facebook.com/AhsaanMahfuj" rel='nooppener noreferrer' target="_blank" className='text-decoration-none text-white'><FontAwesomeIcon icon={faFacebook} size="2x" title='Facebook' beatFade /></a>

                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='w-50 d-flex justify-content-center align-items-center'>
                        <img className='rounded-3 img-fluid' src={profile} alt="" />
                    </div>
                    <NavHashLink to="#about" role="button" className='d-flex flex-column justify-content-end align-items-end fs-6 font-monospace lh-1 text-decoration-none text-white font-bold'>
                        <FontAwesomeIcon icon={faUpDown} size="1x" bounce />
                        <span>S</span>
                        <span>c</span>
                        <span>r</span>
                        <span>o</span>
                        <span>l</span>
                        <span>l</span>
                        <br />
                        <span>D</span>
                        <span>o</span>
                        <span>w</span>
                        <span>n</span>
                    </NavHashLink>
                </div>
            </div>
            <Skills />
            <About />
            <MyProjects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;