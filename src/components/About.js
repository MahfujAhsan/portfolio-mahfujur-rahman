import { faLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import photo from "../assets/mahfuj5.png"

const About = () => {
    return (
        <div className='container mt-5 mh-100' id='about'>
            <div className='text-center text-white'>
                <h4>Get To Know</h4>
                <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">About Me</h2>
            </div>
            <div className='row g-5 py-5 d-flex justify-content-between align-items-center'>
                <img data-aos="zoom-in-down" data-aos-duration="1000" className='col-12 col-lg-5 img-fluid mx-auto rounded-3' src={photo} alt="" />
                <div className='col-12 col-lg-7'>
                    <p className='text-white fs-6'>HeY, I'm Mahfujur Rahman. This is introducing you to a self-learner/self-motivated programmer. I am a Front End developer with builds websites and web applications.</p>
                    <p className='text-white'>
                        I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. I’m also a people-person. I love meeting new people and learning about their lives and their backgrounds.
                    </p>
                    <div className='text-white fs-6'><p>
                        I am highly organized. I always take notes, and I use a series of tools to help myself stay on top of deadlines. So, Seeking a role as a developer to continue my passion & for doing something creative or is this will be crazy? <FontAwesomeIcon icon={faLaughBeam} size="xl"/>
                    </p>
                        <p className='mt-4 mb-2'><FontAwesomeIcon icon={faMinus} /> Feel free to contact me:</p>
                        <FontAwesomeIcon style={{ color: '#6E4035' }} icon={faArrowRight} size="xl" />  <a className='text-white text-decoration-none fw-bold' href="mailto: mahfujur.rahman1@outlook.com">mahfujur.rahman1@outlook.com</a> 
                        <p className='my-2 '><FontAwesomeIcon icon={faMinus} /> Take a look at my work :</p>
                        <FontAwesomeIcon style={{ color: '#6E4035' }} icon={faArrowRight} size="xl" /> <a className='text-white text-decoration-none fw-bold' href="https://github.com/MahfujAhsan">GitHub</a></div>
                </div>
            </div>
        </div>
    );
};

export default About;