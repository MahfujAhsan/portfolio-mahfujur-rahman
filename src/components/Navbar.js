import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faBlog, faDisplay, faHomeLg, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className='container w-75 py-4 shadow-lg'>
            <nav className='text-center d-flex justify-content-around align-items-center'>
                <Link smooth to="/"><FontAwesomeIcon className='text-white' icon={faHomeLg} size="2x" /></Link>
                <Link smooth to="#about"><FontAwesomeIcon className='text-white' icon={faUser} size="2x" /></Link>
                <Link smooth to="#myProjects"><FontAwesomeIcon className='text-white' icon={faDisplay} size="2x" /></Link>
                <Link smooth to="#blog"><FontAwesomeIcon className='text-white' icon={faBlog} size="2x" /></Link>
                <Link smooth to="#contact"><FontAwesomeIcon className='text-white' icon={faIdCard} size="2x" /></Link>
            </nav>
        </div>
    );
};

export default Navbar;