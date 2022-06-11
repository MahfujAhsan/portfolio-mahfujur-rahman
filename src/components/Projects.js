import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from './Modal';
import MyProjects from './MyProjects';

const Projects = ({ myProject }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleModal = id => {
        navigate(`/projects/${id}`)
    };
    return (
        <div className='col-12 col-lg-4'>
            <h4 className='fs-6 text-center'>{myProject.name}</h4>
            <div className=''>
                <div className='d-flex justify-content-center bg-image hover-zoom'>
                    <img style={{ height: '500px' }} className='img-fluid w-75 rounded' src={myProject.img} alt="" />
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button onClick={() => handleModal(myProject._id)} type="button" className='btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold' data-mdb-toggle="modal" data-mdb-target="#exampleModal">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;