import { faChrome, faCss3, faGithub, faGithubSquare, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHammer, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import express from "../assets/logos/express.png";
import firebase from "../assets/logos/firebase.png";
import heroku from "../assets/logos/heroku.png";
import jwt from "../assets/logos/jwt.png";
import mongodb from "../assets/logos/mongodb.png";
import mui from "../assets/logos/mui.png";
import netlify from "../assets/logos/netlify.png";
import bootstrap from "../assets/logos/react-bootstrap.png";
import vscode from "../assets/logos/vscode.png";
import tailwind from "../assets/logos/tailwind.png";

const Skills = () => {
    return (
        <div className='container pt-5 my-5'>
            <div className='text-center text-white'>
                <h4 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem'}}>The Act Of</h4>
                <h2 className="fs-2">My Specialization</h2>
            </div>
            <div className='row pt-5 g-5'>
                <div data-aos="zoom-in"
                    data-aos-duration="2000" className='col-12 col-lg-6 shadow-lg'>
                    <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className='text-white fs-4 text-center'><FontAwesomeIcon icon={faTrophy} style={{ color: '#6E4035' }} size='xl' bounce /> Skills</h2>
                    <div className='text-white d-flex justify-content-between mt-5'>
                        <div className='text-start'>
                            <p><FontAwesomeIcon icon={faHtml5} style={{ color: '#DD4B25' }} size="2x" /> HTML5</p>
                            <p><FontAwesomeIcon icon={faCss3} style={{ color: '#254BDD' }} size="2x" /> CSS3</p>
                            <p><img src={bootstrap} alt="" /> React-Bootstrap</p>
                            <p><img src={tailwind} alt="" /> TailwindCss</p>
                            <p><img src={mui} alt="" />  Material UI</p>
                            <p><img src={firebase} alt="" />  Firebase</p>
                        </div>
                        <div className='text-start'>
                            <p><FontAwesomeIcon icon={faJs} style={{ color: '#EFD81D' }} size="2x" /> Javascript (ES6)</p>
                            <p><FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB' }} size="2x" /> ReactJS</p>
                            <p><FontAwesomeIcon icon={faNode} style={{ color: '#89BB3C' }} size="2x" /> NodeJS</p>
                            <p><img src={express} alt="" /> ExpressJS</p>
                            <p><img src={mongodb} alt="" />  MongoDB</p>
                            <p><img src={jwt} alt="" />  JWT Token</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out"
                    data-aos-duration="2000" className='col-12 col-lg-6'>
                    <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className='text-white fs-4 text-center'><FontAwesomeIcon icon={faHammer} style={{ color: '#6E4035' }} size='xl' bounce /> Tools</h2>
                    <div className='text-white mt-5 d-flex justify-content-center align-items-center'>
                        <div className='text-start row w-100'>
                            <div className='col-7'>
                                <p><FontAwesomeIcon icon={faGithub} size="2x" /> GitHub</p>
                                <p><FontAwesomeIcon icon={faChrome} size="2x" /> Chrome Dev. Tool</p>
                                <p><img src={firebase} alt="" />  Firebase</p>
                            </div>
                            <div className='col-5'>
                                <p><img src={vscode} alt="" />  VSCode</p>
                                <p><img src={netlify} alt="" />  Netlify</p>
                                <p><img src={heroku} alt="" />  Heroku</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;