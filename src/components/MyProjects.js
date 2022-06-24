import React from 'react';
import { useQuery } from 'react-query'

import Projects from './Projects';
import Spinner from './Spinner';

const MyProjects = () => {
    const {data:project, isLoading, refetch } = useQuery('project', () => fetch(`https://floating-escarpment-17462.herokuapp.com/projects`).then(res => res.json()));

    if(isLoading) {
        return <Spinner/>
    }
    return (
        <div id='#myProjects'>
            <div data-aos="fade"
             data-aos-easing="linear"
     data-aos-duration="3000" className='container text-white' id='myProjects'>
                <div className='text-center text-white mb-5'>
                    <h4 style={{ fontFamily: 'Kdam Thmor Pro', letterSpacing: '0.5rem' }}>My Recent</h4>
                    <h2 className="fs-2">Projects</h2>
                </div>
                <div className='row g-5'>
                    {
                        project.slice(-6).map(myProject => <Projects key={myProject._id} myProject={myProject} refetch={refetch} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;