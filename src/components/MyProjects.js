import { faArrowCircleRight, faArrowLeft, faArrowRight, faArrowRightToBracket, faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link as button, useNavigate, useParams } from 'react-router-dom';
import project1 from "../assets/computer-manager.png";
import project2 from "../assets/molinard.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/rmahfujurahman.png"
import Modal from './Modal';
import Projects from './Projects';

const MyProjects = () => {
    const [project, setProject] = useState([]);
    const [modal, setModal] = useState(null);
    useEffect(() => {
        const url = `http://localhost:5000/projects`
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);
    return (
        <div>
            <div className='container mt-5 text-white' id='myProjects'>
                <div className='text-center text-white mb-5'>
                    <h4>My Recent</h4>
                    <h2 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }} className="fs-2">Projects</h2>
                </div>
                <div className='row g-5'>
                    {
                        project.map(myProject => <Projects key={myProject._id} myProject={myProject} setModal={setModal} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;