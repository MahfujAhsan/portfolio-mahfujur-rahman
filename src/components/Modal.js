import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyProjects from './MyProjects';

const Modal = () => {
    // const [projects, setProjects] = useState([]);
    // useEffect(() => {
    //     fetch('projects.json')
    //     .then(res => res.json())
    //     .then(data => setProjects(data));
    // }, []);
    return (
        <div class="modal fade vw-100 vh-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>Hello</h2>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;