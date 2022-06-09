import React from 'react';

const MyProjects = () => {
    return (
        <div className='container mt-5 text-white' id='myProjects'>
            <h2 className='text-center mb-5'>Top Projects</h2>
            <div className='row'>
                <div className='col-4'>
                    <h4 className='fs-6 text-center'>Computer Manager Ltd. (Manufacturer)</h4>
                </div>
                <div className='col-4'>
                    <h4 className='fs-6 text-center'>Molinard Perfumer (Warehouse)</h4>
                </div>
                <div className='col-4'>
                    <h4 className='fs-6 text-center'>Jade Mills (Real Estate Agent)</h4>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;