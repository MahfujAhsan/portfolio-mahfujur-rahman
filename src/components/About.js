import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faHammer, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
                <img className='col-12 col-lg-5 rounded-3 img-fluid mx-auto rounded-3 shadow-lg' src={photo} alt="" />
                <div className='col-12 col-lg-7'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className='text-white fs-4 text-center'><FontAwesomeIcon icon={faTrophy} className="text-primary" size='xl' /> Skills</h2>
                            <div className='text-white d-flex justify-content-between mt-5'>
                                <div className='text-start'>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> HTML5</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> CSS3</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> React-Bootstrap</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> TailwindCss</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Material UI</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Firebase</p>
                                </div>
                                <div className='text-start'>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Javascript (ES6)</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> ReactJS</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> NodeJS</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> ExpressJS</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> MongoDB</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> JWT Token</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className='text-white fs-4 text-center'><FontAwesomeIcon icon={faHammer} className="text-primary" size='xl' /> Tools</h2>
                            <div className='text-white mt-5 d-flex justify-content-center'>
                                <div className='text-start'>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> GitHub</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Chrome Dev. Tool</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Firebase</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> VSCode</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Netlify</p>
                                    <p><FontAwesomeIcon icon={faCheckCircle} /> Heroku</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;