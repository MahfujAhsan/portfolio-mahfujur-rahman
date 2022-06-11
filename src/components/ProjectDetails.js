import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faCode, faTowerBroadcast, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projectDetails, setProjectDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${projectId}`)
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [projectId]);
    console.log(projectDetails)
    return (
        <div className='my-5 container w-full'>
            <h3 className='pb-2 text-white text-center'>{projectDetails.name}</h3>
            <div className='w-75 mx-auto pb-3'>
                <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-mdb-target="#carouselExampleCaptions"
                            data-mdb-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-mdb-target="#carouselExampleCaptions"
                            data-mdb-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-mdb-target="#carouselExampleCaptions"
                            data-mdb-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner rounded-3">
                        <div class="carousel-item active">
                            <img style={{ maxHeight: "450px" }} src={projectDetails.images1} class="d-block w-100" alt="Wild Landscape" />

                        </div>
                        <div class="carousel-item">
                            <img style={{ maxHeight: "450px" }} src={projectDetails.images2} class="d-block w-100" alt="Camera" />

                        </div>
                        <div class="carousel-item">
                            <img style={{ maxHeight: "450px" }} src={projectDetails.images3} class="d-block w-100" alt="Exotic Fruits" />

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
                        <FontAwesomeIcon className='text-dark fs-4' icon={faArrowLeft} />
                    </button>
                    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
                        <FontAwesomeIcon className='text-dark fs-4' icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div className='w-75 mx-auto text-center'>
                <p className='text-white mx-auto'><span className='fw-bold'>FrontEnd Tech:</span> <br />{projectDetails.technologiesFrontend}</p>
            </div>
            <div className='w-75 mx-auto text-center'>
                <p className='text-white mx-auto'><span className='fw-bold'>BackEnd Tech:</span> <br />{projectDetails.technologiesBackend}</p>
            </div>
            <div>
                <h4 className='text-center text-white'>All Links</h4>
                <div className='d-flex justify-content-around py-3'>
                    <div className='text-white text-center py-2'>
                        <p><a className='text-decoration-none text-white fw-bold' href={projectDetails.liveLink} target="_blank"><FontAwesomeIcon title='Live Link' icon={faTowerBroadcast} size="3x"/></a></p>
                    </div>
                    <div className='text-white text-center py-2'>
                        <p> <a className='text-decoration-none text-white fw-bold' href={projectDetails.clientSideLink} target="_blank"><FontAwesomeIcon title='Client Side GitHub' icon={faGithub} size="3x"/></a></p>
                    </div>
                    <div className='text-white text-center py-2'>
                        <p> <a className='text-decoration-none text-white fw-bold' href={projectDetails.serverSideLink} target="_blank"><FontAwesomeIcon title='Server Side GitHub' icon={faGithubAlt} size="3x"/></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;