import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyProjects from './MyProjects';
import ProjectDetails from './ProjectDetails';

const Modal = () => {
    console.log()
    const { id } = useParams();
    const [projectDetails, setProjectDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/projects/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProjectDetails(data));
    });
    return (
        <div class="modal fade vw-100 vh-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close">{projectDetails}</button>
                    </div>
                    <div class="modal-body">
                        <h4>Hello</h4>
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