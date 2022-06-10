import { faArrowCircleRight, faArrowLeft, faArrowRight, faArrowRightToBracket, faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link as button,  useNavigate, useParams } from 'react-router-dom';
import project1 from "../assets/computer-manager.png";
import project2 from "../assets/molinard.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/rmahfujurahman.png";
import Modal from './Modal';
import Projects from './Projects';

const MyProjects = () => {
    // const navigate = useNavigate();

    // const [isOpen, setIsOpen] = useState(false);

    // const handleModal = (id)  => {
    //     setIsOpen(true);
    //     navigate(`/project/${id}`);
    // };
    const [myProjects, setMyProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setMyProjects(data));
    }, []);
    return (
        <div className='container mt-5 text-white' id='myProjects'>
            <div className='text-center text-white mb-5'>
                <h4>My Recent</h4>
                <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">Projects</h2>
            </div>
            <div>
                {
                    myProjects.map(myProject => <Projects key={myProject.id} myProject={myProject}/>)
                }
            </div>
        </div>
    );
};

export default MyProjects;