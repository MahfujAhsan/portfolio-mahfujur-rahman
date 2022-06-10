import { faArrowCircleRight, faArrowLeft, faArrowRight, faArrowRightToBracket, faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import project1 from "../assets/computer-manager.png";
import project2 from "../assets/molinard.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/rmahfujurahman.png";
import Modal from './Modal';

const MyProjects = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(true);
    }
    return (
        <div className='container mt-5 text-white' id='myProjects'>
            <div className='text-center text-white mb-5'>
                <h4>My Recent</h4>
                <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">Projects</h2>
            </div>
            <div className='row g-5'>
                <div className='col-12 col-lg-4'>
                    <h4 className='fs-6 text-center'>Computer Manager Ltd. (Manufacturer)</h4>
                    {/* <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-mdb-target="#carouselExampleIndicators"
                                data-mdb-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselExampleIndicators"
                                data-mdb-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-mdb-target="#carouselExampleIndicators"
                                data-mdb-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active bg-image hover-zoom">
                                <img style={{ maxHeight: '500px' }} className='w-100 rounded-3 d-block' src={computer1} alt="project1" />
                            </div>
                            <div class="carousel-item bg-image hover-zoom">
                                <img style={{ maxHeight: '500px' }} className='w-100 rounded-3 d-block' src={computer2} alt="project2" />
                            </div>
                            <div class="carousel-item bg-image hover-zoom">
                                <img style={{ maxHeight: '500px' }} className='w-100 rounded-3 d-block' src={computer3} alt="project3" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
                            <FontAwesomeIcon className='text-dark' icon={faArrowLeft} size="2x" bounce />
                        </button>
                        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
                            <FontAwesomeIcon className='text-dark' icon={faArrowRight} size="2x" bounce />
                        </button>
                    </div> */}
                    <div className='d-flex justify-content-center bg-image hover-zoom'>
                        <img style={{ maxHeight: '500px' }} className='img-fluid w-75 rounded' src={project1} alt="" />
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>TailwindCSS</span>
                        <span className='border border-2 px-3 rounded-3'>JavaScript</span>
                        <span className='border border-2 px-3 rounded-3'>ReactJS</span>
                    </div> */}
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>NodeJS</span>
                        <span className='border border-2 px-3 rounded-3'>ExpressJS</span>
                        <span className='border border-2 px-3 rounded-3'>MongoDB</span>
                    </div> */}
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={handleModal} type="button" className="btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <h4 className='fs-6 text-center'>Molinard Perfumer (Warehouse)</h4>
                    <div className='d-flex justify-content-center bg-image hover-zoom'>
                        <img style={{ maxHeight: '500px' }} className='img-fluid w-75 rounded-3' src={project2} alt="" />
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>Vanilla CSS</span>
                        <span className='border border-2 px-3 rounded-3'>JavaScript</span>
                        <span className='border border-2 px-3 rounded-3'>ReactJS</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>NodeJS</span>
                        <span className='border border-2 px-3 rounded-3'>ExpressJS</span>
                        <span className='border border-2 px-3 rounded-3'>MongoDB</span>
                    </div> */}
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={handleModal} type="button" className="btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <h4 className='fs-6 text-center'>Jade Mills (Real Estate Agent)</h4>
                    <div className='d-flex justify-content-center bg-image hover-zoom'>
                        <img style={{ maxHeight: '500px' }} className='img-fluid w-75 rounded-3' src={project3} alt="" />
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>React Bootstrap</span>
                        <span className='border border-2 px-3 rounded-3'>JavaScript</span>
                        <span className='border border-2 px-3 rounded-3'>ReactJS</span>
                    </div> */}
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={handleModal} type="button" className="btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <h4 className='fs-6 text-center'>Quick Computing (Product Management)</h4>
                    <div className='d-flex justify-content-center bg-image hover-zoom'>
                        <img style={{ maxHeight: '500px' }} className='img-fluid w-75 rounded-3' src={project5} alt="" />
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>HTML5</span>
                        <span className='border border-2 px-3 rounded-3'>CSS3</span>
                        <span className='border border-2 px-3 rounded-3'>JavaScript (ES6)</span>
                    </div> */}
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={handleModal} type="button" className="btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <h4 className='fs-6 text-center'>YDKJS (Book Review)</h4>
                    <div className='d-flex justify-content-center bg-image hover-zoom'>
                        <img style={{ height: '500px' }} className='img-fluid w-75 rounded-3' src={project4} alt="" />
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>HTML5</span>
                        <span className='border border-2 px-3 rounded-3'>CSS3</span>
                        <span className='border border-2 px-3 rounded-3'>ES6</span>
                    </div> */}
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={handleModal} type="button" className="btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <h4 className='fs-6 text-center'>Coming Soon</h4>
                    <div className='d-flex justify-content-center bg-image hover-zoom'>
                        <img style={{ height: '500px' }} className='img-fluid w-75 rounded-3' src={project6} alt="" />
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='border border-2 px-3 rounded-3'>ReactJS</span>
                        <span className='border border-2 px-3 rounded-3'>TypeScript</span>
                        <span className='border border-2 px-3 rounded-3'>Redux</span>
                    </div> */}
                    <div className='d-flex justify-content-center mt-4'>
                        <button onClick={handleModal} type="button" className="btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                    </div>
                </div>
                {/* {
                    !isOpen && <Modal />
                } */}
            </div>
        </div>
    );
};

export default MyProjects;