import React, { useEffect, useState } from 'react';

import Projects from './Projects';

const MyProjects = () => {
    const [project, setProject] = useState([]);
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
                        project.map(myProject => <Projects key={myProject._id} myProject={myProject} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;