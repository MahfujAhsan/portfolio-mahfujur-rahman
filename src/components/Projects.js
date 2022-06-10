import React, { useEffect, useState } from 'react';
import MyProjects from './MyProjects';

const Projects = ({myProject}) => {
    
    return (
        <div>
            
                <h2>{myProject.name}</h2>
            
        </div>
    );
};

export default Projects;