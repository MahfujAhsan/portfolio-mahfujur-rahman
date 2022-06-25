import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = ({ myProject, refetch }) => {
    const navigate = useNavigate();
    const handleModal = id => {
        navigate(`/projects/${id}`)
    };
    refetch();
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-offset="200" className='col-12 col-lg-4'>
            <h4 className='fs-6 text-center py-2'>{myProject.name}</h4>
            <div>
                <div style={{ cursor: 'pointer' }} className='d-flex justify-content-center bg-image hover-zoom'>
                    <img className='img-fluid rounded-3' src={myProject.img} alt="" />
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button onClick={() => handleModal(myProject._id)} type="button" className='btn btn-outline-light btn-rounded w-50 border border-2 border-primary fw-bold'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;