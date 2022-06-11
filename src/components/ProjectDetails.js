import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from './Modal';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projectDetails, setProjectDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${projectId}`)
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    });
    return (
        <div>
            <h2 className='text-white'>{projectId}</h2>
            <h3>{projectDetails.name}</h3>
            <img style={{height: '500px'}} src={projectDetails.img} alt="" />
        </div>
    );
};

export default ProjectDetails;