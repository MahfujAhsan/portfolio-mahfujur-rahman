import React from 'react';
import notfound from "../assets/notFound.gif"

const NoMatch = () => {
    return (
        <div>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NoMatch;